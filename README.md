<p align="center">
<img src="https://github.com/bocadilloproject/react-example/raw/master/react-frontend/src/bocadillo.png" height="200px"/>
<img src="https://github.com/bocadilloproject/react-example/raw/master/react-frontend/src/logo.svg?sanitize=true" height="200px"/>
</p>

This repository contains an example of a Bocadillo server used in conjunction with a React frontend.

The frontend for this example repository was bootstrapped with the popular and convenient [create-react-app](https://facebook.github.io/create-react-app/). It has lots of excellent [documentation](https://facebook.github.io/create-react-app/docs/getting-started), so if you want to do something not documented in this repository, they will have you covered. React applications not built with create-react-app will also work fine with Bocadillo!

## Getting Started
Clone this repository, then install dependencies.

Let's install the Python dependencies first. You might want to do this inside a virtual environment.

```bash
pip install bocadillo
```

Next, install the JavaScript dependencies:

```bash
cd react-app
yarn install  # or npm install
```

## Development Instructions

Now that you have dependencies installed, you can start development.

You can use `create-react-app`'s hot-reloading functionality with Bocadillo, which allows you to make changes and instantly see them in the browser.

In one terminal, run Bocadillo on its default port of 8000 to expose its API endpoints to the React app:

```bash
python app.py
```

In another terminal, run React's development server on its default port of 3000:

```bash
cd react-frontend
yarn start  # or npm start
```

Now open `http://localhost:3000` to see your React app.

It should look like this:
<p align="center">
<a href="https://github.com/bocadilloproject/react-example/raw/master/screenshot.png">
<img src="https://github.com/bocadilloproject/react-example/raw/master/screenshot.png"/>
</a>
</p>


Any requests that fail on port 3000 will be retried on port 8000 (where the Bocadillo app is being served) due to the `proxy` key in`react-app/package.json`. To learn more about how requests are proxied with create-react-app, see its [documentation](https://facebook.github.io/create-react-app/docs/proxying-api-requests-in-development).

## Building

create-react-app can build production ready code, which compiles and minifies the html, JavaScript, and css:
```
cd react-frontend
yarn build  # or npm build
```

To learn more, see create-react-app's [documentation](https://facebook.github.io/create-react-app/docs/production-build).


You can now serve the whole React app and all of its static assets with Bocadillo:

```bash
python app.py
```

Now open http://localhost:8000 to see your production-ready app!
