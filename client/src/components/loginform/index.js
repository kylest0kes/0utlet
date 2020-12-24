import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

import './style.css';

export default function LoginForm() {
    return (
        <div className="signup-login-container">
            <img className="logo-img" src={logo} attr="outlet"/>
            <form className="sign-up callout text-center">
                <h2 className="signup-login-title">log in</h2>
                <div className="floated-label-wrapper">
                    <label for="username">email</label>
                    <input type="text" id="email" name="email input" placeholder="email" />
                </div>
                <div className="floated-label-wrapper">
                    <label for="pass">password</label>
                    <input type="password" id="pass" name="password input" placeholder="password" />
                </div>
                <Link to="/signup" className="login-link">need an account?</Link>
                <button className="button button-rounded-hover expanded" type="submit" value="sign up">log in</button>
            </form>
        </div>
    )
}
