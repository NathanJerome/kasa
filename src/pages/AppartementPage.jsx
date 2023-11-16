import React, { useEffect, useState } from "react";
import './AppartementPage.scss'
import  Header from '../components/Header'
import Footer from '../components/Footer'
import { Link, useLocation, useParams  } from "react-router-dom";
import DropdownInfo from '../components/DropdownInfo';



export function AppartementPage() {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedAppartement, setSelectedAppartement] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const { id } = useParams();
  
    useEffect(() => {
      if (!id) return;
  
      function fetchAppartementData() {
        fetch("/logements.json")
          .then((response) => response.json())
          .then((appartements) => {
            console.log("Appartements:", appartements);
            const foundAppartement = appartements.find(
              (appartement) => appartement.id === id
            );
            console.log("Selected Appartement:", foundAppartement);
            setSelectedAppartement(foundAppartement || null);
            setCurrentIndex(0);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      }
  
      fetchAppartementData();
    }, [id]);
  
    function MoveNext() {
      if (selectedAppartement && selectedAppartement.pictures) {
        setCurrentIndex((prevIndex) =>
          prevIndex === (selectedAppartement.pictures.length || 0) - 1
            ? 0
            : prevIndex + 1
        );
      }
    }
  
    function MovePrev() {
      if (selectedAppartement && selectedAppartement.pictures) {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0
            ? (selectedAppartement.pictures.length || 0) - 1
            : prevIndex - 1
        );
      }
    }
  
    if (!selectedAppartement) return <div>Loading...</div>;


    return(
        <>
            <Header />
            <main>
                <div className="divImageAppartement">
                    <i class="fa-solid fa-chevron-left" onClick={MovePrev}></i>
                    <img className="image_appartement" src={selectedAppartement.pictures[currentIndex]} alt="image d un appartement"></img>
                    <i class="fa-solid fa-chevron-right" onClick={MoveNext}></i>
                    <div className="dotsdiv">
                    {currentIndex +1}/{selectedAppartement.pictures.length}
                    </div>
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