<p align="center">
<img src="https://github.com/bocadilloproject/react-example/raw/master/react-app/src/bocadillo.png" height="200px"/>
<img src="https://github.com/bocadilloproject/react-example/raw/master/react-app/src/logo.svg?sanitize=true" height="200px"/>
</p>

This repository contains an example of a [Bocadillo](https://github.com/bocadilloproject/bocadillo) server used in conjunction with a React frontend.

To see an example with GraphQL and Apollo integration see the [react-apollo](https://github.com/bocadilloproject/react-example/tree/react-apollo) branch.

The frontend for this example repository was bootstrapped with the popular and convenient [create-react-app](https://facebook.github.io/create-react-app/). It has lots of excellent [documentation](https://facebook.github.io/create-react-app/docs/getting-started), so if you want to do something not documented in this repository, they will have you covered. React applications not built with create-react-app will also work fine with Bocadillo!

## Getting Started

First clone this repository, then install dependencies.

Let's install the Python dependencies first. You might want to do this inside a virtual environment.

```bash
pip install -r requirements.txt
```

Next, install the JavaScript dependencies:

```bash
cd react-app
yarn install  # or npm install
```

## Development Instructions

Now that you have dependencies installed, you can start development.

### Run the Server

In one terminal, run the Bocadillo app with the uvicorn server. This will run on port 8000 and expose its API endpoints to the React app. Pass the `--reload` flag so that changes made to the Python code automatically reload and are available to the React app.

```bash
uvicorn server.asgi:app --reload
```

### Run the React Application

In another terminal, run React's development server on its default port of 3000:

```bash
cd react-app
yarn start  # or npm start
```

Now open `http://localhost:3000` to see your React app.

It should look like this:

<p align="center">
<a href="https://github.com/bocadilloproject/react-example/raw/master/screenshot.png">
<img src="https://github.com/bocadilloproject/react-example/raw/master/screenshot.png"/>
</a>
</p>

#### Proxy to Bocadillo in Development

Any requests that do not have `text/html` in their `Accept` header will be proxied to Bocadillo. To learn more about how requests are proxied with create-react-app, see its [documentation](https://facebook.github.io/create-react-app/docs/proxying-api-requests-in-development).

#### Hot Reloading

Any changes to the frontend code will cause the browser to reload immediately. Changes to the server code will be available immediately, but you may have to refresh the browser yourself depending on when your React App makes requests to the Bocadillo server.

## Building

create-react-app can build production ready code, which compiles and minifies the html, JavaScript, and css:

```
cd react-app
yarn build  # or npm run build
```

To learn more, see create-react-app's [documentation](https://facebook.github.io/create-react-app/docs/production-build).

You can now serve the whole React app and all of its static assets with Bocadillo:

```bash
uvicorn server.asgi:app
```

Now open http://localhost:8000 to see your production-ready app!
