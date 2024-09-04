
import './App.css';
import Navbar from "./components/Navbar"
import Page from './components/Page';
import Search from './components/Searchmodel/Search';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
  import {Parent} from './components/context/Parent';
  import { Authprovider } from './components/context/Authcontext';
import Collection from './components/Collection';
import { useState } from 'react';
import { MyContext } from './components/context/Parent';
import { useContext } from 'react';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';


function App() {
  
  const ids = localStorage.getItem("mainid")
  
  
  return (
    <div>

        <Authprovider>
        <BrowserRouter>
          <Navbar />
      <Parent>

          <Routes>
            <Route  path={`/page/:${ids}`} element={<Page />}></Route>
            <Route  path='/' element={<Search />}></Route>
            <Route path='/coll' element={<Collection />}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/about' element={<About/>}></Route>
        
          




          </Routes>
      <Footer/>
      </Parent>
        </BrowserRouter>
          </Authprovider>
    </div>


    
  );
}

export default App;
