import { create } from "zustand";


export const useRecipeStore = create((set) => ({
  // The Data (State)
  recipes: [],

  // The Actions (Functions to change data)
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  setRecipes: (recipes) => set({ recipes }),

  // The Actions (Functions to delete data)
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),
}));

// export default useRecipeStore;