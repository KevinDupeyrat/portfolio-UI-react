import React from "react";
import "./Skills.css";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Box, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "70%",
  },
  value: {
      color: "white"
  }
});

const Skills = ({ skills }) => {
  const classes = useStyles();

  return (
    <>
      {skills.map((skill, index) => {
        return (
          <div className={classes.root} key={index}>
            {skill.name}
            <LinearProgressWithLabel value={skill.value} />
          </div>
        );
      })}
    </>
  );
};

/**
 * Use Material UI Fonction
 * 
 * @param props 
 */
function LinearProgressWithLabel(props) {
    const classes = useStyles();
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" className={classes.value}>{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

export default Skills;
