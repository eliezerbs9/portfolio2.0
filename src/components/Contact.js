import React, {useState} from 'react';
import styled from 'styled-components';
import AnimatedContainer from './AnimatedContainer';
import emailjs from 'emailjs-com';

const StyledElement = styled.div`
    h1{color: var(--lightblue)}

    form{
        display: flex;
        flex-direction: column;
        gap: 20px;
        label{width: 100%};
        input, textarea{
            font-size: 1.3rem; 
            color: #e1e1e1; 
            &:focus{ box-shadow: 0 0 5px var(--lightblue) };
        }
        input{
            padding: 10px;
            width: 100%;
                background-color: rgba(0,0,0,.5);

            border: none;
            outline: none;
        }
        textarea{
            padding: 10px;
            width: 100%;
            height: 250px;
                background-color: rgba(0,0,0,.5);

            border: none;
            outline: none;
            resize: none;
        }

        .info{
            display: flex;
            width: 100%;
            gap: 20px;
        }

        button{
            width: fit-content;
            padding: 10px 20px;
            background-color: transparent;
            cursor: pointer;
            outline: none;
            border: 1px solid #e1e1e1;
            color: #e1e1e1;
            font-size: 1.3rem;

            &:hover{
                border-color: var(--lightblue);
                color: var(--lightblue);
            }
        }
    }

    @media screen and (max-width: 768px){
        form{
            .info{
                flex-direction: column;
            }
        }
`;



const Contact = ({showModal, isMobile}) => {
    const [state, setState] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const {name, email, phone, message} = state;
        let templateParams = {
            user_name: name,
            user_email: email,
            contact_number: phone,
            subject: 'You have a new message',
            message: message
        }

        emailjs.send('service_skmf82d', 'template_uk189bi', templateParams, 'user_pKdxWnUs3yYbWoS5C0muU')
            .then((result) => {
                showModal(name)
                e.target.reset();
            })
            .catch(error => {
                console.error(error)
            })
    };


    return (
        <AnimatedContainer isMobile={isMobile}>
            <StyledElement>
                <h1>Contact</h1>

                <form onSubmit={handleSubmit} autoComplete="none">

                    <div className="info">
                        <label htmlFor='name'>
                            Name
                            <input  type='text' name='name' autoComplete="none" placeholder='Name'
                                onChange={handleChange}
                            />
                        </label>

                        <label htmlFor='phone'>
                            Phone
                            <input  type='phone' name='phone' autoComplete="none"  placeholder='Phone'
                                onChange={handleChange}
                            />
                        </label>

                        <label htmlFor='email'>
                            Email
                            <input  type='text' name='email' placeholder='Email'
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    
                    <label htmlFor='text'>
                        Message
                        <textarea resize={false}  name="message" placeholder='Message'
                            onChange={handleChange}
                        ></textarea>
                    </label>

                    <button type='submit'>Send</button>

                </form>
            
            </StyledElement>
        </AnimatedContainer>
    )
}

export default Contact
