from .graphql import app as graphql_app
import time
from bocadillo import App, Templates

from . import settings


app = App()
app.mount("/graphql", graphql_app)
templates = Templates(app, directory=settings.TEMPLATES_DIR)


@app.route("/")
async def index(req, res):
    res.html = await templates.render("index.html")

