from pathlib import Path
from starlette.config import Config

# See: https://www.starlette.io/config/
config = Config(".env")
DEBUG = config("DEBUG", cast=bool, default=True)

_BUILD_DIR = Path(".").parent / "react-app" / "build"

if _BUILD_DIR.exists():
    TEMPLATES_DIR = str(_BUILD_DIR)
    STATIC_DIR = str(_BUILD_DIR / "static")
else:
    _BUILD_DIR = _BUILD_DIR.parent / "public"
    TEMPLATES_DIR = str(_BUILD_DIR)
    STATIC_DIR = str(_BUILD_DIR)
