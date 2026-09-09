'use client';
import { useActionState } from 'react';
import { logoutAction } from '@/features/auth';

export default function SignOutForm() {
  const [state, formAction, isPending] = useActionState(logoutAction, null);
  return (
    <form action={formAction}>
      <button className='btn btn-neutral' disabled={isPending}>
        {isPending ? 'Signing out...' : 'Sign out'}
      </button>
    </form>
  );
}