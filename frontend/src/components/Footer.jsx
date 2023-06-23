import BlueWaves from "./BlueWaves.jsx";
import linkedin from "../../public/linkedin.png";
import github from "../../public/github.png";
import gitlab from "../../public/gitlab.png";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-layout'>
                <BlueWaves/>
                <svg className='final-wave-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#455d7a" fill-opacity="1"
                          d="M0,160L26.7,154.7C53.3,149,107,139,160,138.7C213.3,139,267,149,320,138.7C373.3,128,427,96,480,101.3C533.3,107,587,149,640,176C693.3,203,747,213,800,218.7C853.3,224,907,224,960,229.3C1013.3,235,1067,245,1120,218.7C1173.3,192,1227,128,1280,85.3C1333.3,43,1387,21,1413,10.7L1440,0L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>
                </svg>
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
            <p className='copyright'>©Valeriia Kurylko 2023</p>
        </div>
    )
}

export default Footer