import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import User from './pages/User';


function App() {
  return (
    <>
    <h1>Ola Mundo</h1>
      
      <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='about' element={<About/>} />
       <Route path='user' element={<User/>} />
       <Route path='*' element={<NotFound/>} />
      </Routes>

    </>
  


      
    
  );
}

export default App;
