import './css/style.css';
import React from 'react';
import { createRoot } from 'react-dom/client';

function MyComponent(){
    return(<div>
        <h2 id="demo2">Example of CSS</h2>
        <p id="demo1">This is an example of Css in React Js</p>
    </div>);
}
createRoot(document.getElementById("root")).render(<MyComponent/>);