import React from "react";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
    float: "left",
  },
}));

const Buttons = ({
  activeStep,
  experiencesList,
  handleNext,
  labelBack,
  labelNext,
  handleBack,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.actionsContainer}>
      <div>
        {activeStep !== experiencesList.length - 1 && (
          <Button
            disabled={activeStep === experiencesList.length - 1}
            variant="contained"
            color="primary"
            onClick={() => handleNext()}
            className={classes.button}
          >
            {labelNext}
          </Button>
        )}
        {activeStep !== 0 && (
          <Button
            disabled={activeStep === 0}
            onClick={() => handleBack()}
            className={classes.button}
          >
            {labelBack}
          </Button>
        )}
      </div>
    </div>
  );
};


export default Buttons; 