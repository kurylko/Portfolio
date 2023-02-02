import Navbar from "../components/Navbar";
import Home from '../components/Home';
import Stack from '../components/Stack';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import { useState } from "react";



function Main({projects}) {


    return (
        <div>
            <div className="main.container">
                <Home />
                <Navbar />
                <Stack />
                <Projects projects={projects}/>
                <Contact />
            </div>
        </div>
    )
}

export default Main;