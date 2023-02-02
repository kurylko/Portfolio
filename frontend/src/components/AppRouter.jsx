import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Home';
import Stack from './Stack';
import Projects from './Projects';
import Contact from './Contact';
import Main from "../layouts/Main";

const AppRoutes = () => {
    console.log('fff')
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/home" element={<Home/>} />
                <Route path="/stack" element={<Stack/>} />
                <Route path="/projects" element={<Projects/>} />
                <Route path="/contact" element={<Contact/>} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;


