import Navbar from "../components/Navbar";
import Home from '../components/Home';
import Stack from '../components/Stack';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

function Main() {

    return (
        <div>
            <div className="main.container">
                <Home />
                <Navbar />
                <Stack />
                <Projects />
                <Contact />
            </div>
        </div>
    )
}

export default Main;