import '../App.css';
import React, {useLayoutEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import {FIRST_SECTION_HEIGHT} from "../consts.js";

function Navbar() {
    const [isFirstSectionScrolledDown, setIsFirstSectionScrolledDown] = useState(false);
    const handleScroll = () => {
        console.log('--', window.scrollY)
        setIsFirstSectionScrolledDown(window.scrollY > FIRST_SECTION_HEIGHT)
    }
    useLayoutEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    })

    return (
        <nav className={`navbar ${isFirstSectionScrolledDown && 'nav-fixed'}`}>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/stack'>Stack</NavLink></li>
                <li><NavLink to='/projects'>Projects</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar