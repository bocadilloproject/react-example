from pathlib import Path

_BUILD_DIR = Path(".").parent / "react-app" / "build"
TEMPLATES_DIR = str(_BUILD_DIR)
STATIC_DIR = str(_BUILD_DIR / "static")
