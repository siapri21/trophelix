import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Community from './pages/Community';
import Job from './pages/Job';
import CustomizedAccordions from './pages/Faq';
import ContactForm from './components/Contact';
import './App.css';
import Actualite from './pages/actualite';





export default function  App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  element={<Layout/>}>
          <Route index path="/" element={<Home/>} />
          <Route path="qui-sommes-nous" element={<About/>} />
          <Route path="communaute" element={<Community/>} />
          <Route path="offredemploi" element={<Job/>} />
          <Route path="Faq" element={<CustomizedAccordions/>}/>
          {/* <Route path="" element={<LoginForm/>}/> */}
          <Route path="Contact" element={<ContactForm/>} />
          <Route path="actualite" element={<Actualite/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

