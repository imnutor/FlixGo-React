import React from "react";

import "./App.css";

import { routeHome, routeProfie } from "./routes"; 
import HomeTemplate from "./TemplateFolder/homeTemplate";
import ProfileTemplate from "./TemplateFolder/profileTemplate"
import PageNotFound from "./not-found-page/pageNotFound";
import SignIn from "./home-page/signIn__signUp/signIn";
import SignUp from "./home-page/signIn__signUp/signUp";

import { HashRouter, Route, Switch } from "react-router-dom";


function App() {
  
  const showMenuHome = routes => {
    
    if(routes && routes.length > 0){
      return routes.map((item, index)=> {
        return (
          <HomeTemplate 
            key={index}
            path={item.path}
            exact={item.exact}
            Component={item.component}
          />
        )
      })
    }
  }
  const showProfile = routes => {
    
    if(routes && routes.length > 0){
      return routes.map((item, index)=> {
        return (
          <ProfileTemplate 
            key={index}
            path={item.path}
            exact={item.exact}
            Component={item.component}
          />
        )
      })
    }
  }
  
  return (
    <HashRouter>
      <div>
        <Switch>
          {showMenuHome(routeHome)}
          {showProfile(routeProfie)}
          <Route path="/Login" exact={true} component={SignIn} />        
          <Route path="/SignUp"  component={SignUp} />
          <Route path="" exact={false} component={PageNotFound}/>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
