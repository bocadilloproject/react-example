<p align="center">
<img src="https://github.com/bocadilloproject/react-example/raw/master/react-frontend/src/bocadillo.png"/>

<img src="https://github.com/bocadilloproject/react-example/raw/master/react-frontend/src/logo.svg"/>
</p>

This repository contains an example of a Bocadillo server used in conjunction with a React frontend.

The frontend was bootstrapped with the popular and convenient [create-react-app](https://facebook.github.io/create-react-app/), though any React app can be used with Bocadillo. It has lots of excellent [documentation](https://facebook.github.io/create-react-app/docs/getting-started), so if you want to do something not covered in this repository they will have you covered.

## Getting Started

The first step is to install dependencies.

Let's install the Python dependencies. You might want to do this inside a virtual environment.

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

### Hot Reloading

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


Any requests that fail on the 3000 port will be retried at the 8000 port (the Bocadillo app) due to the `proxy` key in`react-app/package.json`. To learn more, see Create React App's [documentation](https://facebook.github.io/create-react-app/docs/proxying-api-requests-in-development).

## Building

create-react-app can easily build production ready code:
```
cd react-frontend
yarn build  # or npm build
```

To learn more, see create-react-app's [documentation](https://facebook.github.io/create-react-app/docs/production-build).

Now all the JavaScript and static assets have been built and minified, and no longer need to be watched for changes or rebuilt.

You can now serve the whole React app and all of its static assets with Bocadillo:

```bash
python app.py
```

Now open http://localhost:8000 to see your production-ready app!
