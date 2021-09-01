import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import PageLink from './PageLink';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const StyledElement = styled(motion.ul)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 50px;
    list-style: none;
    gap: 40px;
    color: #e1e1e1;

    li{width: 100%; display: flex; justify-content: center;}
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

const SidebarLinks = ({expanded}) => {
    return (
        <StyledElement>
            {links.map((link, index) => {
                return (
                    <li key={index}>
                        <PageLink expanded={expanded} icon={link.icon} name={link.name} url={link.url}/>
                    </li>
                )
            })}
        </StyledElement>
    )
}

export default SidebarLinks
