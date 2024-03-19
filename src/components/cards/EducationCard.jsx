import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import Box from '@mui/material/Box';
import { styles } from "./styles";

const EducationCard = ({ education }) => {
  return (
    <VerticalTimelineElement
      icon={
        <img
          width="100%"
          height="100%"
          alt={education.school}
          style={{ borderRadius: "50%", objectFit: "cover" }}
          src={education.img}
        />
      }
      contentStyle={styles.contentStyle}
      contentArrowStyle={styles.contentArrowStyle}
      date={education.passed}
    >
      <Box sx={styles.top}>
        <Box component="img" sx={styles.image} src={education.img} />
        <Box sx={styles.body}>
          <Box sx={styles.name}>{education.school}</Box>
          <Box sx={styles.degree}>{education.degree}</Box>
          <Box sx={styles.passed}>{education.passed}</Box>
        </Box>
      </Box>
      {/* <Box sx={styles.description}>
        <span>{education.desc}</span>
      </Box> */}
    </VerticalTimelineElement>
  );
};

export default EducationCard;