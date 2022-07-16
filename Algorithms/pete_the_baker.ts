/**
 * Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. 
 * Can you help him to find out, how many cakes he could bake considering his recipes?

 * Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number
   of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200).
   Ingredients that are not present in the objects, can be considered as 0.
   
 * @param recipe - The recipe of the cake
 * @param available - The available ingredients
 * @returns The minimum number of cakes that can be made
 */

function cakes(
  recipe: Record<string, number>,
  available: Record<string, number>
): number {
  const recipeList = Object.keys(recipe);
  const availableList = Object.keys(available);

  const enoughIngredients = recipeList.every((ingr) =>
    availableList.includes(ingr)
  );
  if (!enoughIngredients) return 0;

  const normalizedAvailableList = availableList
    .filter((ingredient) => recipeList.includes(ingredient))
    .map((key) => available[key] / recipe[key]);

  return normalizedAvailableList.every((ammount) => ammount >= 1)
    ? Math.floor(Math.min(...normalizedAvailableList))
    : 0;
}

// Returns 2
const recipe = { flour: 500, sugar: 200, eggs: 1 };
const available = { flour: 1200, sugar: 1200, eggs: 5 };
cakes(recipe, available);

// Returns 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});
