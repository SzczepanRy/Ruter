import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
import Read from './elements/Read';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Login from './elements/Login';
import Main from './elements/Main';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/read",
    element: <Read/>,
  },
  {
    path: "/main",
    element: <Main />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
