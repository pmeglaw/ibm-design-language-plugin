"""Read-only comparison of an installed plugin with this checkout's release."""
from pathlib import Path
import argparse
import hashlib
import json

ROOT = Path(__file__).resolve().parents[1]


def is_upload_metadata(installed):
    """Recognize only the observed skills-only Codex upload compatibility wrapper."""
    try:
        source = json.loads((installed / 'plugin.json').read_text(encoding='utf-8'))
        metadata = json.loads((installed / '.codex-plugin/plugin.json').read_text(encoding='utf-8'))
        name, version, description = (source[key] for key in ('name', 'version', 'description'))
        if not all(isinstance(value, str) for value in (name, version, description)):
            return False
        return metadata == {
            'name': name, 'version': version, 'description': description,
            'author': {'name': 'Workspace upload'},
            'interface': {
                'displayName': name, 'shortDescription': description,
                'longDescription': description, 'developerName': 'Workspace upload',
                'category': 'Other', 'capabilities': [], 'defaultPrompt': None,
            },
            'keywords': [], 'skills': './skills',
        }
    except (OSError, ValueError, KeyError, TypeError):
        return False


def compare_install(installed, expected):
    installed = Path(installed)
    if not installed.is_dir() or installed.is_symlink():
        raise ValueError('Installation must be an existing directory, not a symlink')
    paths = list(installed.rglob('*'))
    if any(p.is_symlink() for p in paths):
        raise ValueError('Installation contains a symlink')
    actual = {p.relative_to(installed).as_posix():
              hashlib.sha256(p.read_bytes()).hexdigest()
              for p in paths if p.is_file()}
    missing = sorted(expected.keys() - actual.keys())
    extra = sorted(actual.keys() - expected.keys())
    changed = sorted(k for k in actual.keys() & expected.keys()
                     if actual[k] != expected[k])
    host_metadata = []
    # Never exempt a release-owned file or trust identity from a changed manifest.
    overlay = '.codex-plugin/plugin.json'
    if (overlay in extra and 'plugin.json' in expected and
            'plugin.json' not in missing + changed and is_upload_metadata(installed)):
        extra.remove(overlay)
        host_metadata.append(overlay)
    return {'status': 'pass' if not (missing or extra or changed) else 'fail',
            'files': len(actual), 'missing': missing, 'extra': extra, 'changed': changed,
            'host_metadata': host_metadata}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('installed', type=Path)
    args = parser.parse_args()
    manifest = json.loads((ROOT / 'plugins/ibm-design-language/plugin.json').read_text())
    version = manifest['version']
    expected = json.loads((ROOT / 'releases' / version / 'files.json').read_text())
    try:
        result = compare_install(args.installed, expected)
    except (ValueError, OSError) as error:
        result = {'status': 'fail', 'error': str(error)}
    result['version'] = version
    print(json.dumps(result, indent=2))
    return 0 if result['status'] == 'pass' else 1


if __name__ == '__main__':
    raise SystemExit(main())
