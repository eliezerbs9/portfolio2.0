import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledElement = styled(motion.div)`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,.8);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;

    .box{
        position: relative;
        padding: 100px;
        letter-spacing: 2px;

        .heading{ font-size: 2rem; font-weight: 400; }
        .message{ font-size: 1rem; font-weight: 100 }

        button{
            border: none;
            background-color: transparent;
            outline: none;
            color: #e1e1e1;
            font-size: 1rem;
            cursor: pointer;

            &:hover{
                color: var(--lightblue)
            }
        }

        .close{
            position: absolute;
            top: 0;
            right: 0;
            font-size: 2rem;
        }
    }

    @media screen and (max-width: 480px){
        .box{
            padding: 80px 30px;
            .heading{ font-size: 1.5rem; }
            .message{ font-size: 0.9rem; }
        }
    }
`;

const EmailModal = ({name , closeModal}) => {

    const variants = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        transition: {
            duration: 0.25
        }
    }
    return (
        <StyledElement variants={variants} initial="initial" animate="animate" exit="exit">
            <div className="box">
                <p className='heading'>Thanks, {name}</p>
                <p className='message'>Your message has been sent.</p>
                <button className='close' onClick={() => closeModal()}>X</button>
            </div>
            
        </StyledElement>
    )
}

export default EmailModal
