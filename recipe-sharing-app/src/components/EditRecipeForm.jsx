import { useState } from "react";
import { useRecipeStore } from "./recipeStore";

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (e) => {
    e.preventDefault();

    updateRecipe({
      id: recipe.id,
      title,
      description,
    });

    setIsEditing(false);
  };

  if (!isEditing) {
    return (
      <button
        onClick={() => setIsEditing(true)}
        className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700"
      >
        Edit
      </button>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-2 w-full">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="p-2 border rounded-lg"
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="p-2 border rounded-lg"
      />

      <div className="flex gap-2">
        <button className="bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700">
          Save
        </button>

        <button
          type="button"
          onClick={() => setIsEditing(false)}
          className="bg-gray-500 text-white px-3 py-1 rounded-lg hover:bg-gray-600"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditRecipeForm;
