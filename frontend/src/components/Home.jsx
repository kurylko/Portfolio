import '../App.css';
import {HOME_DESC_1, HOME_DESC_3} from "../consts.js";
import CButton from "./CButton.jsx";

function Home({handleClickContacts, handleClickProjects}) {

    return (
        <div className='home'>
            <div className='home-objects'>
                <div className='home_desc'>
                    <h2 className='heading-small'>{HOME_DESC_1}</h2>
                    <h1 className='desk-dev heading'>{HOME_DESC_3}</h1>
                    <div className='home-buttons'>
                        <CButton className='plain-button-with-underline' variant="outlined" color="secondary"
                                 onClick={handleClickProjects}>My projects</CButton>
                        <CButton className='plain-button-with-underline' variant="outlined"
                                 color="secondary" onClick={handleClickContacts}>Contact</CButton>
                    </div>
                </div>
                <svg className='home-free-shape' width="359" height="278" viewBox="0 0 259 178" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M258.5 71C258.5 84.7973 252.514 98.3512 242.583 110.942C232.652 123.531 218.798 135.127 203.126 144.995C171.772 164.737 133.238 177.5 104.5 177.5C47.0462 177.5 0.5 132.489 0.5 77C0.5 49.2758 12.1134 30.1851 30.8796 18.0016C49.6765 5.79809 75.6914 0.5 104.5 0.5C148.488 0.5 187.034 4.30616 214.568 15.048C228.33 20.4168 239.31 27.5066 246.848 36.691C254.379 45.8668 258.5 57.1628 258.5 71Z"
                        stroke="rgba(249, 89, 89, 0.5)"/>
                </svg>

            </div>
        </div>
    )
}

export default Home