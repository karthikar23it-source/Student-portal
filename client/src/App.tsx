import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/register" replace />} />

      <Route path="/opportunities" element={<h1>OPPORTUNITY PAGE WORKS</h1>} />

      <Route path="*" element={<Navigate to="/register" replace />} />
    </Routes>
  );
}

export default App;
