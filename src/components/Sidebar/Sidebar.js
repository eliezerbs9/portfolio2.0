import React, {useState} from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SidebarLinks from '../SidebarLinks';
import ArrowDown from '../ArrowDown';

const StyledSidebar = styled(motion.aside)`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(24,24,25,0.95);
    height: 100%;
    overflow: hidden;
    transition: all .5s ease;
    display: flex;
    flex-direction: column;
    z-index: 999;
    padding: 20px;
    gap: 50px;
    max-width: 300px;
    justify-content: space-between;

    .logo{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        img{ 
            transition: ease-in 0.25s;
            width: 100px; 
        }
        padding-bottom: 20px;
        border-bottom: 1px solid #e1e1e1;
    }

    .next{
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const Sidebar = () => {
    const [expanded, setExpanded] = useState(true)

    return (
        <StyledSidebar onHoverStart={() => setExpanded(true)} onHoverEnd={() => setExpanded(false)}>
            <div className="logo">
                <motion.img transition={{duration: 0.2, ease: 'ease-in'}} src={require('../../assets/logo.png').default} alt='logo'/>
            </div>

            <nav>
                <SidebarLinks expanded={expanded} />
            </nav>

            <div className="next">
                <ArrowDown />
            </div>
        </StyledSidebar>
    )
}

export default Sidebar
