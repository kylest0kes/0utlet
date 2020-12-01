import React from 'react';

import './style.css';

export default function NavBar() {
    return (
        <div data-sticky-container>
        <div data-sticky data-margin-top='0' data-top-anchor="header:bottom" data-btm-anchor="content:bottom">
            <div className="top-bar topbar-sticky-shrink">
                <div className="top-bar-title">
                    <h1 className="nav-logo">outlet</h1>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li><a className="nav-links" href="#">Home</a></li>
                        <li><a className="nav-links" href="#">About</a></li>
                        <li><a className="nav-links" href="#">Contact</a></li>
                        <li><a className="nav-links" href="#">Posts</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
}
