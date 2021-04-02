import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

export default function Modal ({ open, handleOpen }) {
    if(!open) return null

    return ReactDOM.createPortal(
        <div className="overlay">
            <div className="modal">
                Este es el cuadro
                <button onClick={handleOpen}>
                    <span className="line-1"></span>
                    <span className="line-2"></span>
                </button>
            </div>
        </div>,
        document.getElementById('portal')
    )
}