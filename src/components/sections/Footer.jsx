import React from "react";
import Box from '@mui/material/Box';
import { Bio } from "../../data/constants";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { darkTheme as theme} from "../../helper/themes";

const Footer = () => {
  return (
    <Box sx={styles.footerContainer}>
      <Box sx={styles.footerWrapper}>
        <Box sx={styles.logo}>Vansh Tiwari</Box>
        <Box sx={styles.nav}>
          <Box component='a' sx={styles.navLink} href="#About">About</Box>
          <Box component='a' sx={styles.navLink} href="#Skills">Skills</Box>
          <Box component='a' sx={styles.navLink} href="#Experience">Experience</Box>
          <Box component='a' sx={styles.navLink} href="#Projects">Projects</Box>
          <Box component='a' sx={styles.navLink} href="#Education">Education</Box>
        </Box>
        <Box sx={styles.socialMediaIcons}>
          <Box component='a' sx={styles.socialMediaIcon} href={Bio.linkedin} target="display">
            <LinkedInIcon />
          </Box>
        </Box>
        <Box sx={styles.copyright}>&copy; 2024 Vansh Tiwari. All rights reserved.</Box>
      </Box>
    </Box>
  );
};

export const styles = {
  footerContainer: {
    width: '100%',
    padding: '2rem 0',
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 1,
  },
  footerWrapper: {
    width: '100%',
    maxWidth: '1200px',
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
    alignItems: 'center',
    padding: '1rem',
    color: theme.text_primary,
  },
  logo: {
    fontWeight: '600',
    fontSize: { xs: '16px', md: '20px' },
    color: theme.primary,
  },
  nav: {
    width: '100%',
    maxWidth: '800px',
    marginTop: '0.5rem',
    display: 'flex',
    flexDirection: 'row',
    gap: {xs: '1rem', sm: '2rem'},
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: '12px'
  },
  navLink: {
    color: theme.text_primary,
    textDecoration: 'none',
    fontSize: { xs: '1rem', md: '1.2rem' },
    transition: 'color 0.2s ease-in-out',
    '&:hover': {
      color: theme.primary,
    },
  },
  socialMediaIcons: {
    display: 'flex',
    marginTop: '1rem',
  },
  socialMediaIcon: {
    display: 'inline-block',
    margin: '0 1rem',
    fontSize: '1.5rem',
    color: theme.text_primary,
    transition: 'color 0.2s ease-in-out',
    '&:hover': {
      color: theme.primary,
    },
  },
  copyright: {
    marginTop: '1.5rem',
    fontSize: '0.9rem',
    color: theme.soft2,
    textAlign: 'center',
  },
};


export default Footer;
