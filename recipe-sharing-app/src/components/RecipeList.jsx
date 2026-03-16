import {useRecipeStore}  from "../stores/useRecipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  const handleRecipe = recipes.map((recipe)=>(
    <div key={recipe.id}>
      <p>{recipe.title}</p>
      <h3>{recipe.description}</h3>
    </div>
  ))

  return (
    <div>
      {handleRecipe}
    </div>
  );
};

export default RecipeList
