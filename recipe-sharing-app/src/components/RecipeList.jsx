import React from 'react';
import { useRecipeStore } from '../store/recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';
import { Link } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  return (
    <div>
      {filteredRecipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        <ul>
          {filteredRecipes.map((recipe) => {
            const isFavorite = favorites.includes(recipe.id);
            return (
              <li key={recipe.id} className="mb-4 p-3 border rounded">
                <h3 className="font-bold text-lg">
                  <Link
                    to={`/recipes/${recipe.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    {recipe.title}
                  </Link>
                </h3>
                <p>{recipe.description}</p>
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() =>
                      isFavorite
                        ? removeFavorite(recipe.id)
                        : addFavorite(recipe.id)
                    }
                    className={`px-3 py-1 rounded ${
                      isFavorite
                        ? 'bg-red-500 text-white'
                        : 'bg-green-500 text-white'
                    }`}
                  >
                    {isFavorite ? 'Unfavorite' : 'Favorite'}
                  </button>
                  <DeleteRecipeButton recipeId={recipe.id} />
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;







