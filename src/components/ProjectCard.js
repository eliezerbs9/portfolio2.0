import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledElement = styled(motion.div)`
    padding: 20px;
    min-height: 100px;
    width: 100%;
    display: flex;
    gap: 20px;
    border-radius: 10px;
    background-color: rgba(0,0,0,.5);
    &:hover{
        box-shadow: 0 0 5px var(--lightblue);
        .text{
            box-shadow: 0 0 5px #e1e1e1;
        }
    }

    .img{
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 350px;
        img{width: 100%;}
    }

    .info{
        display: flex;
        flex-direction: column;
        gap: 20px;
        .name{
            font-size: 1.5rem;
            font-weight: bold;
        }
        .text{
            padding: 5px 10px;
            max-height: 200px;
            overflow-y: scroll;
            background-color: transparent;
            border-radius: 10px;
        }
        .links{
            list-style: none;
            display: flex;
            gap: 20px;
            a, a:visited{color: #e1e1e1; text-decoration: none; font-weight: bold}
            a:hover{color: var(--blue)}

            li{
                display: flex;
                gap: 10px;
                align-items: center;
                padding: 5px 0;
            }
            .live{
                border-radius: 50%;
                width: 10px;
                height: 10px;
                background-color: red;
            }
        }
    }

    @media screen and (max-width: 768px){
        flex-direction: column;
        gap: 10px;
        padding: 10px;
        .img{ 
            min-width: unset; 
            img{ height: 150px; }
        }

        .info{ 
            .name{ font-size: 1.3rem; }
            .text{ font-size: 0.9rem; }
        }
    }
`;


const ProjectCard = () => {
    return (
        <StyledElement
            initial={{
                x: '-100%'
            }}
            animate={{
                x: 0
            }}
            transition={{
                duration: 0.25
            }}
        >
            <div className="img">
                <img src="https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616__480.jpg" alt='project'/>
            </div>
            <div className="info">
                <p className="name">Project Name</p>
                <div className="text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde architecto ea enim corporis ducimus voluptates quaerat omnis sed, nisi tempore saepe quia deserunt fuga aliquid corrupti aspernatur quam nesciunt itaque voluptatem? Perferendis et, doloribus vel neque porro voluptate illo, minus sint esse sequi asperiores. Ab sit nam illum saepe blanditiis placeat fuga modi perferendis vel porro in nisi laudantium officia reiciendis, consequatur quae sapiente voluptates doloremque. Nesciunt voluptate possimus debitis consequuntur sint nemo culpa qui numquam corporis provident enim esse quisquam vitae hic accusantium dolor assumenda cum magni reprehenderit, quo nostrum necessitatibus pariatur? Minus perspiciatis vitae unde enim aliquid quis.</p>
                </div>
                <ul className="links">
                    <li>
                        <motion.div className="live"
                            animate={{
                                scale: [1, 1.5]
                            }}
                            transition={{
                                duration: 0.7,
                                yoyo: Infinity,
                            }}
                        ></motion.div>
                        <a href="#">Live Demo</a>
                    </li>
                    <li>
                        <a href="#">Github</a>
                    </li>
                </ul>
            </div>
            
        </StyledElement>
    )
}

export default ProjectCard
