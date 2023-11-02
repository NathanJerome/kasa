import  Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from "react-router-dom";
import DropdownInfo from '../components/DropdownInfo';
import Banner from '../components/Banner';



export function About(){

    return(
        <> 
            <Header />
            <Banner 
                src = 'banner_imgAbout.png'
                txt=""
            />
            <main>
            <DropdownInfo 
                title="Fidélité"
                description="Ceci est un dropdown pour Fidelité"
            />
             <DropdownInfo 
                title="Respect"
                description="Ceci est un dropdown pour Respect"
            />
             <DropdownInfo 
                title="Service"
                description="Ceci est un dropdown pour Service"
            />
             <DropdownInfo 
                title="Securité"
                description="Ceci est un dropdown pour Securité"
            />
            </main>
            <Footer />
        </>
    )
}