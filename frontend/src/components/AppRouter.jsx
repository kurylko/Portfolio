import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Stack from './components/Stack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

const AppRoutes = () => {

    return (
        <Router>
            <Routes>
                <Route exact path="/" component={Home} />
                <Route path="/stack" component={Stack} />
                <Route path="/projects" component={Projects} />
                <Route path="/contact" component={Contact} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;


