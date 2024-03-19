import React from "react";
import Box from '@mui/material/Box';
import { education } from "../../data/constants";
import EducationCard from "../cards/EducationCard";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { darkTheme as theme} from "../../helper/themes";

const Education = () => {
  return (
    <Box sx={styles.container} id="Education">
      <Box sx={styles.wrapper}>
        <Box sx={styles.title}>Education</Box>
        <Box sx={styles.desc}>
          My education has been a journey of self-discovery and growth. My
          educational details are as follows.
        </Box>

        <VerticalTimeline>
          {education.map((education, index) => (
            <EducationCard key={`education-${index}`} education={education} />
          ))}
        </VerticalTimeline>
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
};

export default Education;
