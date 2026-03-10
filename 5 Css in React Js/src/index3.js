
import React from 'react';
import { createRoot } from 'react-dom/client';

function MyComponent(){
    var mystyle = {
        style1 : {
            backgroundColor:"darkgreen",
            color:"white"
        },
        style2 : {
            backgroundColor:"orange",
            color:"white"
        }
    }
    return(<div>
        <h2 style={mystyle.style1}>Example of CSS</h2>
        <p style={mystyle.style2}>This is an example of Css in React Js</p>
    </div>);
}
createRoot(document.getElementById("root")).render(<MyComponent/>);