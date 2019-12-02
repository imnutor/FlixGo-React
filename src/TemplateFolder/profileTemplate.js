import React, { Fragment } from "react";
import Header from "../home-page/header/headcomponent";
import OurPartners from "../home-page/partners/ourPartners";
import Footer from "../home-page/footer/footer";
import { Route, Redirect } from "react-router-dom";

const ProfileLayout = props => {
  return (
    <Fragment>
      <Header />
      {props.children}
      <OurPartners />
      <Footer />
    </Fragment>
  );
};

export default function ProfileTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={propsComponent => {
        if (localStorage.getItem("userLogin")) {
          return (
            <ProfileLayout>
              <Component {...propsComponent} />
            </ProfileLayout>
          );
        } return <Redirect to="/login"/>
      }}
    />
  );
}
