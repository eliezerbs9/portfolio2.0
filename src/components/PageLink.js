import React, {useState, useEffect, useRef} from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import {AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';

const StyledElement = styled(motion.a)`
    display: flex;
    gap: 20px;
    letter-spacing: 2px;
    padding: 10px 15px;
    border-radius: 10px 10px 0px 0;
    position: relative;
    width: 100%;
  
    svg, span {
        color: inherit;
        font-size: 36px;
        font-weight: 200;
    }
    &, &:visited{color: #e1e1e1; text-decoration: none}

    .name{
        font-size: 1.3rem;
    }

    &:hover{
        text-shadow: 0 0 10px var(--lightblue);
        border-bottom: 2px solid var(--lightblue);
        background-color: rgba(255,255,255,0.07);
    }

    @media screen and (max-width: 1024px){
        flex-direction: column;
        gap: 5px;
        justify-content: center;
        align-items: center;

        .name{ font-size: 0.9rem;  }
    }

    @media screen and (max-width: 480px){
        svg, span{ font-size: 24px; }
    }
`;

const PageLink = ({icon, name, url, expanded, isMobile}) => {
    const [visible, setVisible] = useState(true);
    const history = useHistory();
    const location = useLocation();
    const ref = useRef();

    useEffect(() => {
        const element = ref.current;
        const pathname = location.pathname.substring(1);
        console.log('isMobile: ', isMobile)
        if(pathname.toLowerCase() === name.toLowerCase()){
            element.style.borderBottom = '2px solid var(--lightblue)';
            element.style.backgroundColor = 'rgba(255,255,255,0.07)';
            if(isMobile){
                element.childNodes[0].style.fontSize = '32px';
                element.scrollIntoView(true);
            }
            else{
                element.childNodes[0].style.fontSize = '36px';
            }
        }

        if((pathname.toLowerCase() === '') && (name.toLowerCase() === 'home')){
            element.style.borderBottom = '2px solid var(--lightblue)';
            element.style.backgroundColor = 'rgba(255,255,255,0.07)';
            if(isMobile){
                element.childNodes[0].style.fontSize = '32px';
                element.scrollIntoView(true);
            }else{
                element.childNodes[0].style.fontSize = '36px';
            }
        }

        return () => {
            element.style.backgroundColor = 'unset';
            element.style.borderBottom = 'none'
            if(isMobile){
                element.childNodes[0].style.fontSize = '24px'
            }
            else{
                element.childNodes[0].style.fontSize = '36px';
            }
        }
    }, [location, isMobile])

    return (
        <StyledElement href="#" ref={ref} expanded={expanded}   
            onClick={(e) => {
                e.preventDefault();
                history.push(url)
            }}
        >
            {icon}
            {(expanded || isMobile) && (
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
