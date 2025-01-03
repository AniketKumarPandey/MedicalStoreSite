import React, { useState } from 'react';
import { X } from 'lucide-react';

interface LoginModalProps {
  onClose: () => void;
  onLogin: (isOwner: boolean) => void;
  switchToSignup: () => void;
}

export default function LoginModal({ onClose, onLogin, switchToSignup }: LoginModalProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (type: 'user' | 'owner') => {
    if (type === 'owner' && password !== 'owner123') {
      setError('Invalid owner password');
      return;
    }
    onLogin(type === 'owner');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-96 relative">
        <button onClick={onClose} className="absolute top-4 right-4">
          <X className="h-6 w-6" />
        </button>
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <div className="space-y-4">
          <button
            onClick={() => handleLogin('user')}
            className="w-full bg-blue-600 text-white px-4 py-2 rounded"
          >
            Continue as User
          </button>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or</span>
            </div>
          </div>
          <div>
            <input
              type="password"
              placeholder="Enter owner password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>
          <button
            onClick={() => handleLogin('owner')}
            className="w-full bg-gray-800 text-white px-4 py-2 rounded"
          >
            Login as Owner
          </button>
        </div>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <button
            onClick={switchToSignup}
            className="text-blue-600 hover:underline"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
}