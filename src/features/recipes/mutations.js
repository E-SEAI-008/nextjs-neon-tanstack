import { makeQueryClient } from '@/lib/utils/makeQueryClient';
import { postNewRecipe, updateRecipe } from './server';
import { mutationOptions } from '@tanstack/react-query';

const queryClient = makeQueryClient();

export const createNewRecipeMutation = () => {
  return mutationOptions({
    mutationKey: ['recipes', 'create'],
    mutationFn: postNewRecipe,
    onError: (error) => {
      console.error(error);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['recipes'] });
    },
  });
};
export const updateRecipeMutation = () => {
  return mutationOptions({
    mutationKey: ['recipes', 'update'],
    mutationFn: updateRecipe,
    onError: (error) => {
      console.error(error);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['recipes'] });
    },
  });
};
