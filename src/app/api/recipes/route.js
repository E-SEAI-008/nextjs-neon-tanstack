import {  getAllRecipes, getRecipesBySearchTerm, createRecipe } from '@/lib/db';
import { auth } from '@/features/auth';

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
    const { user } = await auth.getSession();
    if(!user) {
        throw new Response('Unauthorized', {status: 401})
    };

    const newRecipe = await req.json();
    
    const result = await createRecipe(user.id, newRecipe);

    if(!result) {
        throw new Response('Recipe could not be created!', {status: 401})
    };
    
    return new Response(JSON.stringify(result), 
    {status:200, headers: { 'Content-Type': 'application/json'}})
};
