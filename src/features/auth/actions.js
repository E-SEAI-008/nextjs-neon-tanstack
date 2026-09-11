'use server';
import { redirect } from 'next/navigation';
import { auth } from './server';

export const signInWithEmail = async (_prev, formData) => {
  const { error } = await auth.signIn.email({
    email: formData.get('email'),
    password: formData.get('password'),
  });
  if (error) return { error: error.message };
  redirect('/dashboard');
};

export const signUpWithEmail = async (_prev, formData) => {
  const { error } = await auth.signUp.email({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  });
  if (error) return { error: error.message };
  redirect('/dashboard');
};

export const logoutAction = async () => {
  const { error } = await auth.signOut();
  if (error) return { error: error.message };
};
