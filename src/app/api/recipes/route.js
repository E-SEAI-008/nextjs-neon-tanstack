import {  getAllRecipes, getRecipesBySearchTerm, createRecipe } from '@/lib/db';
import { getUser } from '@/features/auth/server';

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const searchTerm = searchParams.get('query');
    let recipes;

    if(searchTerm) {
        recipes = await getRecipesBySearchTerm(searchTerm);
    } else {
        recipes = await getAllRecipes()
    }

    return new Response(JSON.stringify(recipes), 
    {status:200, headers: { 'Content-Type': 'application/json'}})
};

export async function POST(req) {
  const user = await getUser();
  if (!user) {
    return new Response('Unauthorized', { status: 401 });
  }

  const newRecipe = await req.json();

  const result = await createRecipe(user.id, newRecipe);
  // const result = {...newRecipe, user_id: user.id}
  console.log(result);

  if (!result) {
    return new Response('Recipe could not be created!', { status: 401 });
  }

  return new Response(JSON.stringify(result), { status: 200, headers: { 'Content-Type': 'application/json' } });
};
