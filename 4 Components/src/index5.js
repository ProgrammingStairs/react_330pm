import React from 'react';
import {createRoot} from 'react-dom/client';

// class MyComponent extends React.Component{
//     render(){
//         return <h2>This is an example of class component</h2>
//     }
// }

// class MyComponent extends React.Component{
//     render(){
//         return <React.Fragment>
//             <h2>This is an example of class component</h2>
//             <h2>This is an example of class component</h2>
//         </React.Fragment>
//     }
// }

class MyComponent extends React.Component{
    render(){
        return <>
            <h2>This is an example of class component</h2>
            <h2>This is an example of class component</h2>
        </>
    }
}

createRoot(document.getElementById("root")).render(<MyComponent/>);