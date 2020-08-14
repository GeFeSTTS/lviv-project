import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import diagonalLine from '../../assets/diagonal-line.svg';
import logo from '../../assets/logo.svg';
import './index.css';

export default function Navbar () {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };
    
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
                {/* <Link
                    activeClass="active"
                    to="contacts"
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    Контакти
                </Link> */}
            </div>
        </nav>
    )
}