import React from 'react';
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
                        <p className="subheader">See what people near you are saying...</p>
                    </div>
                    <form action="">
                        <div className="input-group">
                            <input className="input-area" type="text" placeholder="Enter your postal code..." />
                            <div className="input-button-area">
                                <button className="button button-rounded-hover expanded" type="submit" value="sign up">Search</button>
                            </div>
                        </div>
                    </form>
                    <div className="grid-x sub-links">
                        <div className="cell small-6">
                            <a className="login-link" href="#">sign up</a>
                        </div>
                        <div className="cell small-6">
                            <a className="login-link" href="#">log in</a>   
                        </div>
                    </div>
                </section>
                
            </div>
        </div>
    </div>
    </div>
  )
}

