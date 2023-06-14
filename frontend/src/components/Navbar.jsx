import '../App.css';
import React, {useLayoutEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import {FIRST_SECTION_HEIGHT} from "../consts.js";

function Navbar() {
    const [isFirstSectionScrolledDown, setIsFirstSectionScrolledDown] = useState(false);
    const handleScroll = () => {
        setIsFirstSectionScrolledDown(window.scrollY > FIRST_SECTION_HEIGHT)
    }
    useLayoutEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    })

    return (
        <nav className={`navbar ${isFirstSectionScrolledDown && 'nav-fixed'}`}>
            <ul>
                <li><NavLink to='/'>HOME</NavLink></li>
                <li><NavLink to='/stack'>STACK</NavLink></li>
                <li><NavLink to='/projects'>PROJECTS</NavLink></li>
                <li><NavLink to='/contact'>CONTACT</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar