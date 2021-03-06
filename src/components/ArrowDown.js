import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import styled from 'styled-components';
import {useLocation, useHistory} from 'react-router-dom'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const StyledElement = styled(motion.div)`
    cursor: pointer;
    width: fit-content;
    bottom: 0;
    z-index: 999;
    color: var(--lightblue);

    svg{
        font-size: 64px;
        color: #e1e1e1;
    }

    &:hover{
        border-bottom: 1px solid var(--lightblue)
    }

    @media screen and (max-width: 1024px){
        display: none;
    }
`;

const ArrowDown = () => {
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
            animate={{
                y: ['3px', '-3px'],
                textShadow: ['0 0 10px', '0 0 15px']
            }}
            transition={{
                y: {
                    duration: 1,
                    repeatType: 'reverse',
                    repeat: Infinity,
                    ease: 'easeOut'
                },
            }}
        >
            <ArrowDownwardIcon onClick={() => history.push(nextPage)}/>
        </StyledElement>
    )
}

export default ArrowDown
