import '../App.css';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {FIRST_SECTION_HEIGHT} from "../consts.js";
import ResumeLabel from "./ResumeLaber.jsx";
import {Divide as HamburgerIcon} from 'hamburger-react';

function Navbar({handleClickHome, handleClickStack, handleClickProjects, handleClickContacts}) {
    // Desktop menu
    const [isFirstSectionScrolledDown, setIsFirstSectionScrolledDown] = useState(false);
    const handleScroll = () => {
        setIsFirstSectionScrolledDown(window.scrollY > FIRST_SECTION_HEIGHT)
    }
    useLayoutEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    })

    // Hamburger menu
    const [mobile, setMobile] = useState(window.innerWidth <= 500);
    const handleWindowSizeChange = () => {
        setMobile(window.innerWidth <= 500);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const [isOpen, setOpen] = useState(false);
    const [openHamburgerMenu, setOpenHamburgerMenu] = useState(false);

    const toggleClickHamburger = () => {
        setOpenHamburgerMenu(!openHamburgerMenu)
    };

    console.log('mobile', !mobile)
    return (
        <div className='nav-container'>
            {!mobile ? null :
                <HamburgerIcon
                    toggled={isOpen}
                    size='32'
                    color='#f95959'
                    rounded toggle={setOpen}
                    onToggle={toggleClickHamburger}
                />}
            <nav className={`
                ${!mobile && isFirstSectionScrolledDown && 'nav-fixed'} 
                ${!mobile && 'navbar'} 
                ${!!mobile && openHamburgerMenu && 'hamburger-container'}`
            }>
                {(!mobile || openHamburgerMenu) &&
                    <ul>
                        <li className="plain-button-with-underline"
                            onClick={handleClickHome}>HOME
                        </li>
                        <li className="plain-button-with-underline"
                            onClick={handleClickStack}>STACK
                        </li>
                        <li className="plain-button-with-underline"
                            onClick={handleClickProjects}>PROJECTS
                        </li>
                        <li className="plain-button-with-underline"
                            onClick={handleClickContacts}> CONTACT
                        </li>
                    </ul>
                }
                {mobile ? null :
                    <ResumeLabel/>
                }
            </nav>
        </div>
    )
}

export default Navbar