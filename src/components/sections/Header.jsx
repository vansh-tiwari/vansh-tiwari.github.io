import React from "react";
import { Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";
import Animation from "../animation";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
} from "../../helper/motion";
import StarCanvas from "../canvas/Stars";
import Box from '@mui/material/Box';
import { darkTheme as theme} from "../../helper/themes";

const Header = () => {
  const profileImg = "https://iili.io/JXa5x1e.png";
  return (
    <Box id="About">
      <Box sx={styles.container}>
        <Box sx={styles.background}>
          <StarCanvas />
          <Animation />
        </Box>

        <motion.div {...headContainerAnimation}>
          <Box sx={styles.innerContainer}>
            <Box sx={styles.leftContainer}>
              <motion.div {...headTextAnimation}>
                <Box sx={styles.title}>
                  {Bio.name}
                </Box>
                <Box sx={styles.textLoop}>
                  <Box sx={{...styles.span, display: {xs: 'none', md: 'block'}}}>I am a</Box>
                  <Box sx={styles.span}>
                    <Typewriter
                      options={{
                        strings: Bio.roles,
                        autoStart: true,
                        loop: true,
                        cursor: '|',
                        delay: '50',
                        deleteSpeed: '10'
                      }}
                    />
                  </Box>
                </Box>
              </motion.div>

              <motion.div {...headContentAnimation}>
                <Box sx={styles.subTitle}>{Bio.description}</Box>
              </motion.div>

              <Box component='a' sx={styles.resumeButton} href={Bio.resume} target="_blank">
                Check Resume
              </Box>
            </Box>
            <Box sx={styles.rightContainer}>
              <motion.div {...headContentAnimation}>
                <Tilt>
                  <Box component='img' sx={styles.img} src={profileImg} alt="Vansh Tiwari" />
                </Tilt>
              </motion.div>
            </Box>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    padding: { xs: '32px 16px', sm: '66px 16px', md: '80px 30px' },
    zIndex: 1,
  },
  innerContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1100px',
    flexDirection: { xs: 'column', sm: 'column', md: 'row' },
  },
  leftContainer: {
    width: '100%',
    order: { xs: 2, sm: 2, md: 1 },
    marginBottom: { xs: '30px', sm: '30px', md: 0 },
    display: 'flex',
    gap: '6px',
    flexDirection: 'column',
    alignItems: {xs: 'center', md: 'flex-start'},
  },
  rightContainer: {
    width: '100%',
    order: 1,
    display: 'flex',
    justifyContent: {xs: 'center', md: 'flex-end'},
    marginBottom: { xs: '30px', sm: '30px', md: '80px' },
  },
  title: {
    fontWeight: 700,
    fontSize: { xs: '40px', sm: '40px', md: '50px' },
    color: theme.text_primary,
    lineHeight: { xs: '48px', sm: '48px', md: '68px' },
    textAlign: { xs: 'center', sm: 'center', md: 'left' },
    marginBottom: { xs: '8px', sm: '8px', md: '0' },
  },
  textLoop: {
    fontWeight: 600,
    fontSize: { xs: '22px', sm: '22px', md: '32px' },
    display: 'flex',
    justifyContent: {xs: 'center', sm: 'center', md: 'left'},
    gap: '12px',
    color: theme.text_primary,
    lineHeight: { xs: '48px', sm: '48px', md: '68px' },
    textAlign: { xs: 'center', sm: 'center', md: 'left' },
    marginBottom: { xs: '16px', sm: '16px', md: '0' },
  },
  span: {
    cursor: 'pointer',
    color: theme.primary,
  },
  subTitle: {
    fontSize: { xs: '16px', sm: '16px', md: '20px' },
    lineHeight: { xs: '32px', sm: '32px', md: '32px' },
    marginBottom: { xs: '16px', sm: '16px', md: '42px' },
    color: theme.text_primary + 95,
    textAlign: { xs: 'center', sm: 'center', md: 'left' },
  },
  resumeButton: {
    width: '95%',
    maxWidth: '300px',
    textAlign: 'center',
    padding: { xs: '12px 0', sm: '12px 0', md: '16px 0' },
    borderRadius: '50px',
    fontWeight: 600,
    fontSize: { xs: '18px', sm: '18px', md: '20px' },
    color: 'white',
    textDecoration: 'none',
    backgroundColor: theme.secondary,
    backgroundImage: `linear-gradient(225deg, ${theme.primary} 0%, ${theme.secondary} 100%)`,
    boxShadow: '20px 20px 60px #1f2634, -20px -20px 60px #1f2634',
    transition: 'all 0.4s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '20px 20px 60px #1F2634',
      filter: 'brightness(1)',
    },
  },
  img: {
    borderRadius: '50%',
    width: '100%',
    height: '100%',
    maxWidth: { xs: '280px', sm: '280px', md: '400px' },
    maxHeight: { xs: '280px', sm: '280px', md: '400px' },
    border: `2px solid ${theme.primary}`,
  },
  background: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'end',
    bottom: '0',
    width: '100%',
    height: '100%',
    maxWidth: '1360px',
    overflow: 'hidden',
    padding: '0 30px',
    transform: 'translate(-50%, -50%)',
    top: '50%',
    left: '50%',
  },
};


export default Header;
