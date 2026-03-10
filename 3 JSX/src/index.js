import React from 'react';
import { createRoot } from 'react-dom/client';
import display, { fun1, fun2, fun3 } from './test.jsx';
createRoot(document.getElementById("root1")).render(display());
createRoot(document.getElementById("root2")).render(fun1());
createRoot(document.getElementById("root3")).render(fun2());
createRoot(document.getElementById("root4")).render(fun3());