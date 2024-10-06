import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home/Home';
import GraceInSpace from './pages/project/GraceInSpace';
import Resume from './pages/resume/Resume';
import About from './pages/about/About';
import Trash from './pages/project/Trash';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './App.css';



function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="App">
        <Navbar openModal={openModal} closeModal={closeModal}/>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home isModalOpen={isModalOpen} openModal={openModal} closeModal={closeModal}/>} />
            <Route path='/grace-in-space' element={ <GraceInSpace isModalOpen={isModalOpen} openModal={openModal} closeModal={closeModal}/>}/>
            <Route path='/about' element={ <About isModalOpen={isModalOpen} openModal={openModal} closeModal={closeModal}/>}/>
            <Route path='/resume' element={ <Resume isModalOpen={isModalOpen} openModal={openModal} closeModal={closeModal}/>}/>
            <Route path='/trash' element={ <Trash isModalOpen={isModalOpen} openModal={openModal} closeModal={closeModal}/>}/>
          </Routes>
        </BrowserRouter>
        <Footer/>
    </div>
  );
}

export default App;
