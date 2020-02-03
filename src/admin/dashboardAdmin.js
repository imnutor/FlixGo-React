import React, { Component } from 'react';
import HomeAdmin from "./homeAdmin";
import NavBarAdmin from "./navBarAdmin";

export default class DashboardAdmin extends Component {
    render() {
        return (
            <div className="wrapper" style={{display:"flex"}}>
                <HomeAdmin />
            </div>
        )
    }
}
