'use client';
import { useState } from 'react';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMutation } from '@tanstack/react-query';
// import { makeQueryClient } from '@/lib/utils/makeQueryClient'; 
// import { postNewRecipe } from '../server';
import { createNewRecipeMutation } from '../mutations';

function AddRecipeForm() {
  const [ingredients, setIngredients] = useState(['']);
  
  // const queryClient = makeQueryClient(); 

  const {mutate, data, error, isPending} = useMutation(createNewRecipeMutation());
  console.log(data, isPending, error)

  return (
    <form className='w-60' action={mutate}>
      <fieldset className='fieldset'>
        <legend className='legend'>Add Recipe</legend>
        {error && <p>{error}</p>}

        <label className='label '>Title</label>
        <input type='text' className='input' name='title' placeholder='Title' />

        <label className='label theme-label'>Category</label>
        <input type='text' className='input' name='category' placeholder='Category' />

        <label className='label theme-label'>Duration</label>
        <input
          className='input'
          type='number'
          id='duration'
          name='duration'
          min='1'
          max='1000'
          placeholder='20'
        />

        <label className='label'>Servings</label>
        <input
          className='input'
          type='number'
          id='servings'
          name='servings'
          min='1'
          max='20'
          placeholder='1'
        />

        <label className='label'>Description</label>
        <input type='text' className='input' name='description' placeholder='Description' />

        <label className='label'>Ingredients</label>
        <div className='flex flex-col gap-1 w-full'>
          {ingredients.map((ingredient, index) => (
            <div key={index} className='flex gap-2 items-center'>
              <input
                type='text'
                className='input'
                name={`ingredients[${index}]`}
                placeholder='400g flour'
                key={index}
              />
              <button
                type='button'
                className='btn btn-neutral'
                onClick={() => setIngredients(ingredients.filter((_, i) => i !== index))}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          ))}
          <button type='button' className='btn btn-neutral w-fit' onClick={() => setIngredients([...ingredients, ''])}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>

        <label className='label theme-label'>Image</label>
        <input type='text' className='input theme-input' name='image' placeholder='Image' />

        <button className='btn btn-primary' type='submit' disabled={isPending}>
         {isPending? 'Adding Recipe...' : 'Add recipe'}
        </button>
      </fieldset>
    </form>
  );
}

export default AddRecipeForm;
