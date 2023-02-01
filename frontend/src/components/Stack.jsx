import '../App.css';

function Stack() {
    return (
        <div className='stack'>
            <div className='back_front'>
                <div className='back'>Backend
                    <div className='dev_block_back'>
                        <div>Development:</div>
                        <div><div>Express</div>
                            <div>Node.js</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='front'>
                <div className='front'>Frontend
                    <div className='dev_block_front'>
                        <div>Development:</div>
                        <div>
                            <div>REACT</div>
                            <div>Next.js</div>
                            <div>Vite</div>
                            <div>CSS</div>
                            <div>HTML</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stack