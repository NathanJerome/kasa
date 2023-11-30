import  Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from "react-router-dom";
import DropdownInfo from '../components/DropdownInfo';
import Banner from '../components/Banner';
import './About.scss'



export function About(){

    return(
        <> 
            <Header />
            <Banner 
                src = 'banner_imgAbout.png'
                txt=""
                isAppPage={false}
            />
            <main>
            <DropdownInfo 
                title="Fidélité"
                description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
            />
             <DropdownInfo 
                title="Respect"
                description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
            />
             <DropdownInfo 
                title="Service"
                description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
"
            />
             <DropdownInfo 
                title="Securité"
                description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
"
            />
            </main>
            <Footer />
        </>
    )
}