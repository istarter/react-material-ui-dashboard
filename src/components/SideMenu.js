import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, withStyles, Typography, Grid } from "@material-ui/core";
import { IMAGES, COLORS } from "../constant/Constant";

// withStyles & makeStyles

const style = {
  sideMenu: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: "0px",
    width: "16.7%",
    height: "100%",
    backgroundColor: "#253053",
  },
  logo: {
    height: "4em",
  },
  menu: {
    height: "3em",
    "&:hover": {
      backgroundColor: "#fff",
      color: "black",
    },
  },
  menuItems: {
    color: COLORS.primary,
    fontWeight: "bold",
    "&:hover": {
      color: "black",
    },
  },
};

const routes = [
  { icon: "", alt: "home image", name: "Dashboard", link: "/" },
  { icon: "", alt: "home image", name: "Dish Manager", link: "/dishmanager" },
  { icon: "", alt: "home image", name: "Order List", link: "/orderlist" },
  { icon: "", alt: "home image", name: "Menu List", link: "/menulist" },
];

const SideMenu = (props) => {
  const { classes } = props;

  return (
    <div className={classes.sideMenu}>
      <Grid container direction="column">
        <Grid item align="center" style={{ marginTop: "1em" }}>
          <img src={IMAGES.logo} className={classes.logo} />
        </Grid>
        {routes.map((route, index) => (
          <Grid
            container
            justify="center"
            alignItems="center"
            key={index}
            item
            className={classes.menu}
          >
            <Grid item component={Link} to={route.link} style={{}}>
              <Typography className={classes.menuItems}>
                {route.name}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default withStyles(style)(SideMenu);
