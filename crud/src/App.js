import './App.css';
import Login from './pages/Login'
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'
import Register from './pages/Register';
import Home from './pages/Home'
import CardCreator from './pages/CardCreator'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/CardCreator" element={<CardCreator />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
