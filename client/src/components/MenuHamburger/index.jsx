import React, {useState} from 'react'
import './index.css'

const MenuHamburger = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div 
                className={`toggle${open ? ' open' : ''}`} 
                onClick={() => setOpen(!open)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </>
    )
}

export default MenuHamburger;
