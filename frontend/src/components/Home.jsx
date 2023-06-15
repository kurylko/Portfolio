import '../App.css';
import linkedin from "../../public/linkedin.png";
import gitlab from "../../public/gitlab.png";
import github from "../../public/github.png";
import Space from "../../public/Space.mp4"
import {HOME_DESC_1, HOME_DESC_2} from "../consts.js";

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
                    <pre>{HOME_DESC_1}</pre>
                    <pre>{HOME_DESC_2}</pre>
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