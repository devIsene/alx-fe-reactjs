import React from 'react';
import useRecipeStore from '../store/recipeStore';

const FavoritesList = () => {
  const favorites = useRecipeStore((state) =>
    state.favorites.map((id) =>
      state.recipes.find((recipe) => recipe.id === id)
    )
  );

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">My Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <ul>
          {favorites.map(
            (recipe) =>
              recipe && (
                <li key={recipe.id} className="mb-2 border p-2 rounded">
                  <h3 className="font-semibold">{recipe.title}</h3>
                  <p>{recipe.description}</p>
                </li>
              )
          )}
        </ul>
      )}
    </div>
  );
};

export default FavoritesList;
