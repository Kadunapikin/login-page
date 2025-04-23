import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import PasswordRecovery from './pages/PasswordRecovery';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/recover" element={<PasswordRecovery />} />
      </Routes>
    </Router>
  );
}

export default App;
