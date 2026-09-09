'use client';
import { useActionState } from 'react';
import { signUpWithEmail } from '@/features/auth';

export default function SignUpForm() {
  const [state, formAction, isPending] = useActionState(signUpWithEmail, null);
  return (
    <form className='flex flex-col gap-3' action={formAction}>
      <fieldset className='fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4'>
        <legend>Sign up</legend>
        <label className='label' htmlFor='name'>
          Name
        </label>
        <input className='input' id='name' name='name' placeholder='Name' required />
        <label className='label' htmlFor='email'>
          Email
        </label>
        <input className='input' id='email' name='email' type='email' placeholder='Email' required />
        <label className='label' htmlFor='password'>
          Password
        </label>
        <input className='input' id='password' name='password' type='password' placeholder='Password' required />
        {state?.error && <p>{state.error}</p>}
        <button className='btn btn-neutral mt-4' disabled={isPending}>
          {isPending ? 'Creating...' : 'Create account'}
        </button>
      </fieldset>
    </form>
  );
}