import React, { useEffect } from 'react';
import useRecipeStore from '../store/recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );

  // Generate recommendations whenever component loads
  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Recommended Recipes</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations available.</p>
      ) : (
        <ul>
          {recommendations.map((recipe) => (
            <li key={recipe.id} className="mb-2 border p-2 rounded">
              <h3 className="font-semibold">{recipe.title}</h3>
              <p>{recipe.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecommendationsList;
