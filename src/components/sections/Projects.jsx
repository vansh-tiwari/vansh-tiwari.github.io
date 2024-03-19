import React from "react";
import Box from '@mui/material/Box';
import { darkTheme as theme} from "../../helper/themes";
import { projects } from "../../data/constants";
import ProjectCard from "../cards/ProjectCard";

const Projects = ({ openModal, setOpenModal }) => {
  return (
    <Box sx={styles.container} id="Projects">
      <Box sx={styles.wrapper}>
        <Box sx={styles.title}>Projects</Box>
        <Box sx={styles.desc}>
          I have worked on a wide range of projects. From web apps to android
          apps. Here are some of my projects.
        </Box>
        <Box sx={styles.cardContainer}>
          {projects.map((project, index) => (
              <ProjectCard
                key={`project-${index}`}
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </Box>
      </Box>
    </Box>
  );
};

export const styles = {
  container: {
    marginTop: '100px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 1,
    padding: '0 16px',
    alignItems: 'center',
  },
  wrapper: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '1100px',
    gap: '12px',
  },
  title: {
    fontSize: { xs: '32px', md: '52px' },
    textAlign: 'center',
    fontWeight: '600',
    marginTop: { xs: '12px', md: '20px' },
    color: theme.text_primary,
  },
  desc: {
    fontSize: { xs: '16px', md: '18px' },
    textAlign: 'center',
    fontWeight: '600',
    color: theme.text_secondary,
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '28px',
    flexWrap: 'wrap',
  },
};

export default Projects;
