import '../App.css';
import React from 'react';

function Navbar() {

    const handleClickHome = () => {
        document.querySelector('.home').scrollIntoView({ behavior: 'smooth' });
    };
    const handleClickStack = () => {
        document.querySelector('.stack').scrollIntoView({ behavior: 'smooth' });
    };

    const handleClickProjects = () => {
        document.querySelector('.projects').scrollIntoView({ behavior: 'smooth' });
    };

    const handleClickContact = () => {
        document.querySelector('.contact').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='navbar'>
            <ul>
                <li onClick={handleClickHome}>Home</li>
                <li onClick={handleClickStack}>Stack</li>
                <li onClick={handleClickProjects}>Projects</li>
                <li onClick={handleClickContact}>Contact</li>
            </ul>
        </div>
    )
}

export default Navbar