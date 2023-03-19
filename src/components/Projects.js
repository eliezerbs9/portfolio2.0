import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import AnimatedContainer from "./AnimatedContainer";
import ProjectCard from "./ProjectCard";
import { settings } from "../contentfull/config";
import contentful from "contentful";

const StyledElement = styled.div`
  h1 {
    color: var(--lightblue);
  }

  .projects {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

const Projects = ({ isMobile }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const { url, spaceId, accessToken } = settings;
    fetch(
      `${url}/spaces/${spaceId}/environments/master/entries?access_token=${accessToken}`
    )
      .then((response) => response.json())
      .then((entries) => {
        const arr = [];
        const assets = entries.includes.Asset;
        const { items } = entries;
        items.forEach((item) => {
          const project = item.fields;
          const image = assets.find(
            (asset) => asset.sys.id === item.fields.image.sys.id
          );
          project.image = image.fields;
          arr.push(project);
        });
        setProjects(arr);
      });
  }, []);

  return (
    <AnimatedContainer isMobile={isMobile}>
      <StyledElement>
        <h1>MY PROJECTS</h1>

        <div className="projects">
          {!projects.length
            ? "Loading..."
            : projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  imgUrl={project.image.file.url}
                  imgDescription={project.image.description}
                  description={project.description}
                  name={project.title}
                  live={project.liveDemo}
                  github={project.github}
                />
              ))}
        </div>
      </StyledElement>
    </AnimatedContainer>
  );
};

export default Projects;
