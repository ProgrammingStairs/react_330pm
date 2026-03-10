import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function MyComponent(){
    return (<>
    <div className="container-fluid" style={{backgroundColor:"dodgerblue",color:"white"}}>
        <h2>Welcome to Bootstrap in React Js</h2>
        <p>
            This is an example of bootstrap in React Js this is an example of bootstrap in React Js. This is an example of bootstrap in React Js this is an example of bootstrap in React Js. This is an example of bootstrap in React Js this is an example of bootstrap in React Js. This is an example of bootstrap in React Js this is an example of bootstrap in React Js.  
        </p>
    </div>
    <div className="container" style={{backgroundColor:"crimson",color:"white"}}>
        <h2>Welcome to Bootstrap in React Js</h2>
        <p>
            This is an example of bootstrap in React Js this is an example of bootstrap in React Js. This is an example of bootstrap in React Js this is an example of bootstrap in React Js. This is an example of bootstrap in React Js this is an example of bootstrap in React Js. This is an example of bootstrap in React Js this is an example of bootstrap in React Js.  
        </p>
    </div>
    </>);
} 

createRoot(document.getElementById("root")).render(<MyComponent/>);