import React from "react";
import Box from '@mui/material/Box';
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { experienceStyles, styles } from "./styles";

const ExperienceCard = ({ experience }) => {
  const desc = experience?.desc?.split(".");
  return (
    <VerticalTimelineElement
      icon={
        <img
          width="100%"
          height="100%"
          alt={experience.school}
          style={{ borderRadius: "50%", objectFit: "cover" }}
          src={experience.img}
        />
      }
      contentStyle={styles.contentStyle}
      contentArrowStyle={styles.contentArrowStyle}
      date={experience.date}
    >
      <Box sx={styles.top}>
        <Box component="img" sx={styles.image} src={experience.img} />
        <Box sx={styles.body}>
          <Box sx={experienceStyles.role}>{experience.role}</Box>
          <Box sx={experienceStyles.company}>{experience.company}</Box>
          <Box sx={experienceStyles.date}>{experience.date}</Box>
        </Box>
      </Box>
      <Box sx={experienceStyles.description}>
        {experience?.desc &&  <Box sx={experienceStyles.itemWrapper}>
                {desc?.map((exp, index) => (
                  exp && <Box key={`exp-${index}`} sx={experienceStyles.span}>• {exp}</Box> 
                ))}
              </Box>
        }
        {experience?.skills && (
          <>
            <br />
            <Box sx={experienceStyles.skills}>
              <b>Skills:</b>
              <Box sx={experienceStyles.itemWrapper}>
                {experience?.skills?.map((skill, index) => (
                  <Box key={`skill-${index}`} sx={experienceStyles.skill}>• {skill}</Box>
                ))}
              </Box>
            </Box>
          </>
        )}
      </Box>
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
