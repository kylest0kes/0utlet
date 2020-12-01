import React from 'react';
import logo from '../../images/logo.png';

import './style.css';

export default function SignUpForm() {
    // COME BACK FOR LABEL FLOAT EFFECT FUNCTION
    return (
    <div className="signup-login-container">
        <img className="logo-img" src={logo} alt="outlet" />
        <form className="sign-up callout text-center">
            <h2 className="signup-login-title">sign up</h2>
            <div className="floated-label-wrapper">
                <label for="username">email</label>
                <input type="text" id="email" name="email input" placeholder="email" />
            </div>
            <div className="floated-label-wrapper">
                <label for="username">username</label>
                <input type="text" id="username" name="username input" placeholder="username" />
            </div>
            <div className="floated-label-wrapper">
                <label for="pass">password</label>
                <input type="password" id="pass" name="password input" placeholder="password" />
            </div>
            <div className="floated-label-wrapper">
                <label for="pass">password again</label>
                <input type="password" id="pass-2" name="password-2 input" placeholder="password again" />
            </div>
            <a className="login-link" href="#">already a member?</a>
            <button className="button button-rounded-hover expanded" type="submit" value="sign up">sign up</button>
        </form>
    </div>
    )
}
