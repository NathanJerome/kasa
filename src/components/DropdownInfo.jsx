import React, { useState } from "react";
import './DropdownInfo.scss'


function DropdownInfo() {

    const [isVisible, setIsVisible] = useState(false)
    const showContent = () => {
        setIsVisible (!isVisible);
    }
    return(
        <>
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
                    </div>
            
        </>

    )
}

export default DropdownInfo