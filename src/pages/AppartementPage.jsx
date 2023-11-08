import React, { useEffect, useState } from "react";
import './AppartementPage.scss'
import  Header from '../components/Header'
import Footer from '../components/Footer'
import { Link, useLocation } from "react-router-dom";
import DropdownInfo from '../components/DropdownInfo';



export function AppartementPage(){
    const [isVisible, setIsVisible] = useState(false)
    const showContent = () => {
        setIsVisible (!isVisible);
    }

    const location = useLocation()
    const [selectedAppartement, setSelectedAppartement] = useState(null)
    console.log("location", location);
    console.log("our location is:", location.state.appartementId)

    useEffect(fetchAppartementData, [])

    function fetchAppartementData(){
        fetch("logements.json").then((response) => response.json())
        .then((appartements) => {
           const selectedAppartement =  appartements.find(appartement => appartement.id === location.state.appartementId)
           setSelectedAppartement(selectedAppartement);
        
        })
        .catch(console.error)
    }

    if(selectedAppartement == null) return <div>...Chargement</div>

    return(
        <>
            <Header />
            <main>
                <div className="divImageAppartement">
                    <img className="image_appartement" src={selectedAppartement.pictures[0]} alt="image d un appartement"></img>
                </div>
                <div className="appartement_container">
                    <div className="appartement_content">
                        <div className="appartement_info">
                            <h1>{selectedAppartement.title}</h1>
                            <h2>{selectedAppartement.location}</h2>
                            <div className="tag_container">
                            {selectedAppartement.tags.map((tag) => 
                                    <span className="tag">{tag}</span>
                                )
                            }
                            </div>
                        </div>
                        <div className="owner_info">
                            <h2>{selectedAppartement.host.name}</h2>
                            <img className="owner_img" src={selectedAppartement.host.picture}></img>
                            <div className="owner_star">
                            {[1,2,3,4,5].map((num) => (
                                <span className={selectedAppartement.rating >= num ? "on" : "off"}>★</span>
                            ))}
                            </div>
                        </div>
                    </div>
                    <div className="dropdowns">
                        {/* <div className="container_dropdown">
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
                        </div> */}
                        <DropdownInfo 
                            title="Description"
                            description={selectedAppartement.description}
                         />
                         <DropdownInfo 
                            title="Equipement"
                            description={selectedAppartement.equipments.map((eq) => (
                                <li>{eq}</li>
                            ))}
                         />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}