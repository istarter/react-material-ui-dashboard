import React from "react";
import { Typography, Grid, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles({
  menu: {
    color: "yellow",
  },
});

const OrderList = () => {
  const classes = useStyles();
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container item>
      <Grid item>
        <Typography className={classes.menu}>Hello</Typography>
      </Grid>
    </Grid>
  );
};

export default OrderList;
