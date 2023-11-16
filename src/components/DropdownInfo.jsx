import React, { useState } from "react";
import './DropdownInfo.scss'


function DropdownInfo(props) {
    const { title, description } = props
    const [isVisible, setIsVisible] = useState(false)
    const showContent = () => {
        setIsVisible (!isVisible);
    }
    return(
        <div className="dropdown">
            <div className="container_dropdown">
                <div className="dropdown_header">
                    <h3 className="dropdown_title">{title}</h3>
                    <i className="fa-solid fa-chevron-up" onClick={showContent}></i>
                </div>
                <div className="dropdown_text">
                    {isVisible && <div>{description}</div>}
                </div>
            </div>
        </div>

    )
}

export default DropdownInfo