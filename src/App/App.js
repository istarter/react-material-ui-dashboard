import React from "react";
import "./App.css";
import SideMenu from "../components/SideMenu";
import {
  makeStyles,
  CssBaseline,
  createMuiTheme,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Employees from "../pages/Employees/Employees";
import MainRoute from "../routes/MainRoute";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333996",
      light: "#3c44b126",
    },
    secondary: {
      main: "#f83245",
      light: "#f8324526",
    },
    background: {
      default: "#f4f5fd",
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: "translateZ(0)",
      },
    },
  },
  props: {
    MuiIconButton: {
      disableRipple: true,
    },
  },
});

const useStyles = makeStyles({
  appMain: {
    marginLeft: "16.7%",
    maxWidth: "83.3%",
  },
});

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <SideMenu />
        <div className={classes.appMain}>
          <Header />
          {/* <Employees /> */}
          <MainRoute />
        </div>
        <CssBaseline />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
