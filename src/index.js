import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Gallery from './Pages/Gallery';


const root = ReactDOM.createRoot(document.getElementById('root'));
let allRoute = createBrowserRouter(
  [
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/about',
      element:<About/>
    },
    {
      path:'/gallery',
      element:<Gallery/>
    },
    {
      path:'/services',
      element:<Services/>
    },
    {
      path:'/contact',
      element:<Contact/>
    },
  ]
)

root.render(
  <React.StrictMode>
    <RouterProvider router={allRoute}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
