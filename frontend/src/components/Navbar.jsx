import '../App.css';
import React, {useLayoutEffect, useState} from 'react';
import {FIRST_SECTION_HEIGHT} from "../consts.js";

function Navbar({handleClickHome, handleClickStack, handleClickProjects, handleClickContacts}) {
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
                <li onClick={handleClickHome}>HOME</li>
                <li onClick={handleClickStack}>STACK</li>
                <li onClick={handleClickProjects}>PROJECTS</li>
                <li onClick={handleClickContacts}> CONTACT</li>
            </ul>
        </nav>
    )
}

export default Navbar