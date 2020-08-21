import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { slide as Menu } from 'react-burger-menu';
import diagonalLine from '../../assets/diagonal-line.svg';
import logo from '../../assets/logo.svg';
import './index.css';

export default function Navbar () {

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    const handleClick = () => {
        document.querySelector('.bm-cross-button button').click();
    }
    
    return (
        <nav className="nav" id="navbar">
            <img src={logo} alt="Logotype" onClick={scrollToTop}/>
            <div className="nav-container">
                <Link
                    activeClass="active"
                    to="about-project"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-40}
                >
                    про проєкт
                </Link>
                <img src={diagonalLine} alt="Diagonal line"/>
                <Link
                    activeClass="active"
                    to="tasks"
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    завдання
                </Link>
                <img src={diagonalLine} alt="Diagonal line"/>
                <Link
                    activeClass="active"
                    to="work"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-100}
                >
                    робота
                </Link>
                <img src={diagonalLine} alt="Diagonal line"/>
                <Link
                    activeClass="active"
                    to="news"
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    інфо та адвокація
                </Link>
                <img src={diagonalLine} alt="Diagonal line"/>
                <Link
                    activeClass="active"
                    to="team"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-100}
                >
                    команда
                </Link>
                <img src={diagonalLine} alt="Diagonal line"/>
                <Link
                    activeClass="active"
                    to="prehistory"
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    передісторія
                </Link>
            </div>
            <div className="burger-nav-container">
                <Menu width={'100%'} isOpen={ true }>
                    <img src={logo} alt="Logotype" onClick={function() {scrollToTop(); handleClick()}} />
                    <div className="nav-item">
                        <img src={diagonalLine} alt="Diagonal line"/>
                        <Link
                            activeClass="active"
                            to="about-project"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-40}
                            onClick={handleClick}
                        >
                            про проєкт
                        </Link>
                    </div>
                    <div className="nav-item">
                        <img src={diagonalLine} alt="Diagonal line"/>
                        <Link
                            activeClass="active"
                            to="tasks"
                            spy={true}
                            smooth={true}
                            duration={500}
                            onClick={handleClick}
                        >
                            завдання
                        </Link>
                    </div>
                    <div className="nav-item">
                        <img src={diagonalLine} alt="Diagonal line"/>
                        <Link
                            activeClass="active"
                            to="work"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-100}
                            onClick={handleClick}
                        >
                            робота
                        </Link>
                    </div>
                    <div className="nav-item">     
                        <img src={diagonalLine} alt="Diagonal line"/>
                        <Link
                            activeClass="active"
                            to="news"
                            spy={true}
                            smooth={true}
                            duration={500}
                            onClick={handleClick}
                        >
                            інфо та адвокація
                        </Link>
                    </div>
                    <div className="nav-item">
                        <img src={diagonalLine} alt="Diagonal line"/>
                        <Link
                            activeClass="active"
                            to="team"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-100}
                            onClick={handleClick}
                        >
                            команда
                        </Link>
                    </div> 
                    <div className="nav-item">
                        <img src={diagonalLine} alt="Diagonal line"/>
                        <Link
                            activeClass="active"
                            to="prehistory"
                            spy={true}
                            smooth={true}
                            duration={500}
                            onClick={handleClick}
                        >
                            передісторія
                        </Link>
                    </div>
                </Menu>
            </div>
        </nav>
    )
}