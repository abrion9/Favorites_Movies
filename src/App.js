import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { About } from './pages/About';
import { User } from './pages/User';
import NotFound from './pages/NotFound';
import { Home } from './pages/Home';
import UserView from './pages/UserView';


function App() {
  return (
    <>
    <h1>Ola Mundo</h1>
      
      <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/about' element={<About/>} />
       <Route path='/user' element={<About/>} />
       <Route path='/user/:id'element={<UserView/>} />
       <Route path='*' element={<NotFound/>} />
      </Routes>

    </>
  


      
    
  );
}

export default App;
