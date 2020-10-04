import React from "react";
import "./Experience.css";
import {
  Card,
  makeStyles,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@material-ui/core";
import Buttons from "../../shared/button/Button";

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: "#303030",
    height: "45rem",
    color: "white",
  },
  root: {
    backgroundColor: "#303030",
    width: "80%",
    paddingTop: theme.spacing(6),
    paddingLeft: theme.spacing(20),
  },
  stepper: {
    backgroundColor: "#303030",
    color: "white",
  },
  label: {
    color: "white",
  },
  pname: {
    color: "#3ca2c5",
    paddingTop: theme.spacing(2),
  },
  pdetail: {
    padding: theme.spacing(2),
  },
}));

const Experience = ({ experiencesList, display }) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Card className={classes.card}>
      <div className={classes.root}>
        <Stepper
          className={classes.stepper}
          activeStep={activeStep}
          orientation="vertical"
        >
          {experiencesList.map((exp, index) => (
            <Step key={index}>
              <StepLabel className={classes.label}>
                {exp.company} - {exp.situation}
              </StepLabel>
              <StepContent>
                {exp.project.map((project, i) => (
                  <div key={i}>
                    <Typography className={classes.pname}>
                      {project.name}
                    </Typography>
                    <Typography>{project.description}</Typography>
                    <Typography className={classes.pdetail}>
                      {project.detail}
                    </Typography>
                  </div>
                ))}
                <Buttons
                  activeStep={activeStep}
                  experiencesList={experiencesList}
                  handleNext={handleNext}
                  handleBack={handleBack}
                  labelBack="Back"
                  labelNext="Next"
                />
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </div>
    </Card>
  );
};

export default Experience;
