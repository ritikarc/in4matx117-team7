import React, { useState } from "react";
import { signInWithGoogle } from "../../firebase";
import { auth } from "../../firebase";
import "./LoginPage.css";


const LoginPage = () => {
    
    return (
        <div>
            <body className="login-page">
                
                <div className="login__container">
                PhoneTaxx :)
                    <button className="login__btn login__google" onClick={signInWithGoogle}>
                        Login with Google
                    </button>
                    
                </div>
                
            </body>
        </div>
    );
}

export default LoginPage;