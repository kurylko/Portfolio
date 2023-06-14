import '../App.css';
import {useState} from 'react';
import abc from "../../public/abc.png"
import axios from 'axios';
import CButton from "./CButton.jsx";

function Contact() {
    const linkeDnLink = <a href="https://www.linkedin.com/in/valeria-kurylko/">LinkedIn </a>;

    const [message, setMessage] = useState({
        userName: "",
        email: "",
        userMessage: ""
    })


    const MAX_LENGTH = 1000;

    const handleSubmit = (event) => {
        event.preventDefault();
        const userData = {
            name: message.userName,
            email: message.email,
            message: message.userMessage
        };


        axios.post("http://localhost:5006/contacts", userData).then((response) => {
            setMessage({
                userName: "",
                email: "",
                userMessage: ""
            });

            if (response.data.validationErrors.length) {
                console.log("post error:", response.data.validationErrors[0].message)
            } else {
                alert(`Hello, ${message.userName}! Thank you for your message! I will answer as soon as possible!`);
            }
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
        } else alert('Please try <1000 char');
    };

    return (
        <div className='contact'>
            CONTACT
            <div className='contact_container'>
                <div className='about'>
                    <div className='contact_pic'
                         style={{
                             backgroundImage: `url(${abc})`, backgroundSize: "contain",
                             backgroundPosition: "top",
                             background: "cover"
                         }}
                    >
                    </div>
                    <div>
                        <p>Collaboration - key for successsful projects.</p>
                        <p>Feel free to reach me on {linkeDnLink} or send a direct message.</p>
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
                    <CButton className='plain-button-with-underline' color="secondary" onClick={handleSubmit}>
                        Let's do it!
                    </CButton>
                </form>
            </div>
        </div>
    )
}

export default Contact