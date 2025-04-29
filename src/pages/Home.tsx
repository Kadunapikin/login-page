import { useState } from 'react';
import { auth } from '../firebase';
import Navbar from '../components/Navbar';
import axios from 'axios';

const Home = () => {
  const [subject, setSubject] = useState('');
  const [topic, setTopic] = useState('');
  const [classLevel, setClassLevel] = useState('');
  const [duration, setDuration] = useState('');
  const [lessonPlan, setLessonPlan] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerateLessonPlan = async () => {
    if (!subject || !topic || !classLevel || !duration) {
      alert('Please fill in all fields.');
      return;
    }

    setLoading(true);

    try {
      const prompt = `Create a detailed lesson plan for a ${classLevel} class on the topic "${topic}" in ${subject}. The lesson should last ${duration} minutes and include objectives, materials needed, activities, and assessment methods.`;

      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: prompt }],
          temperature: 0.7,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
          },
        }
      );

      const aiResponse = response.data.choices[0].message.content;
      setLessonPlan(aiResponse);
    } catch (error) {
      console.error('Error generating lesson plan:', error);
      alert('Failed to generate lesson plan. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto mt-6 p-6 border rounded shadow-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            Welcome, {auth.currentUser?.email}
          </h2>
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
          disabled={loading}
        >
          {loading ? 'Generating...' : 'Generate Lesson Plan'}
        </button>
        {lessonPlan && (
          <div className="mt-6 p-4 border rounded bg-gray-100">
            <h3 className="text-xl font-semibold mb-2">Generated Lesson Plan:</h3>
            <pre className="whitespace-pre-wrap">{lessonPlan}</pre>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;

//Old code

// import { useState } from 'react';
// import { auth } from '../firebase';
// import Navbar from '../components/Navbar';

// const Home = () => {
//   const [subject, setSubject] = useState('');
//   const [topic, setTopic] = useState('');
//   const [classLevel, setClassLevel] = useState('');
//   const [duration, setDuration] = useState('');
//   const [lessonPlan, setLessonPlan] = useState('');

//   const handleGenerateLessonPlan = async () => {
//     // Placeholder for AI lesson plan generation logic
//     // You can integrate with an AI API here
//     const generatedPlan = `Lesson Plan for ${subject} - ${topic} (${classLevel}, ${duration} minutes)`;
//     setLessonPlan(generatedPlan);
//   };

//   return (
//     <>
//     <Navbar />
//     <div className="max-w-3xl mx-auto mt-6 p-6 border rounded shadow-md">      
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-2xl font-bold">Welcome, {auth.currentUser?.email}</h2>
//         </div>
//         <p className="mb-4">Do you want AI to write a lesson plan for you?</p>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//           <input
//             type="text"
//             placeholder="Subject"
//             value={subject}
//             onChange={(e) => setSubject(e.target.value)}
//             className="border p-2 rounded"
//           />
//           <input
//             type="text"
//             placeholder="Topic"
//             value={topic}
//             onChange={(e) => setTopic(e.target.value)}
//             className="border p-2 rounded"
//           />
//           <input
//             type="text"
//             placeholder="Class Level"
//             value={classLevel}
//             onChange={(e) => setClassLevel(e.target.value)}
//             className="border p-2 rounded"
//           />
//           <input
//             type="text"
//             placeholder="Duration (minutes)"
//             value={duration}
//             onChange={(e) => setDuration(e.target.value)}
//             className="border p-2 rounded"
//           />
//         </div>
//         <button
//           onClick={handleGenerateLessonPlan}
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         >
//           Generate Lesson Plan
//         </button>
//         {lessonPlan && (
//           <div className="mt-6 p-4 border rounded bg-gray-100">
//             <h3 className="text-xl font-semibold mb-2">Generated Lesson Plan:</h3>
//             <p>{lessonPlan}</p>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Home;