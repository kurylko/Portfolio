import linkedin from "../../public/linkedin.png";
import github from "../../public/github-logo.png";
import gitlab from "../../public/gitlab.png";


const Footer = () => {

    return (
        <div className='footer'>
            <p className='footer-text'>©Valeriia Kurylko 2023</p>
            <div className='social_links'>
                <a href="https://www.linkedin.com/in/valeria-kurylko/">
                    <img className='social_icon' src={linkedin} alt="linkedin"/>
                </a>
                <a href="https://github.com/kurylko">
                    <img className='social_icon' src={github} alt="github"/>
                </a>
                <a href="https://gitlab.com/val_kurylko">
                    <img className='social_icon' src={gitlab} alt="gitlab"/>
                </a>
            </div>
        </div>
    )
}

export default Footer