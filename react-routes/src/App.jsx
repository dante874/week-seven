// import react from 'react';
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import { AboutPage } from "./Components/AboutPage"
import { HomePage } from './Components/HomePage';
import { NotFoundPage } from './Components/NotFoundPage';
import './App.css';



 export default function App() {

  

  return (
    <BrowserRouter>
      <div className="App">
        <h1>Welcome to my website</h1>
        <nav>
        <NavLink to="/about">About</NavLink>  | <NavLink to="/">Home</NavLink>
        </nav>
     
        
        <Routes>
           <Route path="/about" element={<AboutPage />} />
           <Route path="/" element={<HomePage />} />
           <Route path="*" element={<NotFoundPage />} />
      
  
        </Routes>
        
      </div>
    
   
    </BrowserRouter>
    
    
      
    
  );
}


