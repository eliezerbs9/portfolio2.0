import React from 'react';
import {motion} from 'framer-motion';
import styled from 'styled-components';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const StyledElement = styled(motion.div)`
    cursor: pointer;
    width: fit-content;
    bottom: 0;
    z-index: 999;
    color: var(--lightblue);

    &:hover{
        border-bottom: 1px solid var(--lightblue)
    }
`;

const ArrowDown = () => {
    return (
        <StyledElement
            initial={{
                textShadow: 'none'
            }}
            animate={{
                y: ['3px', '-3px'],
                textShadow: ['0 0 10px', '0 0 15px']
            }}
            transition={{
                y: {
                    duration: 1,
                    yoyo: Infinity,
                    ease: 'easeOut'
                },
                textShadow: {
                    duration: 1,
                    yoyo: Infinity,
                    ease: 'easeOut'
                }
            }}
        >
            <ArrowDownwardIcon style={{fontSize: '64px', color: '#e1e1e1'}}/>
        </StyledElement>
    )
}

export default ArrowDown
