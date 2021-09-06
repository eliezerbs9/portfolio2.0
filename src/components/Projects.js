import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import AnimatedContainer from './AnimatedContainer';
import ProjectCard from './ProjectCard';

const StyledElement = styled.div`
    h1{color: var(--lightblue)}
    
    .projects{
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
`;

const Projects = ({isMobile}) => {
    return (
        <AnimatedContainer isMobile={isMobile}>
            <StyledElement> 
                <h1>MY PROJECTS</h1>
                
                <div className="projects">
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>


            </StyledElement>
        </AnimatedContainer>
    )
}

export default Projects
