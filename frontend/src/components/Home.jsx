import '../App.css';
import linkedin from "../../public/linkedin.png";
import gitlab from "../../public/gitlab.png";
import github from "../../public/github.png";
import Space from "../../public/Space.mp4"

function Home() {
    return (
        <div className='home'>
            <video className="background_video" loop autoPlay>
                <source src={Space}
                        type="video/mp4"/>
                Your browser does not support the video tag.
            </video>

            <div className='home-objects'>
                <div className='home_desc'>
                    <p>Hello,
                        I'm Valeria.</p>
                    <p>I am a Full Stack Web Developer with marketing background. Creating exiting user experience - my
                        truly passion. </p>
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
        </div>
    )
}

export default Home