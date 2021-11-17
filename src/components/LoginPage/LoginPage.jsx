import React, { useState } from "react";
import { signInWithGoogle } from "../../firebase";
import { auth } from "../../firebase";
import "./LoginPage.css";

const LoginPage = () => {
    
    return (
        <div className="login-page">
            <div className="login__container">
                <button className="login__btn login__google" onClick={signInWithGoogle}>
                    Login with Google
                </button>
            </div>
        </div>
    );
}

export default LoginPage;