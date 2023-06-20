import Navbar from "../components/Navbar";
import Home from '../components/Home';
import Stack from '../components/Stack';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from "../components/Footer.jsx";
import React, {useRef} from "react";
import GreyWaves from "../components/GreyWaves.jsx";

function Main({projects}) {

    return (
        <div className="main_container">
            <Home />
            <Navbar />
            <Stack />
            <GreyWaves/>
            <Projects projects={projects}/>
            <Contact />
            <Footer/>
        </div>
    )
}

export default Main;