import { useParams, Link, useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = useRecipeStore((state) => state.recipes.find((r) => r.id === id));

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
        <Link to="/">Back to recipes</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <div style={{ marginTop: '16px' }}>
        <Link to={`/recipes/${id}/edit`} style={{ marginRight: '10px' }}>
          Edit Recipe
        </Link>

        <DeleteRecipeButton recipeId={id} onDeleted={() => navigate('/')} />
      </div>

      <div style={{ marginTop: '20px' }}>
        <Link to="/">← Back to all recipes</Link>
      </div>
    </div>
  );
};

export default RecipeDetails;
