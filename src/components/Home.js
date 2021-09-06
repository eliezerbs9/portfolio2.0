import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import SocialMediaLinks from './SocialMediaLinks';
import AnimatedContainer from './AnimatedContainer';

const HomeContainer = styled(AnimatedContainer)`
    align-self: center;
    ${AnimatedContainer}
`;

const StyledElement = styled(motion.div)`
    justify-self: center;
    align-self: center;
    margin: auto 0;
    .img{
        width: 150px;
        height: 150px;
        border-radius: 50%;
        border:2px solid #fff;
        background: url('https://image.shutterstock.com/image-photo/profile-picture-smiling-millennial-asian-260nw-1836020740.jpg') no-repeat;
        background-size: cover;
        -moz-box-shadow: 0px 6px 5px #ccc;
        -webkit-box-shadow: 0px 6px 5px #ccc;
        box-shadow: 0px 5px 3px #e1e1e1;
        margin-bottom: 50px;
    }

    .top{
        font-size: 1.5rem;
        text-transform: uppercase;
    }

    .name{
        font-size: 2rem;
        color: var(--lightblue);
        text-transform: uppercase;
        margin: 10px 0;
    }

    .bottom{
        font-size: 1.3rem;
        span{color: #4361EE}
    }
`;

const Home = ({isMobile}) => {
    return (
        <HomeContainer isMobile={isMobile}>
            <StyledElement>     
                <div  className='img'/>
                <motion.p className='top'>Hi There! I'M</motion.p>
                <p className='name'>Eliezer Barbosa</p>
                <p className='bottom'>A <span>Full Stack Developer</span> passionate about creating interactive applications and experiences on the web.</p>
                <motion.div className="animated-links"
                    initial={{x: '-100%'}}
                    animate={{x: 0}}
                    transition={{duration: 0.3}}>
                
                    <SocialMediaLinks />

                </motion.div>
            </StyledElement>
        </HomeContainer>
        
    )
}

export default Home
