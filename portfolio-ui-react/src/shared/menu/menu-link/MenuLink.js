import { Grid } from "@material-ui/core";
import React from "react";
import "./MenuLink.css";

const MenuLink = ({ classNameActive, scrollTo, label, keyLink }) => {
  return (
    <Grid item xs={1}>
      <span className="menu">
        <span className={classNameActive} onClick={() => scrollTo(keyLink)}>
          {label}
        </span>
      </span>
    </Grid>
  );
};

export default MenuLink;
