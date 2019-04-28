from pathlib import Path
from starlette.config import Config

_BUILD_DIR = Path(".").parent / "react-app" / "build"
TEMPLATES_DIR = str(_BUILD_DIR)
STATIC_DIR = str(_BUILD_DIR / "static")

# see https://www.starlette.io/config/
config = Config(".env")
DEBUG = config("DEBUG", cast=bool, default=False)
