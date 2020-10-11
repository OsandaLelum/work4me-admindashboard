import React from "react";

import { NavLink, HashRouter } from "react-router-dom";

export default function Menu() {
  return (
    <HashRouter>
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          {/* Brand Logo */}
          <div className="user-panel mt-1 ml-2 d-flex">
            <NavLink exact to="/" className="brand-link">
              <img
                src="dist/img/Logo.jpg"
                alt="Work4Me"
                className="brand-image img-responsive elevation-3"
                style={{ opacity: ".8" }}
              />
              {/* <span className="brand-text font-weight-light">Work4Me</span> */}
            </NavLink>
          </div>
          {/* Sidebar */}
          <div className="sidebar">
              {/* Sidebar user panel (optional) */}
              <div className="user-panel pb-3 pt-3 d-flex">
                <div className="image">
                  <img
                    src="dist/img/user2-160x160.jpg"
                    className="img-circle elevation-2"
                    alt="User Image"
                  />
                </div>
                <div className="info">
                  <NavLink to="/AdminProfile" className="d-block">
                    Admin
                  </NavLink>
                </div>
              </div>
              {/* Sidebar Menu */}
            <nav className="mt-2">
              <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                {/* Add icons to the links using the .nav-icon class
                with font-awesome or any other icon font library */}
                <li className="nav-item has-treeview">
                  <NavLink exact to="/" className="nav-link">
                    <i className="nav-icon fas fa-chart-bar" />
                    <p>
                      Dashboard
                      {/* <i className="right fas fa-angle-left" /> */}
                    </p>
                  </NavLink>
                  <NavLink exact to="/Jobs" className="nav-link">
                    <i className="nav-icon fas fa-chart-bar" />
                    <p>
                      Job Management
                      {/* <i className="right fas fa-angle-left" /> */}
                    </p>
                  </NavLink>
                </li>
                
                <li className="nav-item has-treeview">
                  <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-users" />
                    <p>
                      User Management
                      <i className="right fas fa-angle-down" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <NavLink to="/userslist" className="nav-link">
                      <i className="fas fa-user-edit nav-icon" />
                        <p>Users List</p>
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item has-treeview">
                    <NavLink to="/RateandReviews" className="nav-link">
                        <i className="far fa-star nav-icon" />
                        <p>Rate and Reviews</p>
                    </NavLink>
                </li>
                <li className="nav-item has-treeview">
                    <NavLink to="/Inquiries" className="nav-link">
                        <i className="fas fa-neuter nav-icon" />
                        <p>Inquiries</p>
                      </NavLink>
                    </li>
                  </ul>
                  {/* </li> */}
                  <li className="nav-item has-treeview">
                    <NavLink to="/Reports" className="nav-link">
                      <i className="nav-icon fas fa-file-alt" />
                      <p>
                        Reports
                        {/* <i className="fas fa-angle-left right" /> */}
                      </p>
                    </NavLink>        
                </li>


              
            </nav>
            {/* /.sidebar-menu */}
          </div>
          {/* /.sidebar */}
        </aside>
    </HashRouter>
  );
}
