import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import AnimatedLink from './AnimatedLink';


const StyledElement = styled(motion.div)`
    width: 100%;
    padding: 20px 0;
    display: flex;
    justify-content: center;
    gap: 30px;

    @media screen and (max-width: 480px){
        padding: 5px 0;
    }
`;

const variants = {
    initial: {
        x: '-100%'
    },
    animate: {
        x: 0
    },
    exit: {
        x: '-100%'
    },
    transition: {
        duration: 0.25
    }
}


const links = [
    {
        imgUrl: require('../assets/github.png').default,
        name: "github",
        url:"https://github.com/eliezerbs9"
    },
    {
        imgUrl: require('../assets/linkedin.png').default,
        name: 'linkedin',
        url:'https://www.linkedin.com/in/eliezer-barbosa-da-silva-b7a7551a4/'
    }
]


const SocialMediaLinks = () => {
    return (
        <StyledElement variants={variants} initial="initial" animate="animate" exit="exit">
            {links.map((link, index) => {
                return <AnimatedLink key={index} imgUrl={link.imgUrl} name={link.name} url={link.url}/>
            })}
        </StyledElement>
    )
}

export default SocialMediaLinks
