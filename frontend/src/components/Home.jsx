import '../App.css';
import {HOME_DESC_1, HOME_DESC_3} from "../consts.js";
import CButton from "./CButton.jsx";

function Home({handleClickContacts, handleClickProjects}) {

    return (
        <div className='home'>
            <div className='home-objects'>
                <div className='home_desc'>
                    <h2>{HOME_DESC_1}</h2>
                    <h1 className='desk-dev'>{HOME_DESC_3}</h1>
                    <div className='home-buttons'>
                        <CButton className='plain-button-with-underline' variant="outlined" color="secondary"
                                 onClick={handleClickProjects}>My projects</CButton>
                        <CButton className='plain-button-with-underline' variant="outlined"
                                 color="secondary" onClick={handleClickContacts}>Contact</CButton>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home