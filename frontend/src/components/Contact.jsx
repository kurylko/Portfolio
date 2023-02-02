import '../App.css';
import { useState } from 'react';

function Contact() {


    const [message, setMessage] = useState({
        userName: "",
        email: "",
        userMessage: ""
    })

    const MAX_LENGTH = 1000;
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Hello, ${message.userName}! Thank you for your mesage!` );
    };

    const handleChange = (event) => {
        if (event.target.value.length <= MAX_LENGTH) {
            const value = event.target.value;
            console.log('name', event.target.name)
            setMessage({
                ...message,
                [event.target.name]: value
            });
        } else alert('Please try <1000 char');
    };

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

                <form className='contact_form' onSubmit={handleSubmit}>
                    <input className='message'
                        type="text"
                        placeholder="Your message"
                        name='userMessage'
                        value={message.userMessage}
                        onChange={handleChange}
                    >

                    </input>
                    <input className='name'
                        type="text"
                        placeholder="Your name"
                        name='userName'
                        value={message.userName}
                        onChange={handleChange}
                    >

                    </input>
                    <input className='email'
                        type="text"
                        placeholder="Your email"
                        name='email'
                        value={message.email}
                        onChange={handleChange}
                    >
                    </input>
                    <button className='submit_form'
                        onClick={handleSubmit}>
                        SEND</button>
                    <span className='btn_span'></span>
                </form>
            </div>
        </div>
    )
}

export default Contact