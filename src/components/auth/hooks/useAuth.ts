import { useState } from 'react';
import { User } from '../../../types';

export function useAuth() {
  const [showAuth, setShowAuth] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const handleAuth = (isOwner: boolean) => {
    setUser({ isOwner });
    setShowAuth(false);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return {
    showAuth,
    user,
    setShowAuth,
    handleAuth,
    handleLogout,
  };
}