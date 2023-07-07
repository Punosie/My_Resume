import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Main/Home";
import Resume from "../Resume/Resume";
import Contact from "../ContactPage/Contact";
import Notfound from "../404NotFound/NotFound";
import Button from 'react-bootstrap/Button';



function Box()
{
  return (
    <BrowserRouter basename="/My_Resume">
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="resume" element={<Resume/>} />
      <Route path="contact" element={<Contact/>}/>
      <Route path="download" element={<Button/>}/>
      <Route path="*" element={<Notfound/>}/> 
      </Routes>
    </BrowserRouter>
    
  );
}

export default Box;