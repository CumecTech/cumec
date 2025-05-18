'use client';

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'; // Optional: if you want to use your logo
import { useState } from 'react';

import { Spin } from '@/lib/svg';

export default function UI() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate API call
    console.log('Logging in with:', { email, password });
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay

    // --- Replace with your actual login logic ---
    // Example:
    // try {
    //   const response = await fetch('/api/login', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ email, password }),
    //   });
    //   const data = await response.json();
    //   if (!response.ok) {
    //     throw new Error(data.message || 'Login failed');
    //   }
    //   // Handle successful login (e.g., redirect, store token)
    //   console.log('Login successful:', data);
    //   // router.push('/dashboard');
    // } catch (err) {
    //   setError(err.message);
    //   console.error('Login error:', err);
    // }
    // --- End of example login logic ---

    // For demonstration, let's assume login fails if password is not "password"
    if (password !== "password") {
      setError("Invalid email or password. (Hint: try password 'password')");
    } else {
      alert("Login successful! (Replace with actual navigation)");
      // router.push('/dashboard'); // Example redirect
    }

    setIsLoading(false);
  };

  // Path to your logo, same as in Navbar
  const logoPath = '/assessts/logo.jpg';

  return (
    <>
      <Head>
        <title>Login - CUMEC</title>
        <meta name="description" content="Login to your CUMEC account" />
      </Head>

      <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Link href="/" className="flex justify-center">
            <Image
              src={logoPath}
              alt="CUMEC Logo"
              width={60} // Slightly larger for the login page
              height={60}
              className="rounded-lg" // Optional: style as per your logo
              priority
            />
          </Link>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Log in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-400">
            Or{' '}
            <Link href="/auth/signup" className="font-medium text-blue-400 hover:text-blue-300">
                create a new account
            </Link>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-gray-800 py-8 px-4 shadow-xl sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                    className="appearance-none block w-full px-3 py-3 border border-gray-700 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-900 text-gray-200 disabled:opacity-50"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isLoading}
                    className="appearance-none block w-full px-3 py-3 border border-gray-700 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-900 text-gray-200 disabled:opacity-50"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              {/* Forgot password link (commented out for UI, but present for future) */}
              {/*
              <div className="flex items-center justify-end">
                <div className="text-sm">
                  <Link href="/forgot-password">
                    <a className="font-medium text-blue-400 hover:text-blue-300">
                      Forgot your password?
                    </a>
                  </Link>
                </div>
              </div>
              */}

              {error && (
                <p className="text-sm text-red-400 bg-red-900/30 p-3 rounded-md">{error}</p>
              )}

              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500 disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
                >
                  {isLoading ? (
                    <Spin/>
                  ) : (
                    'Sign in'
                  )}
                </button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700" />
                </div>
              </div>

              


            </div>
          </div>
        </div>
      </div>
    </>
  );
}