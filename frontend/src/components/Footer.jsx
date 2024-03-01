import linkedin from "../assets/icons/linkedin.png";
import github from "../assets/icons/github-logo.png";
import gitlab from "../assets/icons/gitlab.png";
import { Link } from 'react-router-dom';


const Footer = () => {
    const linkedInUrl = "https://www.linkedin.com/in/valeria-kurylko/";
    const gitHubUrl = "https://github.com/kurylko";
    const gitLabUrl = "https://gitlab.com/val_kurylko";

    return (
        <div className='footer'>
            <p className='footer-text'>©Valeriia Kurylko 2023</p>
            <div className='social_links'>
                <Link to={linkedInUrl} target="_blank">
                    <img className='social_icon' src={linkedin} alt="linkdn"/>
                </Link>
                <Link to={gitHubUrl} target="_blank">
                    <img className='social_icon' src={github} alt="github"/>
                </Link>
                <Link to={gitLabUrl} target="_blank">
                    <img className='social_icon' src={gitlab} alt="gitlab"/>
                </Link>
            </div>
        </div>
    )
}

export default Footer