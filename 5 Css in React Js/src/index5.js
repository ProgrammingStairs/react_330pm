import './css/style.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import styled from 'styled-components';

const MyParagraph = styled.div`
    font-family : candara;
    color : red;
    font-size : 30px;
`
function MyComponent(){
    return(<MyParagraph>
        <h2>Example of CSS</h2>
        <p>This is an example of Css in React Js</p>
    </MyParagraph>);
}
createRoot(document.getElementById("root")).render(<MyComponent/>);