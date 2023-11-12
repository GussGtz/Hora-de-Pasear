import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './css/lugares.css'
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Lugares from './page/lugares';
import Home from './components/home'; // Importa el componente Home




function App() {
    const router = createBrowserRouter([
        {
            path:'/',
            element: <Home/>
        },
        {
            path:'/lugares',
            element: <Lugares/>
        }
    ])
    return (
        <>
            <RouterProvider router={router}/>
        </>
    );
}

export default App;
