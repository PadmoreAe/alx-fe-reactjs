import { useRecipeStore } from "./recipeStore";

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  return (
    <button
      onClick={() => deleteRecipe(recipeId)}
      className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700"
    >
      Delete
    </button>
  );
};

export default DeleteRecipeButton;
