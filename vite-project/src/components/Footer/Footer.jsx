import React from 'react';
import "./Footer.css";
import { assets } from '../../assets/assets';

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt='' />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores perspiciatis consectetur ea illum necessitatibus explicabo quia. Odio exercitationem adipisci omnis quis laborum voluptas aliquid vitae eveniet itaque mollitia! Esse, voluptatum.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>Société</h2>
                    <ul>
                        <li>Home</li>
                        <li>A propos</li>
                        <li>livraison</li>
                        <li>Notre politique</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>Restons en contact</h2>
                    <ul>
                        <li>+12 34 52 23 55</li>
                        <li>12345@gmail.com</li>
                    </ul>
                </div>
            </div>
        <hr />
            <p className='footer-copyright'>Copyright 2024 Tomato.com - Tous droits réservés</p>
        </div>
    );
};

export default Footer;