from pathlib import Path

_BUILD_DIR = Path(".").parent / "react-app" / "build"

if _BUILD_DIR.exists():
    TEMPLATES_DIR = str(_BUILD_DIR)
    STATIC_DIR = str(_BUILD_DIR / "static")
else:
    _BUILD_DIR = _BUILD_DIR.parent / "public"
    TEMPLATES_DIR = str(_BUILD_DIR)
    STATIC_DIR = str(_BUILD_DIR)
