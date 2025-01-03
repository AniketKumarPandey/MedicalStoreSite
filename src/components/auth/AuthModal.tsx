import React, { useState } from 'react';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';

interface AuthModalProps {
  onClose: () => void;
  onAuth: (isOwner: boolean) => void;
}

export default function AuthModal({ onClose, onAuth }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true);

  const handleSignup = (email: string, password: string) => {
    // In a real app, you would handle signup with a backend
    console.log('Signup:', email, password);
    onAuth(false);
  };

  return (
    <>
      {isLogin ? (
        <LoginModal
          onClose={onClose}
          onLogin={onAuth}
          switchToSignup={() => setIsLogin(false)}
        />
      ) : (
        <SignupModal
          onClose={onClose}
          onSignup={handleSignup}
          switchToLogin={() => setIsLogin(true)}
        />
      )}
    </>
  );
}