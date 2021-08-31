import styled, {createGlobalStyle} from 'styled-components';
import {Link} from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
    :root{
        --grey: #4F595A;
        --green: #048E6B;
        --yellow: #FCC55B;
        --red: #FF0606;
        --lightgrey: #F1F1F1;
        --lightblue: #1AD9EA;
        --lightgreen: #00CA97;
        --darkred: #930B0B;
        --darkblue: #004D54;
        --darkgreen: #004B38;
        --bluegreen: #036A73;
        --text-lightgrey: #EBEBEB;
        --white: #FFFFFF;
        --white1: #FFFAFA;
    }
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        scroll-behavior: smooth;
    }
    html{
        height: 100%;
    }
    body{
        font-family: 'Roboto', sans-serif;
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

export const Container = styled.div`
    z-index: 1;
    width: 100%;
    height: 100%;
    max-width: 1440px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 60px;
    padding-left: 60px;
    position: relative;

    @media screen and (max-width: 768px){
        padding-right: 30px;
        padding-left: 30px;
    }
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