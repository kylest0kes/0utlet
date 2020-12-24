import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/navbar';
import logo from '../../images/logo.png';

import './style.css';

export default function App() {
  return (
    <div>
      <NavBar />
      <div className="grid-x">
        <div className="cell small-6 landing-hero">
            <img className="landing-hero-img" src={logo} alt="logo"/>
        </div>
        <div className="cell small-6 landing-hero">
            <div className="landing-hero-section">
                <section className="newsletter-subscribe">
                    <div className="newsletter-subscribe-inner">
                        <p className="subheader">See what people are saying...</p>
                    </div>
                    <Link to="/posts"><button class="button button-rounded-hover">View Posts</button></Link>
                    <br />
                    <div className="grid-x sub-links">
                        <div className="cell small-6">
                            <Link to="/signup" className="login-link">sign up</Link>
                        </div>
                        <div className="cell small-6">
                            <Link to="/login" className="login-link">log in</Link>   
                        </div>
                    </div>
                </section>
                
            </div>
        </div>
    </div>
    </div>
  )
}

