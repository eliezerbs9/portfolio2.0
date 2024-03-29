import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import SocialMediaLinks from "./SocialMediaLinks";
import AnimatedContainer from "./AnimatedContainer";

const HomeContainer = styled(AnimatedContainer)`
  align-self: center;
  ${AnimatedContainer}
`;

const StyledElement = styled(motion.div)`
  justify-self: center;
  align-self: center;
  margin: auto 0;
  .img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 2px solid #fff;
    background: url("${require("../assets/profile-1.png").default}") no-repeat;
    background-size: cover;
    background-color: rgba(0, 0, 0, 0.6);
    -moz-box-shadow: 0px 6px 5px #ccc;
    -webkit-box-shadow: 0px 6px 5px #ccc;
    box-shadow: 0px 5px 3px #e1e1e1;
    margin-bottom: 50px;
  }

  .top {
    font-size: 1.5rem;
    text-transform: uppercase;
  }

  .name {
    font-size: 2rem;
    color: var(--lightblue);
    text-transform: uppercase;
    margin: 10px 0;
  }

  .bottom {
    font-size: 1.3rem;
    span {
      font-weight: bold;
      color: #4361ee;
    }
  }

  @media screen and (max-width: 480px) {
    .img {
      margin-bottom: 20px;
    }
    .top {
      font-size: 1.3rem;
    }
    .name {
      font-size: 1.5rem;
    }
    .bottom {
      font-size: 1rem;
    }
  }
`;

const Home = ({ isMobile }) => {
  return (
    <HomeContainer isMobile={isMobile}>
      <StyledElement>
        <div className="img" />
        <motion.p className="top">Hi There! I'M</motion.p>
        <p className="name">Eliezer Barbosa</p>
        <h1 className="bottom">
          A creative <span>Freelance & Full Stack Web Developer</span>{" "}
          passionate about creating interactive applications and experiences on
          the web.
        </h1>
        <motion.div
          className="animated-links"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <SocialMediaLinks />
        </motion.div>
      </StyledElement>
    </HomeContainer>
  );
};

export default Home;
