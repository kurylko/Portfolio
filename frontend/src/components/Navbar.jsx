import '../App.css';
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div className='navbar'>
            <ul>
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink exact to="/stack">Stack</NavLink></li>
                <li><NavLink exact to="/projects">Projects</NavLink></li>
                <li><NavLink exact to="/contact">Contact</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar