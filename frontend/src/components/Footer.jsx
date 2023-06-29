import BlueWaves from "./BlueWaves.jsx";
import linkedin from "../../public/linkedin.png";
import github from "../../public/github.png";
import gitlab from "../../public/gitlab.png";

const Footer = () => {

    return (
        <div className='footer'>
            <div className='footer-layout'>
                <BlueWaves/>
                <div className='send-a-mail'>Feel free to reach me on <a className='message-links'
                                                 href="https://www.linkedin.com/in/valeria-kurylko/">LinkedIn</a> or
                    send
                    an <a className='message-links' href="mailto:valeriia.kurylko22@gmail.com">e-mail</a>.
                </div>


                <div className='social_links'>
                    <a href="https://www.linkedin.com/in/valeria-kurylko/">
                        <div><img className='social_icon' src={linkedin} alt="linkedin"/></div>
                    </a>
                    <a href="https://github.com/kurylko">
                        <div><img className='social_icon' src={github} alt="github"/></div>
                    </a>
                    <a href="https://gitlab.com/val_kurylko">
                        <div><img className='social_icon' src={gitlab} alt="gitlab"/></div>
                    </a>
                </div>
            </div>

            <div className='copyright'>©Valeriia Kurylko 2023</div>

        </div>
    )
}

export default Footer