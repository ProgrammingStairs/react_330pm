import React from 'react';
import {createRoot} from 'react-dom/client';

// function MyComponent(){
//     return <h3>This is an example of React js Functional component</h3>
// }

// function MyComponent(){
//     return <div>
//            <h3>This is an example of React js Functional component</h3>
//            <p>This is an example of React js functional component</p>
//     </div> 
// }

// function MyComponent(){
//     return <React.Fragment>
//            <h3>This is an example of React js Functional component</h3>
//            <p>This is an example of React js functional component</p>
//     </React.Fragment> 
// }

function MyComponent(){
    return <>
           <h3>This is an example of React js Functional component</h3>
           <p>This is an example of React js functional component</p>
    </> 
}

createRoot(document.getElementById("root")).render(<MyComponent/>);

