import React, { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import NavBarAdmin from "../admin/NavBarAdmin"

const AdminLayout = props => {
  return (
    <Fragment>
      <div>Admin Menu Home</div>
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
        return <Redirect to="/admin/" />;
      }}
    />
  );
}
