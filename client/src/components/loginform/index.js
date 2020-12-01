import React from 'react';
import logo from '../../images/logo.png';

import './style.css';

export default function LoginForm() {
    return (
        <div class="signup-login-container">
            <img class="logo-img" src={logo} attr="outlet"/>
            <form class="sign-up callout text-center">
                <h2 class="signup-login-title">log in</h2>
                <div class="floated-label-wrapper">
                    <label for="username">email</label>
                    <input type="text" id="email" name="email input" placeholder="email" />
                </div>
                <div class="floated-label-wrapper">
                    <label for="pass">password</label>
                    <input type="password" id="pass" name="password input" placeholder="password" />
                </div>
                <a class="login-link" href="#">need an account?</a>
                <button class="button button-rounded-hover expanded" type="submit" value="sign up">log in</button>
            </form>
        </div>
    )
}
