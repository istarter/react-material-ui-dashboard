import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import OrderList from "../components/dashboard/orderList";

const useStyles = makeStyles({
  root: {
    // marginLeft: "16.7%",
    // maxWidth: "83.3%",
    margin: 0,
    padding: 0,
  },
});

const Dashboard = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Grid container className={classes.root}>
      <Grid item container justify="center">
        <OrderList />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
