import '../App.css';
import linkedin from "../../public/linkedin.png";
import gitlab from "../../public/gitlab.png";
import github from "../../public/github.png";
import Space from "../../public/Space.mp4"
import {HOME_DESC_1, HOME_DESC_2, HOME_DESC_3} from "../consts.js";
import CButton from "./CButton.jsx";

function Home() {
    return (
        <div className='home'>
            <div className='home-objects'>
                <div className='home_desc'>
                    <h1>{HOME_DESC_1}</h1>
                    <h1 className='desk-dev'>{HOME_DESC_3}</h1>
                    <p>{HOME_DESC_2}</p>
                    <div className='home-buttons'>
                        <CButton className='plain-button-with-underline' variant="outlined" color="secondary">My projects</CButton>
                        <CButton className='plain-button-with-underline' variant="outlined" color="secondary">Contact</CButton>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home