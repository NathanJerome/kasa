import React, { useEffect, useState } from "react";
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import Banner from "./components/Banner.jsx"
import "./App.scss"
import Appartement from './components/Appartement.jsx'


function App() {

  const [appartements, setAppartements] = useState([]);

  useEffect(fetchAppartements, []);

  function fetchAppartements(){
      fetch("logements.json").then((response) => response.json())
        .then((response) => setAppartements(response))
        .catch(console.error)
  }


  return (
    <div>
    <Header />
    <Banner 
      src="banner_img.png"
      txt="Chez vous, partout et ailleurs"
      isAppPage={true}
    />
    <div className='background-grey'>
        <div className='flex-appartement'>
          {appartements.map((appartement) => (
            <Appartement title={appartement.title} cover={appartement.cover} id={appartement.id} />
          ))}
        </div>
    </div>


    <Footer />
    </div>
  )
}

export default App