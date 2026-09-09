'use client';
import { useActionState } from 'react';
import { signInWithEmail } from '@/features/auth';

export default function SignInForm() {
  const [state, formAction, isPending] = useActionState(signInWithEmail, null);
  return (
    <form action={formAction}>
      <fieldset className='fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4'>
        <legend>Sign in</legend>
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
          {isPending ? 'Signing in...' : 'Sign in'}
        </button>
      </fieldset>
    </form>
  );
}