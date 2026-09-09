const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

export const fetchAllRecipes = async () => {
  const res = await fetch(`${API_URL}/recipes`);
  if (!res.ok) {
    throw new Error('Failed to fetch recipes');
  }
  const recipes = await res.json();
  return recipes;
};
export const fetchRecipesSearched = async (searchQuery) => {
  const res = await fetch(`${API_URL}/recipes?query=${searchQuery}`);
  if (!res.ok) {
    throw new Error('Failed to fetch recipes');
  }
  const recipes = await res.json();
  return recipes;
};

export const fetchRecipesByCategory = async (category) => {
  const res = await fetch(`${API_URL}/recipes?category=${category}`);
  if (!res.ok) {
    throw new Error('Failed to fetch recipes by category');
  }
  const recipes = await res.json();
  return recipes;
};

export const fetchRecipesByUser = async (userId) => {
  const res = await fetch(`${API_URL}/recipes?userId=${userId}`);
  if (!res.ok) {
    throw new Error('Failed to fetch recipes by user');
  }
  const recipes = await res.json();
  return recipes;
};

export const fetchRecipeById = async (id) => {
  const res = await fetch(`${API_URL}/recipes/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch recipe');
  }
  const recipe = await res.json();
  return recipe[0];
};

export const postNewRecipe = async (newRecipe) => {
  const res = await fetch(`${API_URL}/recipes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newRecipe),
  });
  if (!res.ok) {
    throw new Error('Failed to post new recipe');
  }
  const result = await res.json();
  return result[0];
};
