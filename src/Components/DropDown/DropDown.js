import React, { useState } from "react";
import "@/Components/DropDown/DropDown.css";

import DropDownHaut from "@/Assets/Images/Components/Dropdown/DropDownFlecheHaut.png";
import DropDownBas from "@/Assets/Images/Components/Dropdown/DropDownFlecheBas.png";

function Dropdown({ title, description }) {
    /* Crée un Hook d'état */
    const [open, setOpen] = useState(false);

    const handleDropdown = () => {
        setOpen(!open);
    }

    return (
        <li className="Dropdown">
            <div className="Dropdown_header" onClick={handleDropdown} >
                <h3 className="Dropdown_title">{title}</h3>
                <span >
                    <img src={open ? DropDownHaut : DropDownBas} alt="flèche" className="Dropdown_ArrowImg" />
                </span>
            </div>
            {
                open && (
                    <div className="Dropdown_content">
                        {description}
                    </div>
                )
            }
        </li>
    );
}

export default Dropdown;