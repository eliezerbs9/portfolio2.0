import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const StyledElement = styled(Link)`
    display: flex;
    gap: 20px;
    align-items: center;
    
    img {
        background-color: white;
        width: ${({expanded}) => expanded ? '40px' : '20px'};
        height: ${({expanded}) => expanded ? '40px' : '20px'};
        transition: ease-in 0.25s;
    }
    &, &:visited{color: white; text-decoration: none}

`;

const PageLink = ({imgUrl, name, url, expanded}) => {
    return (
        <StyledElement to={url} expanded={expanded}>
            <img src={imgUrl} alt={`${name} link.`} />
            {expanded && name}
        </StyledElement>
    )
}

export default PageLink
