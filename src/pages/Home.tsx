import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import toast from 'react-hot-toast';

const Home = () => {
  const [subject, setSubject] = useState('');
  const [topic, setTopic] = useState('');
  const [classLevel, setClassLevel] = useState('');
  const [duration, setDuration] = useState('');
  const [lessonPlan, setLessonPlan] = useState('');
  const navigate = useNavigate();

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

  const handleGenerateLessonPlan = async () => {
    // Placeholder for AI lesson plan generation logic
    // You can integrate with an AI API here
    const generatedPlan = `Lesson Plan for ${subject} - ${topic} (${classLevel}, ${duration} minutes)`;
    setLessonPlan(generatedPlan);
  };

  return (
    <div className="max-w-3xl mx-auto mt-20 p-6 border rounded shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Welcome, {auth.currentUser?.email}</h2>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
      <p className="mb-4">Do you want AI to write a lesson plan for you?</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Class Level"
          value={classLevel}
          onChange={(e) => setClassLevel(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Duration (minutes)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="border p-2 rounded"
        />
      </div>
      <button
        onClick={handleGenerateLessonPlan}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Generate Lesson Plan
      </button>
      {lessonPlan && (
        <div className="mt-6 p-4 border rounded bg-gray-100">
          <h3 className="text-xl font-semibold mb-2">Generated Lesson Plan:</h3>
          <p>{lessonPlan}</p>
        </div>
      )}
    </div>
  );
};

export default Home;
