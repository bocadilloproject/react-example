import time

from bocadillo import App, Templates

from . import settings
from .graphql import app as graphql_app

app = App()
app.mount("/", graphql_app)
app.on("startup", graphql_app.startup)
templates = Templates(app, directory=settings.TEMPLATES_DIR)


@app.route("/")
async def index(req, res):
    res.html = await templates.render("index.html")


@app.route("/api/message")
async def get_message(req, res):
    now = time.strftime("%I:%M:%S %p")
    message = f"Hello from the Bocadillo server! The time is {now}."
    res.json = {"message": message}
