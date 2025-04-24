import { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Home = () => {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);
      } else {
        navigate('/');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await signOut(auth);
    toast.success("Logged out successfully!");
    navigate('/');
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow-md text-center">
      <h1 className="text-2xl font-bold mb-4">Welcome 👋</h1>
      {userEmail && (
        <p className="text-gray-700 mb-6">
          Logged in as <strong>{userEmail}</strong>
        </p>
      )}
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
      >
        Log Out
      </button>
    </div>
  );
};

export default Home;
