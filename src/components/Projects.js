import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import AnimatedContainer from './AnimatedContainer';

const StyledElement = styled.div`

`;

const Projects = () => {
    return (
        <AnimatedContainer>
            <StyledElement> 
                <h1>MY PROJECTS</h1>
            </StyledElement>
        </AnimatedContainer>
    )
}

export default Projects
