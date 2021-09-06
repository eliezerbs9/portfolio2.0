import styled, {createGlobalStyle} from 'styled-components';
import { motion } from 'framer-motion';
import {Link} from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
    :root{
        --lightblue: #4CC9F0;
        --blue: #4361EE;
    }
    *{
        margin: 0;
        padding: 0;
        scroll-behavior: smooth;
        box-sizing:border-box; 
    }
    html{
        height: 100%;
    }
    body{
        font-family: 'Prompt', sans-serif;
        font-weight: 300;
        color: #e1e1e1;
        background-color: black;
        letter-spacing: 1.5px;
    }
    *::-webkit-scrollbar {
        width: 7px;
    }
    
    *::-webkit-scrollbar-track {
        background-color: #e4e4e4;
        border-radius: 100px;
    }
    
    *::-webkit-scrollbar-thumb {
        background-color: grey;
        border-radius: 100px;
    }

    @media screen and (max-width: 480px){
        h1{font-size: 1.5rem;}
        *::-webkit-scrollbar {
            width: 7px;
            height: 3px;
        }
        
        *::-webkit-scrollbar-track {
            background-color: #e4e4e4;
            border-radius: 100px;
        }
        
        *::-webkit-scrollbar-thumb {
            background-color: grey;
            border-radius: 100px;
        }
    
    }
    
`;

export const Section = styled.section`
    padding: 60px 0;
    width: 100%;

    @media screen and (max-width: 778px){
        padding-top: 30px;
        padding-bottom: 30px;
    }
`;

export const Container = styled(motion.div)`
  background-color: rgba(24,24,25,0.6);
  padding: 60px;
  width: 1024px;
  overflow-y: auto;
  height: fit-content;
`;

export const StyledLink = styled(Link)`
    background: ${({bgcolor}) => (bgcolor) ? `var(--${bgcolor})` : `var(--yellow)`};
    border: none;
    padding: 10px 20px;
    text-transform: uppercase;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;

    &:hover{
        background: ${({hovercolor}) => (hovercolor) ? `var(--${hovercolor})` : `var(--lightblue)`};
    }

    &, &:visited{
        color: white;
        text-decoration: none;
    }
`;

export const SectionHeading = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 30px;
    color: ${({color}) => (color) && `var(--${color})`};

    @media screen and (max-width: 768px){
        font-size: 2rem;
        margin-bottom: 20px;
    }
    @media screen and (max-width: 480px){
        font-size: 1.7rem;
    }
`;

export const SubHeading = styled.h2`
    font-size: 1.8rem;
    margin-bottom: 20px;
    color: ${({color}) => (color) && `var(--${color})`};

    /* @media screen and (max-width: 768px){
        font-size: 2rem;
    } */

    @media screen and (max-width: 768px){
        font-size: 1.5rem;
        margin-bottom: 10px;
    }
`;

export const Article = styled.article`
    margin-top: 20px;
    line-height: 26px;
    h1{font-size:1.5rem; padding: 0!important; } 
    p{line-height: 26px;}
    a, a:visited{color: blue};
`;

export default GlobalStyle;