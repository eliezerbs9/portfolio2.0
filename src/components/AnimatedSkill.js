import React from 'react'
import { motion } from 'framer-motion';
import styled from 'styled-components';

const StyledElement = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: fit-content;
    padding: 5px;
    letter-spacing: 2px;

    img{
        width: 70px;
        height: 70px;
    }

    &:hover{
        font-weight: bold;
    }

    @media screen and (max-width: 480px){
        gap: 10px;
        img{ width: 50px; height: 50px;}
    }
`;

const AnimatedSkill = ({imgUrl, name}) => {
    return (
        <StyledElement 
            animate={{
                y: ['3px', '-3px']
            }}
            transition={{
                y: {
                    duration: 1,
                    yoyo: Infinity,
                    ease: 'easeOut'
                }
            }}
            whileHover={{
                scale: 1.1,
                transition: {duration: 0.5}
            }}
        >
            <img src={imgUrl} alt={name} />
            <span>{name}</span>
        </StyledElement>
    )
}

export default AnimatedSkill
