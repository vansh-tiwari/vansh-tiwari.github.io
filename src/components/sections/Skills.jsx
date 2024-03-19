import React from "react";
import { Tilt } from "react-tilt";
import Box from '@mui/material/Box';
import { darkTheme as theme} from "../../helper/themes";
import { skills } from "../../data/constants";

const Skills = () => {
  const defaultOptions = {
    reverse:        true,  // reverse the tilt direction
    max:            15,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1,    // 2 = 200%, 1.5 = 150%, etc..
    speed:          1000,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.01,.98,.82,.99)",    // Easing on enter/exit.
  }
  return (
    <Box sx={styles.container} id="Skills">
      <Box sx={styles.wrapper}>
        <Box sx={styles.title}>Skills</Box>
        <Box sx={styles.desc}>
          Here are some of my skills on which I have been working on for the
          past 3 years.
        </Box>

        <Box sx={styles.skillsContainer}>
          {skills.map((skill, index) => (
            <Tilt options={defaultOptions} key={`skill-${index}`}>
              <Box sx={styles.skill} key={`skill-${index}`}>
                <Box sx={styles.skillTitle}>{skill.title}</Box>
                <Box sx={styles.skillList}>
                  {skill.skills.map((item, index_x) => (
                    <Box sx={styles.skillItem} key={`skill-x-${index_x}`}>
                      <Box component='img' sx={styles.skillImage} src={item.image} title={item.name} />
                    </Box>
                  ))}
                </Box>
              </Box>
            </Tilt>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 1,
    alignItems: 'center',
    paddingTop: { xs: '50px', md: '0px' },
  },
  wrapper: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
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
    marginBottom: '10px',
    color: theme.text_secondary,
  },
  skillsContainer: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '20px',
    gap: '30px',
    justifyContent: 'center',
  },
  skill: {
    width: '100%',
    maxWidth: { xs: '330px', sm:'400px', md: '500px' },
    backgroundColor: theme.card_dark,
    border: `1px solid ${theme.card_dark}`,
    boxShadow: `${theme.card_dark} 0px 4px 24px`,
    borderRadius: '16px',
    padding: { xs: '10px 36px', sm:'10px 36px', md: '18px 36px' },
  },
  skillTitle: {
    fontSize: '28px',
    fontWeight: '600',
    marginBottom: '20px',
    textAlign: 'center',
    color: theme.text_secondary,
  },
  skillList: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: '20px',
  },
  skillItem: {
    fontSize: { xs: '12px', sm: '14px', md: '16px' },
    fontWeight: '400',
    color: theme.text_primary + 80,
    border: theme.text_primary + 80,
    borderRadius: '12px',
    padding: { xs: '6px 12px', sm: '8px 12px', md: '12px 16px'},
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
  },
  skillImage: {
    width: 'auto',
    height: '36px',
  }
};

export default Skills;
