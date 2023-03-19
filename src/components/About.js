import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Container } from "../globalStyles";
import AnimatedSkill from "./AnimatedSkill";
import AnimatedContainer from "./AnimatedContainer";

const StyledElement = styled.div`
  h1 {
    color: var(--lightblue);
    text-transform: uppercase;
    font-weight: 400;
  }
  .about {
    display: flex;
    gap: 10px;
    .info {
      margin-right: 15px;
      letter-spacing: 2px;
      .name {
        font-size: 1rem;
      }
      .job {
        font-style: italic;
        font-size: 0.9rem;
      }
    }
    img {
      max-width: 250px;
    }
  }

  .skills {
    ul {
      padding: 30px;
      width: 100%;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      row-gap: 50px;
      list-style: none;

      li {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .about {
      flex-direction: column-reverse;
      img {
        max-width: auto;
      }
    }

    .skills {
      margin-top: 20px;
      ul {
        grid-template-columns: repeat(3, 1fr);
        padding: 10px;
        row-gap: 30px;
      }
    }
  }
`;

const skills = [
  {
    imgUrl: require("../assets/javascript.png").default,
    name: "Javascript",
  },
  {
    imgUrl: require("../assets/react.png").default,
    name: "React",
  },
  {
    imgUrl: require("../assets/firebase.png").default,
    name: "Firebase",
  },
  {
    imgUrl: require("../assets/github.png").default,
    name: "Github",
  },
  {
    imgUrl: require("../assets/nodejs.png").default,
    name: "Node.js",
  },
  {
    imgUrl: require("../assets/html.png").default,
    name: "HTML 5",
  },
  {
    imgUrl: require("../assets/css.png").default,
    name: "CSS 3",
  },
  {
    imgUrl: require("../assets/googlemaps.png").default,
    name: "Google Maps",
  },
];

const profile = require("../assets/profile-about.png").default;

const About = ({ isMobile }) => {
  return (
    <AnimatedContainer isMobile={isMobile}>
      <StyledElement>
        <div className="about">
          <div className="info">
            <h1>ABOUT ME</h1>
            {isMobile && (
              <img src={profile} alt="Eliezer Barbosa profile picture" />
            )}
            <p className="name">Eliezer Barbosa</p>
            <p className="job">Software Engineer</p>
            <br />
            <p>
              I create pages and apps that are both user-friendly and reliable.
              I am extremely passionate about my work, and always strive to
              provide the best possible experience for my clients.
            </p>
            <br />
            <p>
              I am a specialist on web developing ground and got a profound
              knowledge of doing anything related to this plataform. Also, I
              have got an impressive urgency of learning and gaining new skills
              and knowledge with total ease. I am skillful at programming and
              coding languages and other skills given bellow.
            </p>
          </div>
          {!isMobile && (
            <img src={profile} alt="Eliezer Barbosa profile picture" />
          )}
        </div>

        <div className="skills">
          <h1>Skills</h1>
          <ul>
            {skills.map((skill, index) => {
              return (
                <li key={index}>
                  <AnimatedSkill imgUrl={skill.imgUrl} name={skill.name} />
                </li>
              );
            })}
          </ul>
        </div>
      </StyledElement>
    </AnimatedContainer>
  );
};

export default About;
