import os

from tartiflette import Resolver
from tartiflette_starlette import TartifletteApp

from .data import INGREDIENTS, RECIPES
from .settings import DEBUG


@Resolver("Query.hello")
async def hello(parent, args, ctx, info):
    return "Hello, GraphQL!"

# Create a Tartiflette resolver for the `recipes` field.
@Resolver("Query.recipes")
async def resolve_recipes(parent, args, ctx, info):
    return RECIPES

# Create a Tartiflette resolver for the `recipe` field.
@Resolver("Query.recipe")
async def resolve_recipe(parent, args, ctx, info):
    recipe = [r for r in RECIPES if r["id"] == int(args["id"])]

    if not recipe:
        return None

    return recipe[0]

# Create a Tartiflette resolver for the `ingredients` field,
# which corresponds to a recipe.
@Resolver("Recipe.ingredients")
async def resolve_ingredients(parent, args, ctx, info):
    if parent and parent["id"] in INGREDIENTS:
        return INGREDIENTS[parent["id"]]

    return None


# Use schemas defined in the sdl directory.
# See: https://tartiflette.io/docs/api/engine
sdl = os.path.dirname(os.path.abspath(__file__)) + "/sdl"
app = TartifletteApp(sdl=sdl, graphiql=DEBUG)
