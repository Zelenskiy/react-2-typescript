import './styles/App.css';
import React  from 'react';
import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Posts from './pages/Posts';
import Error from './pages/Error';
import Navbar from './components/UI/navbar/navbar';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
     <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/*" element={<Error />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
