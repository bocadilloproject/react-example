from bocadillo import App, Templates
import os

app = App()
TEMPLATES_DIR = os.path.join(
    os.path.dirname(os.path.realpath(__file__)), "react-frontend/build"
)
STATIC_DIR = os.path.join(
    os.path.dirname(os.path.realpath(__file__)), "react-frontend/build/static"
)

app = App(static_dir=STATIC_DIR)
templates = Templates(app, directory=TEMPLATES_DIR)


@app.route("/")
async def index(req, res):
    res.html = await templates.render("index.html")


if __name__ == "__main__":
    app.run()
