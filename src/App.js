import './App.css';
import { Routes, Route, Navigate } from "react-router-dom"
import { Home } from './views/Home';

function App() {
  return (
    <Routes>
      <Route path='/Emart99' element={<Home />} />
      <Route
        path="*"
        element={<Navigate to="/Emart99" replace />}
      />
    </Routes>

  );
}

export default App;
