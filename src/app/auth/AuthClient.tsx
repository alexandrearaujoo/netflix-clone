'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

import { Input } from '@/components/Input';

import { AuthSchema, authSchema } from '@/schemas/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';

export default function AuthClient() {
  const [variant, setVariant] = useState('login');
  const [credentialsError, setCredentialsError] = useState(false);
  const router = useRouter();

  const toggleVariant = useCallback(() => {
    setVariant((current) => (current === 'login' ? 'register' : 'login'));
  }, []);

  const onSubmit = async (data: AuthSchema) => {
    if (variant === 'login') {
      await login(data);
      return;
    }

    await signin(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<AuthSchema>({
    resolver: zodResolver(authSchema),
    mode: 'all'
  });

  const login = useCallback(
    async (data: AuthSchema) => {
      const { email, password } = data;

      await signIn('credentials', {
        email,
        password,
        redirect: false
      }).then((callback) => {
        if (callback?.ok) {
          toast.success('Logged in');
          setCredentialsError(false);
          router.push('/profiles');
        }
        if (callback?.error) {
          setCredentialsError(true);
        }
      });
    },
    [router]
  );

  const signin = useCallback(
    async (data: AuthSchema) => {
      try {
        await axios.post('/api/register', data);
        login(data);
      } catch (error) {
        console.log(error);
      }
    },
    [login]
  );

  return (
    <div className="bg-black w-full h-full lg:bg-opacity-50">
      <nav className="px-12 py-5">
        <img src="/images/logo.png" alt="Netflix logo" className="h-12" />
      </nav>
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-black bg-opacity-70 p-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full"
        >
          <h2 className="text-white text-4xl mb-8 font-semibold">
            {variant === 'login' ? 'Sign in' : 'Register'}
          </h2>
          {credentialsError && (
            <div className="bg-orange-500 text-white rounded-md mb-3 p-3 flex gap-1 items-center">
              <p className="font-bold">Invalid credentials.</p>
              <p>Try again</p>
            </div>
          )}
          <div className="flex flex-col gap-4">
            {variant === 'register' && (
              <>
                <Input
                  id="name"
                  label="Username"
                  {...register('name')}
                  type="text"
                  autoFocus
                />
                {errors.name?.message && (
                  <p className="text-orange-400 -mt-4 text-sm">
                    {errors.name.message}
                  </p>
                )}
              </>
            )}

            <Input
              id="email"
              label="Email"
              {...register('email')}
              type="email"
            />

            {errors.email?.message && (
              <p className="text-orange-400 -mt-4 text-sm">
                {errors.email.message}
              </p>
            )}
            <Input
              id="password"
              label="Password"
              {...register('password')}
              type="password"
            />
            {errors.password?.message && (
              <p className="text-orange-400 -mt-4 text-sm">
                {errors.password.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center w-full my-auto text-black">
                <svg
                  className="animate-spin h-6 w-6 border border-l-current rounded-full"
                  viewBox="0 0 24 24"
                />
              </div>
            ) : variant === 'login' ? (
              'Login'
            ) : (
              'Sign up'
            )}
          </button>
          <div className="flex flex-row items-center gap-4 mt-8 justify-center">
            <button
              onClick={() => signIn('google', { callbackUrl: '/profiles' })}
              type="button"
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
            >
              <FcGoogle size={32} />
            </button>
            <button
              onClick={() => signIn('github', { callbackUrl: '/profiles' })}
              type="button"
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
            >
              <FaGithub size={32} />
            </button>
          </div>
          <p className="text-neutral-500 mt-12">
            {variant === 'login'
              ? 'First time using Netflix ?'
              : 'Already have an account ?'}
            <span
              onClick={toggleVariant}
              className="text-white ml-1 hover:underline cursor-pointer"
            >
              {variant === 'login' ? 'Create an account' : 'Login'}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
