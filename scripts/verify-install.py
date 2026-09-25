"""Read-only comparison of an installed plugin with this checkout's release."""
from pathlib import Path
import argparse
import hashlib
import json

ROOT = Path(__file__).resolve().parents[1]


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
    return {'status': 'pass' if not (missing or extra or changed) else 'fail',
            'files': len(actual), 'missing': missing, 'extra': extra, 'changed': changed}


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
