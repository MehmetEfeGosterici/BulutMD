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
                    <a href="#">
                        <div>
                            Home
                        </div>
                    </a>
                    <a href="#">
                        <div>
                            About Us
                        </div>
                    </a>
                    <a href="#">
                        <div>
                            Products
                        </div>
                    </a>
                    <a href="#">
                        <div>
                            Contact
                        </div>
                    </a>
                    
                </div>
                
            </div>
        </div>
    )
}

export default Header
