import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import SidebarLinks from "../SidebarLinks";
import ArrowDown from "../ArrowDown";
import ArrowSide from "../ArrowSide";

const StyledSidebar = styled(motion.aside)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(24, 24, 25, 0.95);
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  z-index: 999;
  padding: 20px;
  gap: 50px;
  justify-content: space-between;
  max-width: 300px;

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    img {
      transition: ease-in 0.25s;
      width: 100px;
    }
    padding-bottom: 20px;
    border-bottom: 1px solid #e1e1e1;
  }

  .next {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 1024px) {
    bottom: unset;
    right: 0;
    height: fit-content;
    flex-direction: row;
    align-items: center;
    padding: 20px;

    .logo {
      height: fit-content;
      border-bottom: none;
      border-right: 1px solid #e1e1e1;
      padding: 0;
      width: 100%;
    }

    .next {
      width: 100%;
    }
  }

  @media screen and (max-width: 480px) {
    gap: 5px;
    padding: 5px;
    .logo {
      width: fit-content;
      padding: 0 10px;
      img {
        width: 70px;
      }
    }
    .next {
      width: fit-content;
      padding: 0 10px;
    }
  }
`;

const Sidebar = ({ isMobile }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <StyledSidebar
      onHoverStart={() => !isMobile && setExpanded(true)}
      onHoverEnd={() => !isMobile && setExpanded(false)}
      initial={{
        width: expanded ? "100%" : "auto",
      }}
      animate={{
        width: expanded ? "100%" : "auto",
      }}
      transition={{
        duration: 0.5,
      }}
    >
      <div className="logo">
        <motion.img
          transition={{ duration: 0.2, ease: "ease-in" }}
          src={require("../../assets/logo.png").default}
          alt="logo"
        />
      </div>

      <SidebarLinks expanded={expanded} isMobile={isMobile} />

      <div className="next">
        <ArrowDown />
        <ArrowSide />
      </div>
    </StyledSidebar>
  );
};

export default Sidebar;
