import React from 'react';
import {createRoot} from 'react-dom/client';
import Footer12, { Banner, Header, Navbar } from './demo.jsx';
// here Footer is default import, in this case we can change name while importing
// where as Banner, Header, Navbar writes inside {} and are termed as named import, in this case we do not change name while importing
function MyComponent(){
    return <>
        <Header/>
        <Navbar/>
        <Banner/>
        <Footer12/>
    </> 
}

createRoot(document.getElementById("root")).render(<MyComponent/>);