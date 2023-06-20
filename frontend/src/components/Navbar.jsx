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
                <li className="plain-button-with-underline"
                    onClick={handleClickHome}>HOME</li>
                <li className="plain-button-with-underline"
                    onClick={handleClickStack}>STACK</li>
                <li className="plain-button-with-underline"
                    onClick={handleClickProjects}>PROJECTS</li>
                <li className="plain-button-with-underline"
                    onClick={handleClickContacts}> CONTACT</li>
            </ul>
        </nav>
    )
}

export default Navbar