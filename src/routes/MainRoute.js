import React, { useState } from "react";
import { ThemeProvider, Theme } from "@material-ui/styles";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import DishManager from "../pages/DishManager";

export default function MainRoute() {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/dishmanager" component={DishManager} />
    </Switch>
  );
}
