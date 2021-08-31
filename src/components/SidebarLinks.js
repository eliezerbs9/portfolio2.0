import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import PageLink from './PageLink';

const StyledElement = styled(motion.ul)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    list-style: none;
    gap: 20px;
`;

const links = [
    {
        imgUrl: 'https://image.flaticon.com/icons/png/512/25/25694.png',
        name: 'Home',
        url: '/'
    },
    {
        imgUrl: 'https://e7.pngegg.com/pngimages/213/478/png-clipart-computer-icons-scalable-graphics-font-conference-for-management-accounting-research-about-icon-text-computer-program.png',
        name: 'About',
        url: '/about'
    }
]

const SidebarLinks = ({expanded}) => {
    return (
        <StyledElement>
            {links.map((link, index) => {
                return (
                    <li key={index}>
                        <PageLink expanded={expanded} imgUrl={link.imgUrl} name={link.name} url={link.url}/>
                    </li>
                )
            })}
        </StyledElement>
    )
}

export default SidebarLinks
