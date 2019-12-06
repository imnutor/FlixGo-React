import React, { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import NavBarAdmin from "../admin/navBarAdmin";

const AdminLayout = props => {
  return (
    <Fragment>
      <NavBarAdmin />
      {props.children}
    </Fragment>
  );
};

export default function AdminTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={propsComponent => {
        if (localStorage.getItem("userAdmin")) {
          return (
            <AdminLayout>
              <Component {...propsComponent} />
            </AdminLayout>
          );
        }
        return <Redirect to="/admin" />
      }}
    />
  );
}
