import { CloseRounded, GitHub, LinkedIn } from "@mui/icons-material";
import { Modal, Box } from "@mui/material";
import React from "react";
import { darkTheme as theme} from "../../helper/themes";

const ProjectDetails = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;
  return (
    <Modal
      open={true}
      onClose={() => setOpenModal({ state: false, project: null })}
    >
      <Box sx={styles.container}>
        <Box sx={styles.wrapper}>
          <CloseRounded
            style={{
              position: "absolute",
              top: "10px",
              right: "20px",
              cursor: "pointer",
            }}
            onClick={() => setOpenModal({ state: false, project: null })}
          />
          <Box component='img' sx={styles.image} src={project?.image} />
          <Box sx={styles.title}>{project?.title}</Box>
          <Box sx={styles.date}>{project.date}</Box>
          <Box sx={styles.tags}>
            {project?.tags.map((tag) => (
              <Box sx={styles.tag}>{tag}</Box>
            ))}
          </Box>
          <Box sx={styles.desc}>{project?.description}</Box>
          {project.member && (
            <>
              <Box sx={styles.label}>Members</Box>
              <Box sx={styles.members}>
                {project?.member.map((member) => (
                  <Box sx={styles.member}>
                    <Box component='img' sx={styles.memberImage} src={member.img} />
                    <Box sx={styles.memberName}>{member.name}</Box>
                    <a
                      href={member.github}
                      target="new"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <GitHub />
                    </a>
                    <a
                      href={member.linkedin}
                      target="new"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <LinkedIn />
                    </a>
                  </Box>
                ))}
              </Box>
            </>
          )}
          <Box sx={styles.buttonGroup}>
           {project.github && <Box component='a' sx={styles.button} dull href={project?.github} target="new">
              View Code
            </Box>
            }
            {project.webapp && <Box component='a' sx={styles.button} href={project?.webapp} target="new">
              View Live App
            </Box>}
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export const styles = {
  container: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#000000a7',
    display: 'flex',
    alignItems: 'top',
    justifyContent: 'center',
    overflowY: 'scroll',
    transition: 'all 0.5s ease',
  },
  wrapper: {
    maxWidth: '500px',
    width: '100%',
    borderRadius: '16px',
    margin: '50px 12px',
    height: 'min-content',
    backgroundColor: theme.card,
    color: theme.text_primary,
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  title: {
    fontSize: { xs: '24px', md: '28px' },
    fontWeight: '600',
    color: theme.text_primary,
    margin: '8px 6px 0px 6px',
  },
  date: {
    fontSize: { xs: '10px', md: '16px' },
    margin: '2px 6px',
    fontWeight: '400',
    color: theme.text_secondary,
  },
  desc: {
    fontSize: { xs: '14px', md: '16px' },
    fontWeight: '400',
    color: theme.text_primary,
    margin: '8px 6px',
  },
  image: {
    width: '100%',
    height: '60%',
    objectFit: 'cover',
    borderRadius: '12px',
    marginTop: '30px',
    boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.3)',
  },
  label: {
    fontSize: { xs: '16px', md: '20px' },
    fontWeight: '600',
    color: theme.text_primary,
    margin: '8px 6px',
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '8px 0px',
  },
  tag: {
    fontSize: '14px',
    fontWeight: '400',
    color: theme.primary,
    margin: '4px',
    padding: '4px 8px',
    borderRadius: '8px',
    backgroundColor: theme.primary + 20,
  },
  members: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    flexWrap: 'wrap',
    margin: '12px 6px',
  },
  member: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  memberImage: {
    width: '50px',
    height: '50px',
    objectFit: 'cover',
    borderRadius: '50%',
    marginBottom: '4px',
    boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.3)',
  },
  memberName: {
    fontSize: '16px',
    fontWeight: '500',
    width: '200px',
    color: theme.text_primary,
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'flex-end',
    margin: '12px 0px',
    gap: '12px',
  },
  button: {
    width: '100%',
    textAlign: 'center',
    fontSize: '16px',
    fontWeight: '600',
    color: theme.text_primary,
    padding: '12px 16px',
    borderRadius: '8px',
    backgroundColor: theme.primary,
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all 0.5s ease',
    '&:hover': {
      backgroundColor: theme.primary + 99,
    },
  },
};

export default ProjectDetails;
