import React, {useState} from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SidebarLinks from '../SidebarLinks';

const StyledSidebar = styled(motion.div)`
    padding: 20px;
    background-color: rgba(24,24,25,0.7);
    height: 100%;
    overflow: hidden;
    transition: ease-in 0.25s;
    display: flex;
    flex-direction: column;
    gap: 50px;

    .logo{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        img{ 
            transition: ease-in 0.25s;
            width: 50px; 
        }
    }

    &:hover{
        padding: 20px 40px;
        .logo img{width: 100px;}
    }
`;

const Sidebar = () => {
    const [expanded, setExpanded] = useState(false)

    return (
        <StyledSidebar onHoverStart={() => setExpanded(true)} onHoverEnd={() => setExpanded(false)}>
            <div className="logo">
                <motion.img transition={{duration: 0.2, ease: 'ease-in'}} src={require('../../assets/logo.png').default} alt='logo'/>
            </div>
            <SidebarLinks expanded={expanded} />
        </StyledSidebar>
    )
}

export default Sidebar
