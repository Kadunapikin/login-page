import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import { Navigate, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';

type ProtectedRouteProps = {
    children: React.ReactElement;
  };
const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const [isAuthChecked, setIsAuthChecked] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
      setIsAuthChecked(true);
      if (!user) {
        toast.error("Please log in or register to access the AI lesson planner");
      }
    });

    return () => unsubscribe();
  }, []);

  if (!isAuthChecked) return null;

  return isAuthenticated ? children : <Navigate to="/" state={{ from: location }} replace />;
};

export default ProtectedRoute;
