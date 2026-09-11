import { queryOptions } from '@tanstack/react-query';
import {
  fetchAllRecipes,
  fetchRecipesSearched,
  fetchRecipesByCategory,
  fetchRecipesByUser,
  fetchRecipeById,
  postNewRecipe,
} from './server';

export const getRecipesQuery = () => {
  return queryOptions({
    queryKey: ['recipes'],
    queryFn: fetchAllRecipes,
  });
};
export const getRecipesSearchedQuery = (searchQuery) => {
  return queryOptions({
    queryKey: ['recipes', 'search', searchQuery],
    queryFn: async () => {
      return fetchRecipesSearched(searchQuery);
    },
  });
};

export const getRecipesByCategoryQuery = (category) => {
  return queryOptions({
    queryKey: ['recipes', category],
    queryFn: async () => {
      return fetchRecipesByCategory(category);
    },
  });
};

export const getRecipesByUserQuery = (userId) => {
  return queryOptions({
    queryKey: ['recipes', 'user', userId],
    queryFn: async () => {
      return fetchRecipesByUser(userId);
    },
  });
};

export const getRecipeByIdQuery = (id) => {
  return queryOptions({
    queryKey: ['recipe', id],
    queryFn: async () => {
      return fetchRecipeById(id);
    },
  });
};

// export const createRecipeMutation = () => {
//   return mutationOptions({
//     mutationFn: postNewRecipe,
//   });
// };