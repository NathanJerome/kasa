import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import {ErrorPageNotFound} from "./pages/ErrorPageNotFound"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPageNotFound />,
  },
  {
    path: "/Appartement",
    element: 
     <>
      <Header />
        <h1> Nos appartement</h1>
      <Footer />
     </>
  },
  {
    path: "/about",
    element: 
    <>
    <Header />
      <h1> A propos</h1>
    <Footer />
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
