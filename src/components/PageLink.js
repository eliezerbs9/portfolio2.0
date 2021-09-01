import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const StyledElement = styled(Link)`
    display: flex;
    gap: 20px;
    align-items: center;
    width: 100%;
    justify-content: ${({expanded}) => expanded ? 'flex-start' : 'center'};

    
    svg, span {
        color: inherit;
        font-size: ${({expanded}) => expanded ? '36px' : '28px'};
        font-weight: 200;
        align-self: ${({expanded}) => expanded ? 'flex-start' : 'center'};
        transition: font-size ease-in 0.25s;
    }
    &, &:visited{color: white; text-decoration: none}

    &:hover{
        color: var(--lightblue);
    }
`;

const PageLink = ({icon, name, url, expanded}) => {
    return (
        <StyledElement to={url} expanded={expanded}>
            {icon}
            {expanded && name}
        </StyledElement>
    )
}

export default PageLink
