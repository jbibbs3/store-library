
import './App.css';
import Library from './components/Library';
import { NavLink, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
    <Route path="/" element={<Library />} />
  </Routes>
  )
}

export default App;
