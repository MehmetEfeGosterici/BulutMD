import React from 'react'
import "./Header.css"
import LokumcuBaba from "./LokumcuBaba.png"

function Header() {
    return (
        <div className="header-container">
            <div className="header">
                <div className="logo">
                    <img src={LokumcuBaba} />
                </div>
                <div className="anchors">
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Products</li>
                        <li>Contact</li>
                    </ul>
                </div>
                
            </div>
        </div>
    )
}

export default Header
