"""Copy the reviewed fixture and current shell assets into ignored local work.

No downloads, model calls, application startup or deletion. Run npm separately.
"""
from pathlib import Path
import hashlib
import json
import shutil

ROOT = Path(__file__).resolve().parents[1]
target = ROOT / '.verification' / 'nextjs-shell'
shutil.copytree(ROOT / 'tests' / 'nextjs-shell', target, dirs_exist_ok=True)
assets = ROOT / 'plugins/ibm-design-language/skills/ibm-design-language/assets/nextjs-shell'
destination = target / 'components/shell'
destination.mkdir(parents=True, exist_ok=True)
hashes = {}
for source in sorted(assets.iterdir()):
    if source.is_file():
        shutil.copy2(source, destination / source.name)
        hashes[source.name] = hashlib.sha256(source.read_bytes()).hexdigest()
(target / 'shell-source-hashes.json').write_text(json.dumps(hashes, indent=2) + '\n')
print(target)
