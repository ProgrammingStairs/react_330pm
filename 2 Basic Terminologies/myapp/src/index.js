import React from 'react';
import { createRoot } from 'react-dom/client';

//createRoot(document.getElementById("root")).render("This is my first npm react example");

// var content = "This is my first npm react example...";
// var rootElement = document.getElementById("root");
// var root = createRoot(rootElement)
// root.render(content);

var content = <div>
    <h2><mark>Home Page</mark></h2>
    <p><q>This is an example of <big><b>Home page</b></big> in React Js</q></p>
</div>
createRoot(document.getElementById("root")).render(content);
