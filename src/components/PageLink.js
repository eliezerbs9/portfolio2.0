import React, {useEffect, useRef} from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import {AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';

const StyledElement = styled(motion.a)`
    display: flex;
    gap: 20px;
    letter-spacing: 2px;
    padding-bottom: 5px;
    position: relative;
    width: 100%;
  
    svg, span {
        color: inherit;
        font-size: ${({expanded}) => expanded ? '36px' : '36px'};
        font-weight: 200;
    }
    &, &:visited{color: #e1e1e1; text-decoration: none}

    .name{
        font-size: 1.3rem;
    }

    &:hover{
        text-shadow: 0 0 10px var(--lightblue);
        border-bottom: 2px solid var(--lightblue);
    }
`;

const PageLink = ({icon, name, url, expanded}) => {
    const history = useHistory();
    const location = useLocation();
    const ref = useRef();

    useEffect(() => {
        const element = ref.current;
        const pathname = location.pathname.substring(1);
        if(pathname.toLowerCase() === name.toLowerCase()){
            element.style.borderBottom = '2px solid var(--lightblue)'
        }

        if((pathname.toLowerCase() === '') && (name.toLowerCase() === 'home')){
            element.style.borderBottom = '2px solid var(--lightblue)';
        }

        return () => {
            element.style.borderBottom = 'none'
        }
    }, [location])

    return (
        <StyledElement href="#" ref={ref} expanded={expanded}
            onClick={(e) => {
                e.preventDefault();
                history.push(url)
            }}
        >
            {icon}
            {expanded && (
                <motion.span className='name'
                    initial={{
                        x: -20,
                        opacity: 0
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
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

        </StyledElement>
    )
}

export default PageLink
