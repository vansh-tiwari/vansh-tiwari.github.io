import React, { useState } from "react";
import { MenuRounded } from "@mui/icons-material";
import Box from '@mui/material/Box';
import { Bio } from "../data/constants";
import { darkTheme as theme} from "../helper/themes";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box sx={styles.nav}>
      <Box sx={styles.navbarContainer}>
        <Box sx={styles.navLogo} to="/">
          <Box sx={styles.colorText}>&lt;</Box>Vansh
          <div style={{ color: theme.primary }}>/</div>Tiwari
          <Box sx={styles.colorText}>&gt;</Box>
        </Box>

        <Box sx={styles.mobileIcon} onClick={() =>{ console.log(isOpen); setIsOpen(!isOpen)}}>
          <MenuRounded style={{ color: "inherit" }} />
        </Box>

        <Box component='ul' sx={styles.navItems}>
          <Box component='a' sx={styles.navLink} href="#About">About</Box>
          <Box component='a' sx={styles.navLink} href="#Skills">Skills</Box>
          <Box component='a' sx={styles.navLink} href="#Experience">Experience</Box>
          <Box component='a' sx={styles.navLink} href="#Projects">Projects</Box>
          <Box component='a' sx={styles.navLink} href="#Education">Education</Box>
        </Box>

        {isOpen && (
          <Box component='ul' sx={styles.mobileMenu} isOpen={isOpen}>
            <Box component='a' sx={styles.navLink} onClick={() => setIsOpen(!isOpen)} href="#About">
              About
            </Box>
            <Box component='a' sx={styles.navLink} onClick={() => setIsOpen(!isOpen)} href="#Skills">
              Skills
            </Box>
            <Box component='a' sx={styles.navLink} onClick={() => setIsOpen(!isOpen)} href="#Experience">
              Experience
            </Box>
            <Box component='a' sx={styles.navLink} onClick={() => setIsOpen(!isOpen)} href="#Projects">
              Projects
            </Box>
            <Box component='a' sx={styles.navLink} onClick={() => setIsOpen(!isOpen)} href="#Education">
              Education
            </Box>
            <Box component='a'
              sx={styles.githubButton}
              href={Bio.github}
              target="_blank"
              style={{
                background: theme.primary,
                color: theme.text_primary,
              }}
            >
              Github Profile
            </Box>
          </Box>
        )}

        <Box sx={styles.buttonContainer}>
          <Box component='a' sx={styles.githubButton} href={Bio.github} target="_Blank">
            Github Profile
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export const styles = {
  nav: {
    backgroundColor: theme.bg,
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1rem',
    position: 'sticky',
    top: '0',
    zIndex: '10',
    color: 'white',
  },
  colorText: {
    color: theme.primary,
    fontSize: '32px',
  },
  navbarContainer: {
    width: '100%',
    maxWidth: '1200px',
    padding: '0 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: '1rem',
  },
  navLogo: {
    display: 'flex',
    alignItems: 'center',
    width: '80%',
    padding: '0 6px',
    fontWeight: '500',
    fontSize: '18px',
    textDecoration: 'none',
    color: 'inherit',
  },
  navItems: {
    width: '100%',
    display: {xs: 'none', sx: 'none', md:'flex'},
    alignItems: 'center',
    justifyContent: 'center',
    gap: '32px',
    padding: '0 6px',
    listStyle: 'none'
  },
  navLink: {
    color: theme.text_primary,
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    textDecoration: 'none',
    '&:hover': {
      color: theme.primary,
    },
  },
  buttonContainer: {
    width: '80%',
    height: '100%',
    display: {xs: 'none', sx: 'none', md:'flex'},
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '0 6px'
  },
  githubButton: {
    border: `1px solid ${theme.primary}`,
    color: theme.primary,
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '20px',
    cursor: 'pointer',
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: '500',
    transition: 'all 0.3s ease-in-out',
    textDecoration: 'none',
    '&:hover': {
      background: theme.secondary+80,
      color: theme.text_primary,
    },
  },
  mobileIcon: {
    height: '100%',
    display: {xs: 'block', sx: 'block', md:'flex'},
    alignItems: 'center',
    color: theme.text_primary
  },
  mobileMenu: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px',
    padding: '12px 40px 24px 40px',
    background: theme.bgDark + 99,
    position: 'absolute',
    top: '80px',
    right: '0',
    transition: 'all 0.6s ease-in-out',
    borderRadius: '0 0 20px 20px',
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)'
  },
};

export default Navbar;
