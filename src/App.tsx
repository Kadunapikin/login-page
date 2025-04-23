import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import PasswordRecovery from './pages/PasswordRecovery';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/recover" element={<PasswordRecovery />} />
      </Routes>
      <Toaster position='top-right' reverseOrder={false} />
    </Router>
  );
}

export default App;
