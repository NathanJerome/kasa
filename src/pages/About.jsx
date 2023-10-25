import  Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from "react-router-dom";
import DropdownInfo from '../components/DropdownInfo';
import Banner from '../components/Banner';



export function About(){

    
    return(
        <>
            <Header />
            <Banner />
            <main>
            <DropdownInfo />
            <DropdownInfo />
            <DropdownInfo />
            <DropdownInfo />
            </main>
            <Footer />
        </>
    )
}