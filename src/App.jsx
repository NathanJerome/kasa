import React from 'react'
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import Banner from "./components/Banner.jsx"
import "./App.scss"
import Appartement from './components/Appartement.jsx'


function App() {
  return (
    <div>
    <Header />
    <Banner 
      src="banner_img.png"
      txt="Chez vous, partout et ailleurs"
    />
    <Appartement />
    <Footer />
    </div>
  )
}

export default App