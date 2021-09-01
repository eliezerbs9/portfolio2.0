import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import SocialMediaLinks from './SocialMediaLinks';

const StyledElement = styled(motion.div)`
    padding: 60px 40px;
    background-color: rgba(0,0,0,0.7);
    max-width: 800px;

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
        color: #4CC9F0;
        text-transform: uppercase;
        margin: 10px 0;
    }

    .bottom{
        font-size: 1.3rem;
        span{color: #4361EE}
    }
`;

const links = [
    {
        imgUrl: 'https://w7.pngwing.com/pngs/646/324/png-transparent-github-computer-icons-github-logo-monochrome-head-thumbnail.png',
        name: "gitbub",
        url:"#"
    },
    {
        imgUrl: 'https://www.iconpacks.net/icons/1/free-linkedin-icon-112-thumb.png',
        name: 'linkedin',
        url:'#'
    }
]

const Home = () => {
    return (
        <StyledElement>
            <div  className='img'/>
            <motion.p className='top'>Hi There! I'M</motion.p>
            <p className='name'>Eliezer Barbosa</p>
            <p className='bottom'>A Full Stack Developer passionate about creating interactive applications and experiences on the web.</p>
            <motion.div className="animated-links"
                initial={{x: '-100%'}}
                animate={{x: 0}}
                transition={{duration: 0.3}}>
               
                <SocialMediaLinks links={links}/>

            </motion.div>
        </StyledElement>
    )
}

export default Home
