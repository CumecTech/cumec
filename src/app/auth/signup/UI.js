'use client';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'; // Optional: if you want to use your logo
import { useState } from 'react';
import { Spin } from '@/lib/svg'; // Optional: if you want to use a spinner
// import { useRouter } from 'next/router'; // Uncomment if you want to redirect after signup

export default function UI() {
  // const router = useRouter(); // Uncomment for redirect
  const [formData, setFormData] = useState({  
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '', // client, contractor, worker
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccessMessage('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      setIsLoading(false);
      return;
    }

    // Basic validation example (add more as needed)
    if (!formData.fullName || !formData.email || !formData.password || !formData.role) {
        setError('Please fill in all required fields.');
        setIsLoading(false);
        return;
    }

    // Simulate API call
    console.log('Signing up with:', formData);
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay

    // --- Replace with your actual signup logic ---
    // Example:
    // try {
    //   const response = await fetch('/api/signup', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //        name: formData.fullName,
    //        email: formData.email,
    //        password: formData.password,
    //        role: formData.role
    //     }),
    //   });
    //   const data = await response.json();
    //   if (!response.ok) {
    //     throw new Error(data.message || 'Signup failed');
    //   }
    //   setSuccessMessage('Account created successfully! You can now log in.');
    //   // Optionally clear form or redirect
    //   // setFormData({ fullName: '', email: '', password: '', confirmPassword: '', role: '' });
    //   // router.push('/login');
    // } catch (err) {
    //   setError(err.message);
    //   console.error('Signup error:', err);
    // }
    // --- End of example signup logic ---

    // For demonstration, let's assume success
    setSuccessMessage('Account created successfully! (Replace with actual navigation or login flow)');
    // Optionally clear form
    // setFormData({ fullName: '', email: '', password: '', confirmPassword: '', role: '' });


    setIsLoading(false);
  };

  // Path to your logo, same as in Navbar
  const logoPath = '/assessts/logo.jpg';

  return (
    <>
      <Head>
        <title>Sign Up - CUMEC</title>
        <meta name="description" content="Create your CUMEC account" />
      </Head>

      <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Link href="/" className="flex justify-center">
            <Image
              src={logoPath}
              alt="CUMEC Logo"
              width={60}
              height={60}
              className="rounded-lg"
              priority
            />
          </Link>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-400">
            Already have an account?{' '}
            <Link href="/auth/login" className="font-medium text-blue-400 hover:text-blue-300">
              Sign in here
            </Link>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-gray-800 py-8 px-4 shadow-xl sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-300">
                  Full Name
                </label>
                <div className="mt-1">
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    disabled={isLoading}
                    className="appearance-none block w-full px-3 py-3 border border-gray-700 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-900 text-gray-200 disabled:opacity-50"
                    placeholder="John Doe"
                  />
                </div>
              </div>

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
                    value={formData.email}
                    onChange={handleChange}
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
                    autoComplete="new-password"
                    required
                    minLength={8} // Example: basic password strength
                    value={formData.password}
                    onChange={handleChange}
                    disabled={isLoading}
                    className="appearance-none block w-full px-3 py-3 border border-gray-700 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-900 text-gray-200 disabled:opacity-50"
                    placeholder="Minimum 8 characters"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300">
                  Confirm Password
                </label>
                <div className="mt-1">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    autoComplete="new-password"
                    required
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    disabled={isLoading}
                    className="appearance-none block w-full px-3 py-3 border border-gray-700 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-900 text-gray-200 disabled:opacity-50"
                    placeholder="Re-enter your password"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-300">
                  I am a
                </label>
                <div className="mt-1">
                  <select
                    id="role"
                    name="role"
                    required
                    value={formData.role}
                    onChange={handleChange}
                    disabled={isLoading}
                    className="appearance-none block w-full px-3 py-3 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-900 text-gray-200 disabled:opacity-50"
                  >
                    <option value="" disabled>Select your role...</option>
                    <option value="client">Client</option>
                    <option value="contractor">Contractor</option>
                    <option value="worker">Worker</option>
                  </select>
                </div>
              </div>


              {error && (
                <p className="text-sm text-red-400 bg-red-900/30 p-3 rounded-md">{error}</p>
              )}
              {successMessage && (
                <p className="text-sm text-green-400 bg-green-900/30 p-3 rounded-md">{successMessage}</p>
              )}

              <div>
                <button
                  type="submit"
                  disabled={isLoading || successMessage} // Disable if successful too, to prevent resubmit
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500 disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
                >
                  {isLoading ? (
                    <>
                      <Spin/>
                      Creating account...
                    </>
                  ) : (
                    'Create Account'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}