import '../App.css';

function Contact() {
    return (
        <div className='contact'>
            CONTACT
            <div className='contact_container'>
                <div className='about'>
                    <div className='contact_pic'>picture</div>
                    <div>
                        <p>Collaboration - key for successsful projects.</p>
                        <p> Feel free to reach me on LinkedIn or send a direct message.</p>
                    </div>
                </div>

                <form className='contact_form'>
                    <input className='message' type="text" placeholder="Your message"></input>
                    <input className='name' type="text" placeholder="Your name"></input>
                    <input className='email' type="text" placeholder="Your email"></input>
                    <button className='submit_form'>Submit</button>
                    <span className='btn_span'></span>
                </form>
            </div>
        </div>
    )
}

export default Contact