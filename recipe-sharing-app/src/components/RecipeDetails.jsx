import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipes = useRecipeStore((state) => state.recipes);

  const recipe = recipes.find((r) => r.id.toString() === id);

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
        <button
          onClick={() => navigate('/')}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Back to Recipes
        </button>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">{recipe.title}</h2>
      <p>{recipe.description}</p>
      <button
        onClick={() => navigate('/')}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Back to Recipes
      </button>
    </div>
  );
};

export default RecipeDetails;


