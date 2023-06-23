import Navbar from "../components/Navbar";
import Home from '../components/Home';
import Stack from '../components/Stack';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from "../components/Footer.jsx";
import React from "react";
import GreyWaves from "../components/GreyWaves.jsx";

function Main({projects}) {

    const handleClickHome = () => {
        document.querySelector(".home").scrollIntoView({block: 'center'});
    };
    const handleClickStack = () => {
        document.querySelector(".stack").scrollIntoView({block: 'center'});
    };
    const handleClickProjects = () => {
        document.querySelector(".projects").scrollIntoView({block: 'center'});
    };
    const handleClickContacts = () => {
        document.querySelector(".contact").scrollIntoView({block: 'center'});
    };


    return (
        <div className="main_container">
            <Home handleClickProjects={handleClickProjects}
                  handleClickContacts={handleClickContacts}
            />
            <Navbar
                handleClickHome={handleClickHome}
                handleClickStack={handleClickStack}
                handleClickProjects={handleClickProjects}
                handleClickContacts={handleClickContacts}
            />
            <Stack/>
            <GreyWaves/>
            <Projects projects={projects}/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default Main;