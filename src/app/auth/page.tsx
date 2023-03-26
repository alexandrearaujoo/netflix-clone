'use client';

import { ChangeEvent, useCallback, useState } from 'react';

import Input from '@/components/Input';

export default function Auth() {
  const [user, setUser] = useState({ username: '', email: '', password: '' });

  const [variant, setVariant] = useState('login');

  const toggleVariant = useCallback(() => {
    setVariant((current) => (current === 'login' ? 'register' : 'login'));
  }, []);

  return (
    <main className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="Netflix logo" className="h-12" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 p-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === 'login' ? 'Sign in' : 'Register'}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === 'register' && (
                <Input
                  id="name"
                  label="Username"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setUser((prev) => ({
                      email: prev.email,
                      password: prev.password,
                      username: e.target.value
                    }))
                  }
                  type="text"
                  value={user.username}
                />
              )}

              <Input
                id="email"
                label="Email"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setUser((prev) => ({
                    email: e.target.value,
                    password: prev.password,
                    username: prev.username
                  }))
                }
                type="email"
                value={user.email}
              />
              <Input
                id="password"
                label="Password"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setUser((prev) => ({
                    email: prev.email,
                    password: e.target.value,
                    username: prev.username
                  }))
                }
                type="password"
                value={user.password}
              />
            </div>
            <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
              {variant === 'login' ? 'Login' : 'Sign up'}
            </button>
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
          </div>
        </div>
      </div>
    </main>
  );
}