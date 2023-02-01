import '../App.css';

function Stack() {
    return (
        <div className='stack'>
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
            </div>
            <div className='front'>
                <div className='front_title'>FRONTEND</div>
                <div className='dev_block_front'>
                    <div>Development:</div>
                    <div className='front_dev_tech'>
                        <div>REACT</div>
                        <div>Next.js</div>
                        <div>Vite</div>
                        <div>CSS</div>
                        <div>HTML</div>
                        <div>SASS</div>
                        <div>REST API</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Stack