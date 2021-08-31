import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const StyledElement = styled(motion.a)`
    display: flex;
    flex-direction: column;
    width: fit-content;
    font-size: 0.9rem;
    gap: 5px;
    &, &:visited{
        color: inherit;
        text-decoration: none;
    }

    img{ width: 40px; height: 40px }

`;

const variants = {
    animate: {
        y: ['3px', '-3px']
    }
};

const AnimatedLink = ({imgUrl, name, url}) => {
    return (
        <StyledElement href={url} 
        variants={variants} 
        animate="animate"  
        whileHover={{
            scale: 1.1,
            transition: { duration: 0.2 }
        }} 
        transition={{
            y: {
                duration: 1,
                yoyo: Infinity,
                ease: 'easeOut'
            }
        }}>
            <motion.img src={imgUrl} alt={name} />
            {name}
        </StyledElement>
    )
}

export default AnimatedLink
