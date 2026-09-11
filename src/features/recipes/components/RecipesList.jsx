'use client';
import { useSuspenseQuery } from '@tanstack/react-query';
import { getRecipesQuery, getRecipesSearchedQuery } from '@/features/recipes';
import { RecipeCard } from '@/features/recipes';

function RecipeList({query}) {
    const {data: recipes} = useSuspenseQuery(getRecipesQuery());
    const {data: searchedRecipes} = useSuspenseQuery(getRecipesSearchedQuery(query));

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {(query ? searchedRecipes : recipes).map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
    </div>
  )
}

export default RecipeList;