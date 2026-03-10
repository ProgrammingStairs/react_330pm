import React from 'react';
import { createRoot } from 'react-dom/client';

function MyComponent(){
    return(<div style={{backgroundColor:"crimson",color:"white"}}>
        <h2>Example of CSS</h2>
        <p>This is an example of Css in React Js</p>
    </div>);
}
createRoot(document.getElementById("root")).render(<MyComponent/>);
