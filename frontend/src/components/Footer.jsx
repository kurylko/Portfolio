import linkedin from "../assets/icons/linkedin.png";
import github from "../assets/icons/github-logo.png";
import gitlab from "../assets/icons/gitlab.png";
import IconButton from "@mui/material/IconButton";


const Footer = () => {
    const linkedInUrl = "https://www.linkedin.com/in/valeria-kurylko/";
    const gitHubUrl = "https://github.com/kurylko";
    const gitLabUrl = "https://gitlab.com/val_kurylko";

    return (
        <div className='footer'>
            <p className='footer-text'>©Valeriia Kurylko 2024</p>
            <div className='social_links'>
                <IconButton href={linkedInUrl}>
                    <img className='social_icon' src={linkedin} alt="LinkedIn"/>
                </IconButton>
                <IconButton href={gitHubUrl}>
                    <img className='social_icon' src={github} alt="GitHub"/>
                </IconButton>
                <IconButton href={gitLabUrl}>
                    <img className='social_icon' src={gitlab} alt="GitLab"/>
                </IconButton>
            </div>
        </div>
    )
}

export default Footer