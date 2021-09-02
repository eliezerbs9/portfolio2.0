import React from 'react';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const StyledElement = styled(motion.a)`
    display: flex;
    gap: 20px;
    align-items: flex-end;
    width: 100%;
    justify-content: ${({expanded}) => expanded ? 'flex-start' : 'center'};
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
            {expanded && (
                <motion.span className='name'
                    initial={{
                        x: -20
                    }}
                    animate={{
                        x: 0
                    }}
                    transition= {{
                        duration: 0.25
                    }}
                >
                    {name}
                </motion.span>
            )}
        </StyledElement>
    )
}

export default PageLink
