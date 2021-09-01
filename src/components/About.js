import React from 'react';
import {motion} from 'framer-motion';
import styled from 'styled-components';
import {Container} from '../globalStyles';

const StyledElement = styled.div`
    .about{
        display: flex;
        gap: 10px;
        .info{
        }
        img{
            max-width: 250px;
        }
    }
`;

const About = () => {
    return (
        <StyledElement>
            <Container>
                <div className="about">
                    <div className="info">
                        <h1>Eliezer Barbosa</h1>
                        <p>Software Engeneer</p>
                        <br/>
                        <p>I'm a freelance web developer and I enjoy spending my time creating stuff on the web. </p>
                    </div>
                    <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Eliezer Barbosa profile picture" />
                </div>
                
                
            </Container>
        </StyledElement>
    )
}

export default About
