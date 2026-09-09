import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);

// for the /api/recipes endpoint
export async function getAllRecipes() {
    const recipes = await sql`SELECT * FROM recipes`;
    return recipes;
}

export async function getRecipesBySearchTerm(searchTerm){
    const recipes = await sql`SELECT * FROM recipes 
    WHERE title ILIKE ${`%${searchTerm}%`} OR description ILIKE ${`%${searchTerm}%`}`;

    return recipes;
}

export async function createRecipe(userId, recipe) {
    const {title, category, duration, servings, ingredients, description, image } = recipe;
    const result = await sql`INSERT INTO recipes (title, category,duration,servings,ingredients,description,image,user_id) 
    VALUES(${title}, ${category}, ${duration}, ${servings}, ${ingredients}, ${description}, ${image}, ${userId})
    RETURNING *`;

    return result[0];
};

// for the /api/recipes/[id] endpoint
export async function getRecipeById(id) {
  console.log(id);
    const recipes = await sql`SELECT * FROM recipes WHERE id=${id}`;
    return recipes[0];
};

export const updateRecipe = async (id, recipe) => {
  const { title, description, category, ingredients, instructions } = recipe;
  const result = await sql`
    UPDATE recipes
    SET title = ${title}, description = ${description}, category = ${category}, ingredients = ${ingredients}, instructions = ${instructions}
    WHERE id = ${id}
    RETURNING *
  `;
  return result[0];
};

export const deleteRecipe = async (id) => {
  await sql`DELETE FROM recipes WHERE id = ${id}`;
};