import '../App.css';
import {useState} from 'react';
import axios from 'axios';
import CButton from "./CButton.jsx";
import ResumeLabel from "./ResumeLaber.jsx";

function Contact() {
    const [error, setError] = useState('')
    const [message, setMessage] = useState({
        userName: "",
        email: "",
        userMessage: ""
    })

    const MAX_LENGTH = 1000;

    const handleSubmit = (event) => {
        setError('')
        event.preventDefault();
        const userData = {
            name: message.userName,
            email: message.email,
            message: message.userMessage
        };

        axios.post("http://localhost:5005/contacts", userData).then((response) => {
            setMessage({
                userName: "",
                email: "",
                userMessage: ""
            });
            alert(`Hello, ${message.userName}! Thank you for your message! I will answer as soon as possible!`);

        }).catch(e => {
            setError(e.response.data.validationErrors[0].message)
        });
    };

    const handleChange = (event) => {
        if (event.target.value.length <= MAX_LENGTH) {
            const value = event.target.value;
            console.log('name', event.target.name)
            setMessage({
                ...message,
                [event.target.name]: value
            });
        } else alert('Sorry, your message is too long. Please try <1000 characters.');
    };

    return (
        <div className='contact'>
            <p>CONTACT</p>
            <div className='contact_container'>
                <div className='about'>
                        <h1 className='heading'>Need a hand to develop a chart buster web app?</h1>
                        <div className='send-a-mail'>Feel free to reach me on <a className='message-links'
                                                                                 href="https://www.linkedin.com/in/valeria-kurylko/">LinkedIn</a> or
                            send
                            an <a className='message-links' href="mailto:valeriia.kurylko22@gmail.com">e-mail</a>.
                        </div>
                </div>

                <form className='contact_form' onSubmit={handleSubmit}>
                    <input className='message message-input'
                           type="text"
                           placeholder="How can I help you?"
                           name='userMessage'
                           value={message.userMessage}
                           onChange={handleChange}
                    >

                    </input>
                    <input className='name message-input'
                           type="text"
                           placeholder="Please write your name"
                           name='userName'
                           value={message.userName}
                           onChange={handleChange}
                    >

                    </input>
                    <input className='email message-input'
                           type="text"
                           placeholder="...and your e-mail"
                           name='email'
                           value={message.email}
                           onChange={handleChange}
                    >
                    </input>
                    {!!error && <div className='contact-error'>{error}</div>}
                    <CButton className='message-submit-btn plain-button-with-underline' variant="outlined"
                             color="secondary" onClick={handleSubmit}>
                        Let's do it!
                    </CButton>
                </form>
            </div>
        </div>
    )
}

export default Contact