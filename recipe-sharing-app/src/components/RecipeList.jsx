import { useRecipeStore } from "./recipeStore";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div className="max-w-xl mx-auto mt-10 space-y-6">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
        >
          <h3 className="text-lg font-semibold">{recipe.title}</h3>
          <p className="text-gray-600 mt-1">{recipe.description}</p>

          <div className="flex gap-3 mt-4">
            <EditRecipeForm recipe={recipe} />
            <DeleteRecipeButton recipeId={recipe.id} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;

// import {useRecipeStore}  from "./recipeStore";

// const RecipeList = () => {
//   const recipes = useRecipeStore((state) => state.recipes); //get the recipes from the store

//   const handleRecipe = recipes.map((recipe)=>(
//     <div key={recipe.id}>
//       <p>{recipe.title}</p>
//       <h3>{recipe.description}</h3>
//     </div>
//   ))

//   return (
//     <div>
//       {handleRecipe}
//     </div>
//   );
// };

// export default RecipeList
