import './css/style1.css';
import React from 'react';
import { createRoot } from 'react-dom/client';

function MyComponent(){
    return(<div id="nav">
        <ul>
            <li><a href=''>Home</a></li>
            <li><a href=''>About</a></li>
            <li><a href=''>Contact</a></li>
            <li><a href=''>Services</a></li>
            <li><a href=''>FAQ</a></li>
            <li><a href=''>Account</a></li>
        </ul>
    </div>);
}
createRoot(document.getElementById("root")).render(<MyComponent/>);