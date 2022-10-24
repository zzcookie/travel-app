import React from 'react'
import ImgCarousel from './components/carousel/ImgCarousel';
import Destinations from './components/destinations/Destinations'
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Search from './components/search/Search';
import Selects from './components/selects/Selects';
//import { Routes, Route } from 'react-router-dom';
//import Teamup from './components/Teamup'
//import Routepage from './components/Route'
//import Member from './components/Member'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Selects />
      <ImgCarousel />
      <Footer /> 

      {/* <Routes>
        <Route path ='/' element={<Home/>}/>
        <Route path ='/Route' element={<Routepage/>}/>
        <Route path ='/Teamup' element={<Teamup/>}/>
        <Route path ='/Member' element={<Member/>}/>
        <Route path ='/Views' element={<Views/>}/>

      </Routes> */}

    </div>
  );
}

export default App;
