import React, { useState } from "react";
import './AppartementPage.scss'
import  Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from "react-router-dom";



export function AppartementPage(){
    const [isVisible, setIsVisible] = useState(false)
    const showContent = () => {
        setIsVisible (!isVisible);
    }

    return(
        <>
            <Header />
            <main>
                <div className="divImageAppartement">
                    <img className="image_appartement" src="banner_appartement.png" alt="image d un appartement"></img>
                </div>
                <div className="appartement_container">
                    <div className="appartement_content">
                        <div className="appartement_info">
                            <h1>Cozy loft on the Canal Saint-Martin</h1>
                            <h2>Paris, Île-de-France</h2>
                            <div className="tag_container">
                                <h3 className="tag">Cozy</h3>
                                <h3 className="tag">Canal</h3>
                                <h3 className="tag">Paris</h3>
                            </div>
                        </div>
                        <div className="owner_info">
                            <h2>Alexandre Dumas</h2>
                            <img className="owner_img" src="profile-picture-1.jpg"></img>
                            <div className="owner_star">
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>☆</span>
                                <span>☆</span>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown">
                        <div className="container_dropdown">
                            <div className="dropdown_header">
                                <h3 className="dropdown_title">Description</h3>
                                <i className="fa-solid fa-chevron-up" onClick={showContent}></i>
                            </div>
                            <div className="dropdown_text">
                                {isVisible && <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis in eu mi bibendum neque egestas congue quisque. Facilisis volutpat est velit egestas. Pretium fusce id velit ut tortor. Id donec ultrices tincidunt arcu. Egestas congue quisque egestas diam in arcu cursus euismod. Quam lacus suspendisse faucibus interdum posuere. Sed velit dignissim sodales ut eu sem. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris. Urna porttitor rhoncus dolor purus non enim praesent elementum. Risus at ultrices mi tempus imperdiet. Cursus euismod quis viverra nibh. Mattis enim ut tellus elementum sagittis.</p>}
                            </div>
                        </div>
                        <div className="container_dropdown">
                            <div className="dropdown_header">
                                <h3 className="dropdown_title">Equipement</h3>
                                <i classname="fa-solid fa-chevron-up" onClick={showContent}></i>
                            </div>
                            <div className="dropdown_text">
                            {isVisible && <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis in eu mi bibendum neque egestas congue quisque. Facilisis volutpat est velit egestas. Pretium fusce id velit ut tortor. Id donec ultrices tincidunt arcu. Egestas congue quisque egestas diam in arcu cursus euismod. Quam lacus suspendisse faucibus interdum posuere. Sed velit dignissim sodales ut eu sem. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris. Urna porttitor rhoncus dolor purus non enim praesent elementum. Risus at ultrices mi tempus imperdiet. Cursus euismod quis viverra nibh. Mattis enim ut tellus elementum sagittis.</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}