import { makeQueryClient } from '@/lib/utils/makeQueryClient';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { Suspense } from 'react';
import { RecipesList } from '@/features/recipes';
import { getRecipesQuery, getRecipesSearchedQuery } from '@/features/recipes';

export default async function SearchPage({ searchParams }) {
  const { query } = await searchParams;
  const client = makeQueryClient();
  await client.query(getRecipesQuery());
  await client.query(getRecipesSearchedQuery(query));
  return (
    <HydrationBoundary>
      <div className='flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black'>
        <h2>Recipes</h2>
        <Suspense>
          <RecipesList query={query} />
        </Suspense>
      </div>
    </HydrationBoundary>
  );
}
