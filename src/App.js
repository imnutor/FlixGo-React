import React from "react";

import "./App.css";

import { routeHome, routeProfie, routeAdmin } from "./routes";
import HomeTemplate from "./TemplateFolder/homeTemplate";
import AdminTemplate from "./TemplateFolder/adminTemplate";
import ProfileTemplate from "./TemplateFolder/profileTemplate";
import PageNotFound from "./not-found-page/pageNotFound";
import SignIn from "./home-page/signIn__signUp/signIn";
import SignUp from "./home-page/signIn__signUp/signUp";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Admin from "./admin/admin";


function App() {
  const showMenuHome = routes => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <HomeTemplate
            key={index}
            path={item.path}
            exact={item.exact}
            Component={item.component}
          />
        );
      });
    }
  };
  const showProfile = routes => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <ProfileTemplate
            key={index}
            path={item.path}
            exact={item.exact}
            Component={item.component}
          />
        );
      });
    }
  };
  const showMenuAdmin = routes => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <AdminTemplate
            key={index}
            path={item.path}
            exact={item.exact}
            Component={item.component}
          />
        );
      });
    }
  };
  return (
    <BrowserRouter>
      <div className="App" >
        <Switch>
          {showMenuHome(routeHome)}
          {showProfile(routeProfie)}
          <div style={{display:"flex"}}>
          {showMenuAdmin(routeAdmin)}
          </div>
          <Route path="/admin" exact={true} component={Admin} />
          <Route path="/Login" exact={true} component={SignIn} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="" exact={false} component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
