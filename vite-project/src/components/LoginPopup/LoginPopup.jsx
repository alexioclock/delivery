import React, { useState } from 'react';
import './LoginPopup.css'
import { assets } from '../../assets/assets';

const LoginPopup = ({setShowLogin}) => {

    const [currentState, setCurrentState] = useState("Login")

    return (
        <div className='login-popup'>
            <form action="" className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-input">
                    {currentState === "Login" ? <></> : <input type="text" placeholder='Votre nom' required /> }
                    <input type="email" placeholder='Votre email' required />
                    <input type="password" placeholder='Votre mot de passe' required />
                </div>
                <button>{currentState === "Sign Up" ? "Créer mon compte" : "Se Connecter"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox"  required/>
                    <p>En continuant, vous êtes d'accord avec notre politiques et nos conditions</p>
                </div>
                <div className='Login-link'>
                    {currentState === "Login" ?
                    <>
                    <p>Créer un nouveau compte?</p><span className='login-button' onClick={()=>setCurrentState("Sign Up")}>Cliquez ici</span>
                    </> :
                    <>
                    <p>Vous avez déjà un compte?</p><span className='login-button' onClick={()=>setCurrentState("Login")}>Cliquez ici</span>
                    </>
                    }
                </div>
            </form>
        </div>
    );
};

export default LoginPopup;