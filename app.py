from bocadillo import App, Templates
import os
import time


app = App()
TEMPLATES_DIR = os.path.join(
    os.path.dirname(os.path.realpath(__file__)), "react-app/build"
)
STATIC_DIR = os.path.join(
    os.path.dirname(os.path.realpath(__file__)), "react-app/build/static"
)

app = App(static_dir=STATIC_DIR)
templates = Templates(app, directory=TEMPLATES_DIR)


@app.route("/")
async def index(req, res):
    res.html = await templates.render("index.html")


@app.route("/api/message")
async def api(req, res):
    now = time.strftime("%I:%M:%S %p")
    message = f"Hello from the Bocadillo server! The time is {now}."
    res.media = {"message": message}


if __name__ == "__main__":
    app.run()
