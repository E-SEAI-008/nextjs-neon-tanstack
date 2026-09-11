import { getRecipeById, updateRecipe, deleteRecipe } from '@/lib/db';
import { getUser } from '@/features/auth/server';

export async function GET(req, { params }) {
  const { id } = await params;

  const recipe = await getRecipeById(Number(id));

  if (!recipe) {
    return new Response(JSON.stringify({ error: 'Recipe not found!' }), { status: 404 });
  }

  return new Response(JSON.stringify(recipe), { status: 200 });
}

export async function PUT(req, { params }) {
  const { id } = await params;
  const user = await getUser();
  if (!user) {
    return new Response('Unauthorized', { status: 401 });
  }
  const updatedRecipe = req.json();

  const recipe = await updateRecipe(Number(id), updatedRecipe);

  if (!recipe) {
    return new Response(JSON.stringify({ error: 'Recipe not found!' }), { status: 404 });
  }

  return new Response(JSON.stringify({ message: 'Recipe updated succesfully!', recipe }), { status: 200 });
}

export async function DELETE(req, { params }) {
  const { id } = await params;
  const user = await getUser();
  if (!user) {
    return new Response('Unauthorized', { status: 401 });
  }

  const recipe = await deleteRecipe(Number(id));

  if (!recipe) {
    return new Response(JSON.stringify({ error: 'Recipe not found!' }), { status: 404 });
  }

  return new Response(JSON.stringify({ message: 'Recipe deleted succesfully!' }), { status: 200 });
}
