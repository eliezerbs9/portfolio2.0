import React, { useEffect, useRef } from 'react';
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
  max-height: 100%;
  overflow-y: auto;

  @media screen and (max-width: 480px){
      padding: 30px;
  }
`;

const AnimatedContainer = ({children, isMobile}) => {
    const container = useRef();

    useEffect(() => {
        if(isMobile){
            const navbar = document.getElementsByTagName('ASIDE')[0];
            const navbar_height = navbar.offsetHeight;
            if(container.current){
                console.log('container: ', container.current)
                container.current.style.marginTop = navbar_height+'px';
            }
        }

    }, [isMobile, container])

    return (
        <StyledElement ref={container}
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
