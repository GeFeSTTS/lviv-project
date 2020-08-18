import React from 'react';
import lineCircle from '../../assets/line-circle.svg';
import building from '../../assets/building-picture.png';
import supports from '../../assets/supports.svg';
import './index.css';

export default function Header () {
    return (
        <div className="header-container" id="header">
            <img className="line" src={lineCircle} alt="Logotype" />
            <div className="text-container">
                <h1>Можливості</h1>
                <h1>та механізми створення</h1>
                <h1>міських фондів культури</h1> 
                <img className="supports" src={supports} alt="Supports" />
            </div>
            <img className="building" src={building} alt="Building" />
        </div>
    )
}