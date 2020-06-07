import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.js";
import Page from "layouts/Page.js";

import "assets/css/material-dashboard-react.css?v=1.8.0";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/page" component={Page} /> {/*Creació nou layout per a les pàgines que no mostren el menú*/}
      <Route path="/admin" component={Admin} />
      <Redirect from="/" to="/page/home" /> {/*Redireccionem la primera pàgina a home*/}
    </Switch>
  </Router>,
  document.getElementById("root")
);
