import React from 'react';
import {motion} from 'framer-motion';
import styled from 'styled-components';
import {Container} from '../globalStyles';
import AnimatedSkill from './AnimatedSkill';

const StyledElement = styled.div`
    h1{
        color: var(--lightblue);
        text-transform: uppercase;
        font-weight: 400;
    }
    .about{
        display: flex;
        gap: 10px;
        .info{
            letter-spacing: 2px;
            .job{font-style: italic; }
        }
        img{
            max-width: 250px;
        }
    }

    .skills{
        ul{
            padding: 30px;
            width: 100%;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            row-gap: 50px;
            list-style: none;

            li{
                display: flex;
                width: 100%;
                align-items: center;
                justify-content: center;
            }
        }
    }
`;

const skills = [
    {
        imgUrl: require('../assets/javascript.png').default,
        name: 'Javascript'
    },
    {
        imgUrl: require('../assets/react.png').default,
        name: 'React'
    },
    {
        imgUrl: require('../assets/firebase.png').default,
        name: 'Firebase'
    },
    {
        imgUrl: require('../assets/github.png').default,
        name: 'Github'
    },
    {
        imgUrl: require('../assets/nodejs.png').default,
        name: 'Node.js'
    },
    {
        imgUrl: require('../assets/html.png').default,
        name: 'HTML 5'
    },
    {
        imgUrl: require('../assets/css.png').default,
        name: 'CSS 3'
    },
    {
        imgUrl: require('../assets/googlemaps.png').default,
        name: 'Google Maps'
    },
]

const About = () => {
    return (
        <StyledElement>
                <div className="about">
                    <div className="info">
                        <h1>ABOUT ME</h1>
                        <p className='job'>Software Engeneer</p>
                        <br/>
                        <p>I'm a web developer and I enjoy spending my time creating stuff on the web. </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis labore, doloremque dolores nisi dicta voluptatibus est possimus quos quas odit officiis natus laborum consequatur. Dolorum doloremque itaque, ipsa tempore at voluptates consequuntur nesciunt quae voluptas officia? Voluptatem reprehenderit fuga iure.</p>
                    </div>
                    <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Eliezer Barbosa profile picture" />
                </div>

                <div className="skills">
                    <h1>Skills</h1>
                    <ul>
                        {skills.map((skill, index) => {
                            return (
                                <li key={index} >
                                    <AnimatedSkill imgUrl={skill.imgUrl} name={skill.name}/>
                                </li>
                            )
                        })}
                    </ul>
                </div>  
        </StyledElement>
    )
}

export default About
