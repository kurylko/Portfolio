import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "../layouts/Main";
import Stack from "./Stack.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import Home from "./Home.jsx";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/home" element={<Home />} />
                <Route path="/stack" element={<Stack />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;


