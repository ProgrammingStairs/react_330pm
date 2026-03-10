import React from 'react';
import {createRoot} from 'react-dom/client';

function Header(){
    return <>
        <h2>Header Component</h2>
        <p>This is Header Component</p>
    </>
}
function Navbar(){
    return <>
        <h2>Navbar Component</h2>
        <p>This is Navbar Component</p>
    </>
}
function Banner(){
    return <>
        <h2>Banner Component</h2>
        <p>This is Banner Component</p>
    </>
}
function Footer(){
    return <>
        <h2>Footer Component</h2>
        <p>This is Footer Component</p>
    </>
}

function MyComponent(){
    return <>
        <Header/>
        <Navbar/>
        <Banner/>
        <Footer/>
    </> 
}

createRoot(document.getElementById("root")).render(<MyComponent/>);