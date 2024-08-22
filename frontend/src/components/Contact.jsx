import '../App.css';
import {useState} from 'react';
import CButton from "./CButton.jsx";
import usePostData from "../usePostData.js";

function Contact() {

    const [message, setMessage] = useState({
        userName: "",
        email: "",
        userMessage: ""
    });

    const [errorMessages, setErrorMessages] = useState({
        userName: "",
        email: "",
        userMessage: ""
    });

    const {postData, loading: messageLoading, error: error} = usePostData();

    const validateMessage = ({userName, email, userMessage}) => {
        let errors = {};

        const MAX_LENGTH = 1000;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!userMessage) {
            errors.userMessage = 'Please type your message';
        } else if (userMessage <= MAX_LENGTH) {
            errors.userMessage = 'Sorry, your message is too long. Please try <1000 characters.';
        }

        if (!userName || userName.length <= 1) {
            errors.userName = 'Please type your name';
        }

        if (!email) {
            errors.email = 'Please type your e-mail';
        } else if (!emailRegex.test(email)) {
            errors.email = 'Invalid email';
        }

        return errors;
    }


    const handleChange = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        const errors = validateMessage({...message, [name]: value});
        setMessage(prev => ({...prev, [name]: value}));
        setErrorMessages(errors);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const errors = validateMessage(message);

        if (Object.keys(errors).length > 0) {
            setErrorMessages(errors);
        } else {
            await postData("contacts", {
                name: message.userName,
                email: message.email,
                message: message.userMessage
            })
                .then(() => {
                    setMessage({
                        userName: "",
                        email: "",
                        userMessage: ""
                    });
                    alert(`Hello, ${message.userName}! Thank you for your message! I will answer as soon as possible!`);
                });
        }
    };


    return (
        <div className='contact'>
            <p>CONTACT</p>
            <div className='contact_container'>
                <div className='about'>
                    <h1 className='heading  contact-text'>Need a hand to develop a chart buster web app?</h1>
                    <div className='send-a-mail'>Feel free to reach me on <a className='message-links'
                                                                             href="https://www.linkedin.com/in/valeria-kurylko/">LinkedIn</a> or
                        send
                        an <a className='message-links' href="mailto:valeriia.kurylko@gmail.com">e-mail</a>.
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
                    {errorMessages.userMessage &&
                        <span className='contact-error'>{errorMessages.userMessage}</span>}
                    <input className='name message-input'
                           type="text"
                           placeholder="Please type your name"
                           name='userName'
                           value={message.userName}
                           onChange={handleChange}
                    >

                    </input>
                    {errorMessages.userName && <span className='contact-error'>{errorMessages.userName}</span>}
                    <input className='email message-input'
                           type="text"
                           placeholder="...and your e-mail"
                           name='email'
                           value={message.email}
                           onChange={handleChange}
                    >
                    </input>
                    {errorMessages.email && <span className='contact-error'>{errorMessages.email}</span>}
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