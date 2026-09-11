import { makeQueryClient } from '@/lib/utils/makeQueryClient';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { Suspense } from 'react';
import { RecipesList, AddRecipeForm } from '@/features/recipes';
import { getRecipesQuery } from '@/features/recipes';

export default async function Home() {
  const client = makeQueryClient();
  await client.query(getRecipesQuery());
  return (
    <div className='flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black'>
      <h2>Recipes</h2>
      <div className='flex flex-col gap-20'>
        <AddRecipeForm />
        <HydrationBoundary>
          <Suspense>
            <RecipesList />
          </Suspense>
        </HydrationBoundary>
      </div>
    </div>
  );
}
