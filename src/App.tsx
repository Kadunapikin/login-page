import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import PasswordRecovery from './pages/PasswordRecovery';
import { Toaster } from 'react-hot-toast';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/recover" element={<PasswordRecovery />} />
      </Routes>
      <Toaster position='top-right' reverseOrder={false} />
    </Router>
  );
}

export default App;
