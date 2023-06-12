import '../App.css';
import iconsjavascript from '../assets/iconsjavascript.png';
import iconstypescript from '../assets/iconstypescript.png';
import AddIcon from '@mui/icons-material/Add';

function Stack() {

    return (
        <div className='stack'>
            MY STACK
            <div className='languages'>
                <p className='languages-text'>Programming languages:
                    <img className='social_icon' src={iconsjavascript} alt="js-icon" />
                    <AddIcon />
                    <img className='social_icon' src={iconstypescript} alt="ts-icon" />
                </p>
            </div>

            <div className='back_front'>
                <div className='back'>
                    <div className='back_title'>BACKEND</div>
                    <div className='dev_block_back'>
                        <div>Development:</div>
                        <div className='back_dev_tech'>
                            <div className='single_tech'>Express</div>
                            <div className='single_tech'>Node.js</div>
                        </div>
                    </div>
                    <div className='dev_block_back'>
                        <div>Database:</div>
                        <div className='back_dev_tech'>
                            <div className='single_tech'>MySQL</div>
                            <div className='single_tech'>Firebase</div>
                        </div>
                    </div>
                    <div className='dev_block_back'>
                        <div>Software:</div>
                        <div className='back_dev_tech'>
                            <div className='single_tech'>Postman</div>
                        </div>
                    </div>
                </div>

                <div className='front'>
                    <div className='front_title'>FRONTEND</div>
                    <div className='dev_block_front'>
                        <div>Development:</div>
                        <div className='front_dev_tech'>
                            <div className='single_tech'>REACT.JS</div>
                            <div className='single_tech'>Next.js</div>
                            <div className='single_tech'>REST API</div>
                            <div className='single_tech'>CSS</div>
                            <div className='single_tech'>HTML</div>
                            <div className='single_tech'>SASS</div>
                        </div>
                    </div>
                    <div className='dev_block_front'>
                        <div className='dev_block_front'>
                            <div>Tools:</div>
                            <div className='front_dev_tech'>
                                <div className='single_tech'>Redux</div>
                                <div className='single_tech'>Vite</div>
                                <div className='single_tech'>Material UI</div>
                                <div className='single_tech'>Tailwind</div>
                            </div>
                        </div>
                    </div>
                    <div className='dev_block_front'>
                        <div className='dev_block_front'>
                            <div>Software:</div>
                            <div className='front_dev_tech'>
                                <div className='single_tech'>Figma</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Stack