import time

from bocadillo import App, Templates

from . import settings

app = App()
templates = Templates(app, directory=settings.TEMPLATES_DIR)


@app.route("/")
async def index(req, res):
    res.html = await templates.render(f"index.html")


@app.route("/page/{name}")
async def render_page(req, res, name):
    res.html = await templates.render(f"{name}")


@app.route("/api/message")
async def api(req, res):
    current_time = time.strftime("%I:%M:%S %p")
    message = f"Hello from the Bocadillo server! The time is {current_time}."
    res.json = {"message": message}
