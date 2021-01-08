import React from "react";
import SideMenu from "../components/SideMenu";
import "./App.css";
import {
  createMuiTheme,
  CssBaseline,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333996",
      light: "#f8324526",
    },
    secondary: {
      main: "#f83245",
      light: "#f8324526",
    },
    background: {
      default: "#f4f5fd",
    },
  },
});

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "320px",
    width: "100%",
  },
});

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
        <PageHeader
          title="Page Header"
          subTitle="Page description"
          icon={<PeopleOutlineIcon />}
        />
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
