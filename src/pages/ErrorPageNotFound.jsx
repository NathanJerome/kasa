import React from "react";
import './ErrorPageNotFound.scss'
import  Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from "react-router-dom";

export function ErrorPageNotFound(){
    return(
        <>
            <Header />
            <div className="ErrorPage">
                <h1>404</h1>
                <h2>OOps! la page que vous demandez n'existe pas</h2>
                <Link to="/">Retourner sur la page d'accueil</Link>
            </div>
            <Footer />
        </>
    )
}