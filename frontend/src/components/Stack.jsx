import '../App.css';
import iconsjavascript from '../assets/iconsjavascript.png';
import iconstypescript from '../assets/iconstypescript.png';

function Stack() {

    return (
        <div className='stack'>
            <div className='languages'>
                <p className='languages-text'>Programming languages:
                    <img className='social_icon' src={iconsjavascript} alt="js-icon" />
                    <img className='social_icon' src={iconstypescript} alt="ts-icon" />
                </p>
            </div>

            <div className='back_front'>
                <div className='back'>
                    <div className='back_title'>BACKEND</div>
                    <div className='dev_block_back'>
                        <div>Development:</div>
                        <div className='back_dev_tech'>
                            <div>Express</div>
                            <div>Node.js</div>
                        </div>
                    </div>
                    <div className='dev_block_back'>
                        <div>Database:</div>
                        <div className='back_dev_tech'>
                            <div>MySQL</div>
                            <div>Firebase</div>
                        </div>
                    </div>
                    <div className='dev_block_back'>
                        <div>Software:</div>
                        <div className='back_dev_tech'>
                            <div>Postman</div>
                        </div>
                    </div>
                </div>

                <div className='front'>
                    <div className='front_title'>FRONTEND</div>
                    <div className='dev_block_front'>
                        <div>Development:</div>
                        <div className='front_dev_tech'>
                            <div>REACT.JS</div>
                            <div>Next.js</div>
                            <div>REST API</div>
                            <div>CSS</div>
                            <div>HTML</div>
                            <div>SASS</div>
                        </div>
                    </div>
                    <div className='dev_block_front'>
                        <div className='dev_block_front'>
                            <div>Tools:</div>
                            <div className='front_dev_tech'>
                                <div>Redux</div>
                                <div>Vite</div>
                                <div>Material UI</div>
                                <div>Tailwind</div>
                            </div>
                        </div>
                    </div>
                    <div className='dev_block_front'>
                        <div className='dev_block_front'>
                            <div>Software:</div>
                            <div className='front_dev_tech'>
                                <div>Figma</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Stack