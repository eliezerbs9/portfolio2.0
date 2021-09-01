import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const StyledElement = styled(Link)`
    display: flex;
    gap: 20px;
    align-items: flex-end;
    width: 100%;
    justify-content: ${({expanded}) => expanded ? 'flex-start' : 'center'};
    letter-spacing: 2px;
    padding-bottom: 5px;

    
    svg, span {
        color: inherit;
        font-size: ${({expanded}) => expanded ? '36px' : '36px'};
        font-weight: 200;
        align-self: ${({expanded}) => expanded ? 'flex-start' : 'center'};
        transition: font-size ease-in 0.1s;
    }
    &, &:visited{color: #e1e1e1; text-decoration: none}

    &:hover{
        /* color: var(--lightblue); */
        text-shadow: 0 0 10px var(--lightblue);
        border-bottom: 1px solid var(--lightblue);
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
