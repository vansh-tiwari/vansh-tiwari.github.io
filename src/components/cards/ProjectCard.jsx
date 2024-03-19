import Box from '@mui/material/Box';
import React from "react";
import { projectStyles } from "./styles";

const ProjectCard = ({ project, setOpenModal }) => {
  return (
    <Box sx={projectStyles.card} onClick={() => setOpenModal({ state: true, project: project })}>
    <Box sx={projectStyles.image}>
      <Box component="img" sx={projectStyles.image} src={project.image} />
    </Box>
    <Box sx={projectStyles.tags}>
      {project.tags?.map((tag, index) => (
        <Box sx={projectStyles.tag} key={index}>
          {tag}
        </Box>
      ))}
    </Box>
    <Box sx={projectStyles.details}>
      <Box sx={projectStyles.title}>{project.title}</Box>
      <Box sx={projectStyles.date}>{project.date}</Box>
      <Box sx={projectStyles.description}>{project.description}</Box>
    </Box>
    <Box sx={projectStyles.members}>
      {project.member?.map((member, index) => (
        <Box sx={projectStyles.avatar} key={index}>
          <Box sx={projectStyles.avatar} src={member.img} />
        </Box>
      ))}
    </Box>
  </Box>
  );
};

export default ProjectCard;
