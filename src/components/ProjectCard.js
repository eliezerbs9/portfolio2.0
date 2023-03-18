import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const StyledElement = styled(motion.div)`
  padding: 20px;
  min-height: 100px;
  width: 100%;
  display: flex;
  gap: 20px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  &:hover {
    box-shadow: 0 0 5px var(--lightblue);
    .text {
      box-shadow: 0 0 5px #e1e1e1;
    }
  }

  .img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 550px;
    object-fit: fill;
    img {
      width: inherit;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    .name {
      font-size: 1.5rem;
      font-weight: bold;
    }
    .text {
      padding: 5px 10px;
      height: 100%;
      max-height: 200px;
      overflow-y: scroll;
      background-color: transparent;
      border-radius: 10px;
    }
    .links {
      list-style: none;
      display: flex;
      gap: 20px;
      a,
      a:visited {
        color: #e1e1e1;
        text-decoration: none;
        font-weight: bold;
      }
      a:hover {
        color: var(--blue);
      }

      li {
        display: flex;
        gap: 10px;
        align-items: center;
        padding: 5px 0;
      }
      .live {
        border-radius: 50%;
        width: 10px;
        height: 10px;
        background-color: red;
      }
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    .img {
      min-width: unset;
      width: auto;
      img {
        height: 150px;
      }
    }

    .info {
      .name {
        font-size: 1.3rem;
      }
      .text {
        font-size: 0.9rem;
      }
    }
  }
`;

const ProjectCard = ({
  imgUrl,
  imgDescription,
  name,
  description,
  github,
  live,
}) => {
  return (
    <StyledElement
      initial={{
        x: "-100%",
      }}
      animate={{
        x: 0,
      }}
      transition={{
        duration: 0.25,
      }}
    >
      <div className="img">
        <img src={imgUrl} alt={imgDescription} />
      </div>
      <div className="info">
        <p className="name">{name}</p>
        <div className="text">
          <p>{description}</p>
        </div>
        <ul className="links">
          <li>
            <motion.div
              className="live"
              animate={{
                scale: [1, 1.5],
              }}
              transition={{
                duration: 0.7,
                repeatType: "reverse",
                repeat: Infinity,
                ease: "easeOut",
              }}
            ></motion.div>
            <a href={live}>Live Demo</a>
          </li>
          <li>
            <a href={github}>Github</a>
          </li>
        </ul>
      </div>
    </StyledElement>
  );
};

export default ProjectCard;
