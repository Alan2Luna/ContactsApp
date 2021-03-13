import React, {useState} from 'react'
import './index.css'

const MenuHamburger = ({ open, handleOpenNavBar}) => {
    // const [open, setOpen] = useState(false);
    return (
        <>
            <div 
                className={`toggle${open ? ' open' : ''}`} 
                onClick={handleOpenNavBar}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </>
    )
}

export default MenuHamburger;
