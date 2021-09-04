import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledElement = styled(motion.div)`
  background-color: rgb(255,255,255, 0.07);
  padding: 60px;
  width: 1024px;
  overflow-y: auto;
  height: fit-content;
  margin: auto;
  border-radius: 10px;
`;

const AnimatedContainer = ({children}) => {
    return (
        <StyledElement
            initial={{
                y: '100%',
                opacity: 0
            }}
            animate={{
                y: 0,
                opacity: 1
            }}
            exit={{
                y: '-100%',
                opacity: 0
            }}
            transition={{
                duration: 0.35
            }}
        >
            {children}
        </StyledElement>
    )
}

export default AnimatedContainer
