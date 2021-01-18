import React from "react";
import { makeStyles, withStyles, Typography, Grid } from "@material-ui/core";
import OrderList from "../components/dashboard/orderList";

const Dashboard = () => {
  return (
    <Grid container item>
      <Grid item>
        <OrderList />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
