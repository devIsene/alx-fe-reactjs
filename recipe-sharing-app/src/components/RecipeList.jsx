import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  if (recipes.length === 0) {
    return <p>No recipes yet. Add one!</p>;
  }

  return (
    <div>
      <h2>Recipes</h2>
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}
        >
          <h3>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
          <div style={{ marginTop: '8px' }}>
            <Link to={`/recipes/${recipe.id}/edit`} style={{ marginRight: '10px' }}>
              Edit
            </Link>
            <Link to={`/recipes/${recipe.id}`}>View</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;


