import React from 'react';
import {createRoot} from 'react-dom/client';
import Header from './components/Header.js';
import Navbar from './components/Navbar.js';
import Banner from './components/Banner.js';
import Footer from './components/Footer.js';

function MyComponent(){
    return <>
        <Header/>
        <Navbar/>
        <Banner/>
        <Footer/>
    </> 
}

createRoot(document.getElementById("root")).render(<MyComponent/>);