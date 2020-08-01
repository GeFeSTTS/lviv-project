import React from 'react';
import supports from '../../assets/supports.svg';
import footerLogo from '../../assets/footer-logo.svg';
import './index.css';

export default function Footer () {
    return (
        <div className="footer-container" id="footer">
            <div className="footer-content">
                <img src={footerLogo} alt="Footer Logotype" />
                <img src={supports} alt="Supports" />  
            </div>
        </div>
    )
}