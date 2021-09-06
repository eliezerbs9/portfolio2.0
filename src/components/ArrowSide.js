import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import styled from 'styled-components';
import {useLocation, useHistory} from 'react-router-dom'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const StyledElement = styled(motion.div)`
    cursor: pointer;
    width: fit-content;
    bottom: 0;
    z-index: 999;
    color: var(--lightblue);
    display: none;

    svg{
        font-size: 36px;
        color: #e1e1e1;
    }

    @media screen and (max-width: 1024px){
        display: block
    }

    @media screen and (max-width: 768px){
        svg{ font-size: 32px}
    }
`;

const ArrowSide = () => {
    const [nextPage, setNextPage] = useState(null)
    const location = useLocation();
    const history = useHistory();

    //all pages in order
    const pages = ['/', '/about', '/projects', '/contact'];

    useEffect(() => {
        const currentPage = location.pathname;
        const currentIndex = pages.indexOf(currentPage);
        const nextPage = pages[currentIndex + 1];

        if(nextPage){
            setNextPage(pages[currentIndex + 1]);
        }else{
            //return to homepage
            setNextPage(pages[0]);
        }
    }, [location])


    return (
        <StyledElement
            initial={{
                textShadow: 'none'
            }}
            animate={{
                x: ['3px', '-3px'],
                textShadow: ['0 0 10px', '0 0 15px']
            }}
            transition={{
                x: {
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
            <ArrowForwardIcon onClick={() => history.push(nextPage)}/>
        </StyledElement>
    )
}

export default ArrowSide
