import React from 'react';
import { useRecipeStore } from '../store/recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      {filteredRecipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        <ul>
          {filteredRecipes.map((recipe) => (
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
              <DeleteRecipeButton id={recipe.id} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;





