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
        box-shadow: 0 0 10px var(--lightblue);
    }

    .img{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        min-width: 350px;
        img{width: 100%;}
    }

    .info{
        .name{
            font-size: 1.5rem;
            font-weight: bold;
            padding-bottom: 20px;
        }
        .text{
            max-height: 200px;
            overflow-y: scroll;
        }
        .links{
            list-style: none;
            display: flex;
            gap: 20px;
            a, a:visited{color: #e1e1e1}
            a:hover{color: var(--blue)}
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
