import React from 'react';
import {AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';
import PageLink from './PageLink';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const StyledElement = styled(motion.div)`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 30px;
    align-items: flex-start;
    list-style: none;
    gap: 40px;
    color: #e1e1e1;

    li{width: 100%; display: flex; justify-content: center;}

    @media screen and (max-width: 1024px){
        flex-direction: row;
        padding: 0;
        width: 100%;
    }

    @media screen and (max-width: 480px){
        width: 100%;
        padding: 0 30px;
        overflow-x: scroll;
        &::-webkit-scrollbar {
            display: none;
        }
        
        &::-webkit-scrollbar-track {
            display: none;
        }
        
        &::-webkit-scrollbar-thumb {
            display: none;
        }
    }
`;

const AboutIcon = () => {
    return (
        <span class="material-icons">
            person_outline
        </span>
    )
}

const ProjectsIcon = () => {
    return (
        <span class="material-icons">
            devices
        </span>
    )
}

const links = [
    {
        icon: <HomeOutlinedIcon />,
        name: 'Home',
        url: '/'
    },
    {
        icon: <AboutIcon />,
        name: 'About',
        url: '/about'
    },
    {
        icon: <ProjectsIcon />,
        name: 'Projects',
        url: '/projects'
    },
    {
        icon: <MailOutlineIcon />,
        name: 'Contact',
        url: '/contact'
    }
]

const SidebarLinks = ({expanded, isMobile}) => {
    return (
        <StyledElement>
            {links.map((link, index) => {
                return (
                    <PageLink key={index} expanded={expanded} isMobile={isMobile} icon={link.icon} name={link.name} url={link.url}/>
                )
            })}
        </StyledElement>
    )
}

export default SidebarLinks
