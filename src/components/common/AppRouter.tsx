import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Map from "../../routes/map/Map";
import Home from "../../routes/Home";

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/map" component={Map} />
          <Redirect path="*" to="/" />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routes;
