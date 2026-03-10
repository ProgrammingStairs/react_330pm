import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import NavbarComponent from './components/Navbar.js';
import Slider from './components/Slider.js';

function MyComponent() {
  return (<>
    <NavbarComponent/>
    <Slider/>
  </>);
}

createRoot(document.getElementById("root")).render(<MyComponent/>);
