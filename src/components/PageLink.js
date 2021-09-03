import React from 'react';
import { useHistory } from 'react-router-dom';
import {AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';

const StyledElement = styled(motion.a)`
    display: flex;
    gap: 20px;
    /* align-items: flex-end; */
    width: fit-content;
    /* justify-content: ${({expanded}) => expanded ? 'center' : 'center'}; */
    /* justify-content: center; */
    letter-spacing: 2px;
    padding-bottom: 5px;
    position: relative;

    
    svg, span {
        color: inherit;
        font-size: ${({expanded}) => expanded ? '36px' : '36px'};
        font-weight: 200;
        transition: font-size ease-in 0.1s;
    }
    &, &:visited{color: #e1e1e1; text-decoration: none}

    .name{
        font-size: 1.3rem;
    }

    &:hover{
        /* color: var(--lightblue); */
        text-shadow: 0 0 10px var(--lightblue);
        border-bottom: 1px solid var(--lightblue);
    }
`;

const PageLink = ({icon, name, url, expanded}) => {
    const history = useHistory()

    return (
        <StyledElement href="#" expanded={expanded}
            onClick={(e) => {
                e.preventDefault();
                history.push(url)
            }}
        >
            {icon}
            <AnimatePresence exitBeforeEnter>
                {expanded && (
                    <motion.span className='name'
                        initial={{
                            x: -20,
                            opacity: 0
                        }}
                        animate={{
                            x: 0,
                            opacity: 1
                        }}
                        exit={{
                            x: -20,
                            opacity: 0
                        }}
                        transition= {{
                            duration: 0.25
                        }}
                    >
                        {name}
                    </motion.span>
                )}
            </AnimatePresence>  

        </StyledElement>
    )
}

export default PageLink
