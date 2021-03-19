import React from "react";
import { Paper } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import { Dashboard } from "../Components/Dashboard/Dashboard";
import { FormData } from "../Components/Form/FormData";

export const Routes = () => {
  return (
    <Paper
      elevation={5}
      style={{
        maxWidth: "900px",
        margin: "auto",
        padding: "30px",
        marginTop: "100px",
      }}
    >
      <Switch>
        <Route exact path="/" render={(props) => <Dashboard {...props} />} />
        <Route exact path="/form" render={(props) => <FormData {...props} />} />
        <Route render={() => <h4>Page not found</h4>} />
      </Switch>
    </Paper>
  );
};
