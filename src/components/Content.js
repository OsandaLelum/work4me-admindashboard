import React from "react";

import { Route, HashRouter } from "react-router-dom";

import Dashboard from "./Pages/Dashboard";
import AdminProfile from "./Pages/AdminProfile";
import UsersList from "./Pages/UsersList";
import AddUsers from "./Pages/AddUsers";
import UpdateUsers from "./Pages/UpdateUsers";
import RemoveUsers from "./Pages/RemoveUsers";
import RateandReviews from "./Pages/RateandReviews";
import Inquiries from "./Pages/Inquiries";
import Reports from "./Pages/Reports";
import Jobs from "./Pages/Jobs"
import ViewUser from "./Pages/ViewUser";

export default function Content() {
  return (
    <HashRouter>
      <div className="content-wrapper">
        <Route exact path="/" component={Dashboard}/>
        <Route path="/AdminProfile" component={AdminProfile}/>
        <Route path="/userslist" component={UsersList}/>
        <Route path = "/view-user/:id" component={ViewUser}/>
        <Route path="/signup" component={AddUsers}/>
        <Route path="/UpdateUsers" component={UpdateUsers}/>
        <Route path="/RemoveUsers" component={RemoveUsers}/>
        <Route path="/RateandReviews" component={RateandReviews}/>
        <Route path="/Inquiries" component={Inquiries}/>
        <Route path="/Reports" component={Reports}/>
        <Route path="/Jobs" component={Jobs}/>
      </div>
    </HashRouter>
  );
}
