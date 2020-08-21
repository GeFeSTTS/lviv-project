import React from 'react';
import supports from '../../assets/supports.svg';
import supports2 from '../../assets/supports2.svg';
import footerLogo from '../../assets/footer-logo.svg';
import './index.css';

export default function Footer () {
    return (
        <div className="footer-container" id="footer">
            <div className="footer-content">
                <img className="footer-logo" src={footerLogo} alt="Footer Logotype" />
                <img className="web-support" src={supports} alt="Supports" />  
                <img className="mobile-support" src={supports2} alt="Supports" /> 
            </div>
            <div className="copyright-container">
                <h6>Інститут стратегії культури © 2020</h6>
                <h6>У дизайні сайту використано фрагмент роботи Мирона Яціва «Львів. Три вежі» \ 1984</h6>
            </div>
        </div>
    )
}