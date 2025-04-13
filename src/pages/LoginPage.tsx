import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useAuthStore } from '../store/UseAuthStore';
import { useNavigate } from 'react-router-dom';
import { useThemeStore } from '../store/ThemeStore';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const setAuth = useAuthStore((state) => state.setAuth);
  const { darkMode } = useThemeStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (email === '' || password === '') {
      setError('Please fill out both fields.');
      return;
    }

    setError(null);
    setLoading(true);

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          body: {
            email,
            password,
          },
        }),
      });

      const result = await response.json();

      if (!response.ok || result.status !== 200) {
        throw new Error(result?.message || 'Login failed');
      }

      const { accessToken, expiresIn } = result.result?.data || {};

      if (!accessToken || !expiresIn) {
        throw new Error('Invalid response from server');
      }

      setAuth(accessToken, expiresIn);
      console.log('Login successful:', accessToken);
      navigate('/dashboard');

    } catch (err: any) {
      const rawMessage = err.message || 'Login failed';
      const isInvalid = rawMessage.toLowerCase().includes('login failed');

      const message = isInvalid
        ? 'Email or password is incorrect.'
        : rawMessage;

      setError(message);
      console.error('Login failed:', rawMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`${darkMode ? 'bg-gray-900' : 'bg-[#F3F4F6]'} h-screen flex justify-center items-center`}>
      <div className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} p-8 rounded-lg shadow-md w-full sm:w-96`}>
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className={`block font-semibold text-sm mb-2 ${darkMode ? 'text-gray-200' : 'text-[#545D6C]'}`}>
              Email
            </label>
            <input
              type="email"
              className={`w-full p-3 rounded-md border outline-none ${darkMode
                ? 'bg-gray-700 text-white border-gray-600 placeholder-gray-400'
                : 'bg-white text-black border-gray-300 placeholder-gray-500'}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='example@gmail.com'
            />
          </div>

          <div className="mb-6">
            <label className={`block font-semibold text-sm mb-2 ${darkMode ? 'text-gray-200' : 'text-[#545D6C]'}`}>
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                className={`w-full p-3 rounded-md pr-10 border outline-none ${darkMode
                  ? 'bg-gray-700 text-white border-gray-600 placeholder-gray-400'
                  : 'bg-white text-black border-gray-300 placeholder-gray-500'}`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              >
                {showPassword ? (
                  <FiEyeOff className={`${darkMode ? 'text-gray-300' : 'text-[#545D6C]'} text-xl`} />
                ) : (
                  <FiEye className={`${darkMode ? 'text-gray-300' : 'text-[#545D6C]'} text-xl`} />
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className={`py-3 px-6 font-semibold rounded-md transition duration-200 cursor-pointer ${
                loading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : darkMode
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-primary text-white hover:bg-[rgb(40,70,170)]'
              }`}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
