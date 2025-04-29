import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signOut, onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '../firebase';
import toast from 'react-hot-toast';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success('Logged out successfully!');
      navigate('/');
    } catch (error: any) {
      console.error('Logout error:', error.message);
      toast.error(error.message || 'Logout failed');
    }
  };

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3 shadow-md">
      <div className="flex items-center justify-between">
        <Link to="/home" className="text-xl font-bold text-blue-600">
          EduAI
        </Link>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/home" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>
          {!user ? (
            <>
              <Link to="/" className="text-gray-700 hover:text-blue-600">
                Login
              </Link>
              <Link to="/signup" className="text-gray-700 hover:text-blue-600">
                Signup
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="text-gray-700 hover:text-red-600"
            >
              Logout
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2">
          <Link to="/home" className="block text-gray-700" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          {!user ? (
            <>
              <Link to="/" className="block text-gray-700" onClick={() => setIsOpen(false)}>
                Login
              </Link>
              <Link to="/signup" className="block text-gray-700" onClick={() => setIsOpen(false)}>
                Signup
              </Link>
            </>
          ) : (
            <button
              onClick={() => {
                setIsOpen(false);
                handleLogout();
              }}
              className="block text-gray-700 hover:text-red-600"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
