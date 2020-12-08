import React from 'react';
import FacebookLogo from '../img/facebook.png'
import TwitterLogo from '../img/twitter.png'
import LinkedinLogo from '../img/linkedin.png'
import YoutubeLogo from '../img/youtube.png'

function Footer() {
    return (
        <div className="footer flex column align-center">
            <h2 className="follow-us flex justify-center align-center">FOLLOW US</h2>
            <ul className="social-contact flex justify-center space-around">
                <li><img src={FacebookLogo} alt="" /></li>
                <li><img src={TwitterLogo} alt="" /></li>
                <li><img src={LinkedinLogo} alt="" /></li>
                <li><img src={YoutubeLogo} alt="" /></li>

            </ul>

        </div>
    );
}

export default Footer;