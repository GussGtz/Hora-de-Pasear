import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './css/lugares.css';
import './css/login.css';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Lugares from './page/lugares';
import Home from './components/home';
import Login from './page/login';
import Registro from './page/registro';



function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/lugares',
      element: <Lugares />,
    },
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: '/registro',
      element: <Registro/>
    }
  ]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
