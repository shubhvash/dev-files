import React from 'react';

import './Navbar.css';

function Header() {
    return (
        <div className="header">
            <div className="Navbar">
                <h2>DEV_FILES</h2>
                <ul>
                    <a href="">
                        <li>Home</li>
                    </a>
                    <a href="">
                        <li>About</li>
                    </a>
                    <a href="">
                        <li>Contact US</li>
                    </a>
                </ul>
            </div>
        </div>
    );
}

export default Header;
