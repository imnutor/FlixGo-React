import React, { Fragment } from "react";
import Header from "../home-page/header/headcomponent";
import OurPartners from "../home-page/partners/ourPartners";
import Footer from "../home-page/footer/footer";

import { Route} from "react-router-dom";


const HomeLayout = props => {
  return (
    <Fragment>
      <Header />
      {props.children}
      <OurPartners />
      <Footer />
    </Fragment>
    
  );
};

export default function HomeTemplate({ Component, ...props }) {
  
  return (
    <Route
      {...props}
      render={propsComponent => (
        <HomeLayout>
          <Component {...propsComponent} />
        </HomeLayout>
      )}
    />
  );
}
