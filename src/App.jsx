import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
