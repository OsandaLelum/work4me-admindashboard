import React from "react";

export default function Menu() {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <div className="user-panel mt-1 ml-2 d-flex">
        <a href="index3.html" className="brand-link">
          <img
            src="dist/img/Logo.jpg"
            alt="Work4Me"
            className="brand-image img-responsive elevation-3"
            style={{ opacity: ".8" }}
          />
          {/* <span className="brand-text font-weight-light">Work4Me</span> */}
        </a>
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
            <a href="#" className="d-block">
              Osanda Lelum
            </a>
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
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-chart-bar" />
                <p>
                  Dashboard
                  {/* <i className="right fas fa-angle-left" /> */}
                </p>
              </a>
              {/* <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="./index.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Employee-Dashboard</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="./index2.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Employer-Dashboard</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="./index3.html" className="nav-link active">
                    <i className="far fa-circle nav-icon" />
                    <p>Dashboard-Analytics</p>
                  </a>
                </li>
              </ul> */}
            </li>
        
            
            <li className="nav-item has-treeview">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-users" />
                <p>
                  Users Accounts
                  <i className="right fas fa-angle-down" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="pages/charts/chartjs.html" className="nav-link">
                    <i className="fas fa-user-plus nav-icon" />
                    <p> Add User Accounts</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/charts/flot.html" className="nav-link">
                    <i className="fas fa-user-edit nav-icon" />
                    <p>Update User Accounts</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/charts/inline.html" className="nav-link">
                    <i className="fas fa-user-times nav-icon" />
                    <p> Remove User Accounts</p>
                  </a>
                </li>
              </ul>
            </li>
           
            <li className="nav-item has-treeview">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-file-signature" />
                <p>
                  Rate and Reviews
                  <i className="right fas fa-angle-down" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="pages/forms/general.html" className="nav-link">
                    <i className="far fa-star nav-icon" />
                    <p>Rate and Reviews</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/forms/advanced.html" className="nav-link">
                    <i className="fas fa-neuter nav-icon" />
                    <p>Inquiries</p>
                  </a>
                </li>             
                {/* <li className="nav-item">
                  <a href="pages/forms/validation.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Validation</p>
                  </a>
                </li> */}
              </ul>
            </li>
            <li className="nav-item has-treeview">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-file-alt" />
                <p>
                  Reports
                  {/* <i className="fas fa-angle-left right" /> */}
                </p>
              </a>
              {/* <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="pages/tables/simple.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Simple Tables</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/tables/data.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>DataTables</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/tables/jsgrid.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>jsGrid</p>
                  </a>
                </li>
              </ul> */}
            </li>
            {/* <li className="nav-header">Importances</li>
            <li className="nav-item">
              <a href="pages/calendar.html" className="nav-link">
                <i className="nav-icon fas fa-calendar-alt" />
                <p>
                  Calendar
                  <span className="badge badge-info right">2</span>
                </p>
              </a>
            </li>

            <li className="nav-item has-treeview">
              <a href="#" className="nav-link">
                <i className="nav-icon far fa-envelope" />
                <p>
                  Mailbox
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="pages/mailbox/mailbox.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Inbox</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/mailbox/compose.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Compose</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/mailbox/read-mail.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Read</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item has-treeview">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-book" />
                <p>
                  Pages
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="pages/examples/invoice.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Invoice</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/examples/profile.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Profile</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/examples/e-commerce.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>E-commerce</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/examples/projects.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Projects</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="pages/examples/project-add.html"
                    className="nav-link"
                  >
                    <i className="far fa-circle nav-icon" />
                    <p>Project Add</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="pages/examples/project-edit.html"
                    className="nav-link"
                  >
                    <i className="far fa-circle nav-icon" />
                    <p>Project Edit</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="pages/examples/project-detail.html"
                    className="nav-link"
                  >
                    <i className="far fa-circle nav-icon" />
                    <p>Project Detail</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/examples/contacts.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Contacts</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item has-treeview">
              <a href="#" className="nav-link">
                <i className="nav-icon far fa-plus-square" />
                <p>
                  Extras
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="pages/examples/login.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Login</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/examples/register.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Register</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="pages/examples/forgot-password.html"
                    className="nav-link"
                  >
                    <i className="far fa-circle nav-icon" />
                    <p>Forgot Password</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="pages/examples/recover-password.html"
                    className="nav-link"
                  >
                    <i className="far fa-circle nav-icon" />
                    <p>Recover Password</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/examples/lockscreen.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Lockscreen</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="pages/examples/legacy-user-menu.html"
                    className="nav-link"
                  >
                    <i className="far fa-circle nav-icon" />
                    <p>Legacy User Menu</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="pages/examples/language-menu.html"
                    className="nav-link"
                  >
                    <i className="far fa-circle nav-icon" />
                    <p>Language Menu</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/examples/404.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Error 404</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/examples/500.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Error 500</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/examples/pace.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Pace</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/examples/blank.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Blank Page</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="starter.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Starter Page</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-header">MISCELLANEOUS</li>
            <li className="nav-item">
              <a href="https://adminlte.io/docs/3.0" className="nav-link">
                <i className="nav-icon fas fa-file" />
                <p>Documentation</p>
              </a>
            </li> */}
       
        
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
}
