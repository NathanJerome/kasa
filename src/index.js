import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import {ErrorPageNotFound} from "./pages/ErrorPageNotFound"
import { AppartementPage } from './pages/AppartementPage';
import { About } from './pages/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPageNotFound />,
  },
  {
    path: "/appartement/:id",
    element: 
     <>
        <AppartementPage />
     </>
  },
  {
    path: "/appartement/",
    element: 
     <>
        <AppartementPage />
     </>
  },
  {
    path: "/about",
    element: 
    <>
    <About />
   </>
  }



])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
