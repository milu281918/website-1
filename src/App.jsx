import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Benifits from './components/Benifits';
import Content from './components/Content';
import Work from './components/Work'
import Course from './components/Course';
import Learn1 from './components/Learn1';
import Meet from './components/Meet';
import Footer from './components/Footer';
import { useState } from 'react';
import React from "react";
function App() {

  return (
    <> 
      <Navbar/>
      <Hero></Hero>
      <Card></Card>
      <Content></Content>
      <Benifits/>
      <Work></Work>
      <Course></Course>
      <Learn1></Learn1>
      <Meet></Meet>
      <Footer></Footer>
    </>
  );
}

export default App
