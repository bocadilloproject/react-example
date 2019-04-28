import React, { Component } from "react";
import logo from "./logo.svg";
import bocadillo_logo from "./bocadillo.png";
import "./App.css";

import gql from "graphql-tag";
import { Query } from "react-apollo";

function Ingredient(props) {
  const { name, quantity, type } = props;
  return (
    <p>
      {name}, {quantity} {type.toLowerCase()}
    </p>
  );
}
function Recipe(props) {
  const recipe_query = gql`
    {
      recipe(id: $id) {
        id
        name
        cookingTime
        ingredients {
          name
          quantity
          type
        }
      }
    }
  `;
  return (
    <Query query={recipe_query} variables={{ id: props.id }}>
      {({ loading, error, data }) => {
        if (loading) {
          return "Loading...";
        }
        if (error) {
          return `Error: ${error.message}`;
        }
        const { name, cookingTime, ingredients } = data.recipe;
        return (
          <div>
            <h3>{name}</h3>
            Cooking time: {cookingTime} minutes
            <h4>Ingredients</h4>
            {ingredients.map(i => (
              <Ingredient {...i} key={i.name} />
            ))}
          </div>
        );
      }}
    </Query>
  );
}
function Recipes(props) {
  const recipes_query = gql`
    {
      recipes {
        id
        name
      }
    }
  `;
  return (
    <Query query={recipes_query}>
      {({ loading, error, data }) => {
        if (loading) {
          return "Loading...";
        }
        if (error) {
          return `Error: ${error.message}`;
        }
        return data.recipes.map(recipe => {
          const { name, id } = recipe;
          return (
            <button
              className="recipe-button"
              key={id}
              onClick={() => props.onClick(id)}
            >
              {name}
            </button>
          );
        });
      }}
    </Query>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { recipeId: null };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <img
              src={bocadillo_logo}
              className="App-logo"
              alt="bocadillo logo"
            />
            <img src={logo} className="App-logo" alt="react logo" />
          </div>
          <p>Hello from Bocadillo, React, and React Apollo!</p>

          <p>This is an example that incorporates GraphQL.</p>
          <p>
            Edit <code>react-app/src/App.js</code> or <code>server/app.py</code>{" "}
            and save to reload.
          </p>

          <a
            className="App-link"
            href="https://github.com/bocadilloproject/bocadillo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Bocadillo
          </a>
          <br />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div className="graphql-example">
          <h2>Choose a Recipe</h2>
          Recipes are fetched with a React Apollo call to Bocadillo's GraphQL
          endpoint.
          <p />
          <Recipes onClick={id => this.setState({ recipeId: id })} />
          {this.state.recipeId ? <Recipe id={this.state.recipeId} /> : null}
        </div>
      </div>
    );
  }
}

export default App;
