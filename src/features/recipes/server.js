const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export const fetchAllRecipes = async () => {
  const res = await fetch(`${API_URL}/api/recipes`);
  if (!res.ok) {
    throw new Error('Failed to fetch recipes');
  }
  const recipes = await res.json();
  return recipes;
};

export const fetchRecipesSearched = async (searchQuery) => {
  const res = await fetch(`${API_URL}/api/recipes?query=${searchQuery}`);
  if (!res.ok) {
    throw new Error('Failed to fetch recipes');
  }
  const recipes = await res.json();
  return recipes;
};

export const fetchRecipesByCategory = async (category) => {
  const res = await fetch(`${API_URL}/api/recipes?category=${category}`);
  if (!res.ok) {
    throw new Error('Failed to fetch recipes by category');
  }
  const recipes = await res.json();
  return recipes;
};

export const fetchRecipesByUser = async (userId) => {
  const res = await fetch(`${API_URL}/api/recipes?userId=${userId}`);
  if (!res.ok) {
    throw new Error('Failed to fetch recipes by user');
  }
  const recipes = await res.json();
  return recipes;
};

export const fetchRecipeById = async (id) => {
  const res = await fetch(`${API_URL}/api/recipes/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch recipe');
  }
  const recipe = await res.json();
  return recipe[0];
};

export const postNewRecipe = async (formData) => {
  const { title, description, category, servings, duration, image, ...rest } = Object.fromEntries(formData);
  const newRecipe = {
    title,
    description,
    category,
    servings,
    duration,
    image,
    ingredients: Object.values(rest),
  };
  const res = await fetch(`${API_URL}/api/recipes`, {
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
  return result;
};


export const updateRecipe = async (formData) => {
  const { id, title, description, category, servings, duration, image, ...rest } = Object.fromEntries(formData);
  const updatedRecipe = {
    title,
    description,
    category,
    servings,
    duration,
    image,
    ingredients: Object.values(rest),
  };
  const res = await fetch(`${API_URL}/api/recipes/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedRecipe),
  });
  if (!res.ok) {
    throw new Error('Failed to post new recipe');
  }
  const result = await res.json();
  return result;
};