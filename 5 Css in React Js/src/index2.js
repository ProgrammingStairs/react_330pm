
import React from 'react';
import { createRoot } from 'react-dom/client';

function MyComponent(){
    var mystyle = {
            backgroundColor:"darkgreen",
            color:"white"
    }
    return(<div style={mystyle}>
        <h2>Example of CSS</h2>
        <p>This is an example of Css in React Js</p>
    </div>);
}
createRoot(document.getElementById("root")).render(<MyComponent/>);