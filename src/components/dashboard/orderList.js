import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Typography, Grid, useMediaQuery, Button } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { COLORS } from "../../constant/Constant";
const useStyles = makeStyles((theme) => ({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: "7em",
    width: "35em",
    marginTop: "3em",
    marginBottom: "3em",
    [theme.breakpoints.down("sm")]: {
      height: "4em",
      width: "18em",
      marginTop: "1em",
      marginBottom: "1em",
    },
    [theme.breakpoints.down("md")]: {
      height: "5em",
      width: "20em",
      marginTop: "2em",
      marginBottom: "2em",
    },
    [theme.breakpoints.down("lg")]: {
      height: "7em",
      width: "30em",
      marginTop: "3em",
      marginBottom: "3em",
    },
  },
}));

const OrderList = () => {
  const classes = useStyles();
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      direction={matchesSM ? "column" : "row"}
      //   alignItems="center"
      //   justify={matchesSM ? "center" : "center"}
      style={{ backgroundColor: COLORS.primary }}
    >
      <Grid item container justify="center" xl lg md>
        <Button className={classes.root}>Hook</Button>
      </Grid>
      <Grid item container justify="center" xl lg md>
        <Button className={classes.root}>Hook</Button>
      </Grid>
      <Grid item container justify="center" xl lg md>
        <Button className={classes.root}>Hook</Button>
      </Grid>
    </Grid>
  );
};

export default OrderList;
