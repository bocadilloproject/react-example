<p align="center">
<img src="https://github.com/bocadilloproject/react-example/raw/master/react-app/src/bocadillo.png" height="200px"/>
<img src="https://github.com/bocadilloproject/react-example/raw/master/react-app/src/logo.svg?sanitize=true" height="200px"/>
<img src="https://github.com/bocadilloproject/react-example/raw/react-apollo/react-app/src/graphql.png" height="200px"/>
</p>

This repository contains an example of a [Bocadillo](https://github.com/bocadilloproject/bocadillo) server used in conjunction with a React frontend. The Bocadillo server has a GraphQL endpoint, and the frontend uses React Apollo, a GraphQL library that works with React.

The frontend for this example repository was bootstrapped with the popular and convenient [create-react-app](https://facebook.github.io/create-react-app/). It has lots of excellent [documentation](https://facebook.github.io/create-react-app/docs/getting-started), so if you want to do something not documented in this repository, they will have you covered. React applications not built with create-react-app will also work fine with Bocadillo!

## Getting Started

First clone this repository, then install dependencies.

Install dependencies for [tartiflette](https://tartiflette.io/docs/tutorial/install-tartiflette), the engine that Bocadillo uses for its GraphQL server.

When you've finished that, install Python dependencies:

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

#### Proxy to Bocadillo in Development

Any requests that do not have `text/html` in their `Accept` header will be proxied to Bocadillo. To learn more about how requests are proxied with create-react-app, see its [documentation](https://facebook.github.io/create-react-app/docs/proxying-api-requests-in-development).

#### Hot Reloding

Any changes to the frontend code will cause the browser to reload immediately. Changes to the server code will be available immediately, but you may have to refresh the browser yourself depending on when your React App makes requests to the Bocadillo server.

## Experiment with [GraphiQL](https://github.com/graphql/graphiql)
GraphiQL is a graphical interactive in-browser GraphQL IDE.

This examples serves GraphiQL http://127.0.0.1:8000/graphql when the DEBUG setting is `True`. To set DEBUG to true, create a file named `.env` at the root of the project:
```
# .env
# Don't commit this to source control.
# Eg. Include ".env" in your `.gitignore` file.
DEBUG=True
```

Now start uvicorn again:
```bash
uvicorn server.asgi:app --reload
```

Open http://127.0.0.1:8000/graphql, and try entering some GraphQL queries:
```graphql
{
  recipes {
    name
  }
}
```

```
{
  recipes {
    id
    name
    cookingTime
    ingredients {
      name
      quantity
    }
  }
}
```


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
