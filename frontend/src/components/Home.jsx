import '../App.css';
import linkedin from "../../public/linkedin.png";
import gitlab from "../../public/gitlab.png";
import github1 from "../../public/github1.png";

function Home() {
    return (
        <div className='home'>
            <div className='home_desc'>
                <p>Hello
                    I`m Valeria.</p>
                <p>I`m a Full Stack Web Developer with marketing background. Creating exiting using experience - my truly passion. </p>
                <p>Programming Language: JavaScript + TypeScript</p>
            </div>
            <div className='social_links'>
                <a href="https://www.linkedin.com/in/valeria-kurylko/">
                    <div> <img className='social_icon' src={linkedin} alt="linkedin" /> </div>
                </a>
                <a href="https://github.com/kurylko">
                    <div><img className='social_icon' src={github1} alt="github" /></div>
                </a>
                <a href="https://gitlab.com/val_kurylko">
                    <div><img className='social_icon' src={gitlab} alt="gitlab" /></div>
                </a>
            </div>
        </div>
    )
}

export default Home