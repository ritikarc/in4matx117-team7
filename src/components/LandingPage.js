import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import "./LandingPage.css";
import { auth, db, logout } from "../firebase";

import Sidebar from './Sidebar';
import AdminPage from './AdminPage';
import AnalyticsPage from './AnalyticsPage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EmployeePage from "./EmployeePage";

function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const history = useHistory();

  const fetchUserName = async () => {
    try {
      const query = await db
        .collection("users")
        .where("uid", "==", user?.uid)
        .get();
      const data = await query.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return history.replace("/");
    fetchUserName();
  }, [user, loading]);

  return (
    <div className="dashboard">
      <Router>
        <Sidebar />
        <Switch>
          <Route path = "/admin-page" exact component={AdminPage} />
          <Route path = "/analytics-page" component={AnalyticsPage} />
          <Route path = "/employee-page" component={EmployeePage} />
        </Switch>
      </Router>

      <div className="dashboard__container">
        Logged in as
        <div>{name}</div>
        <div>{user?.email}</div>
        <button className="dashboard__btn" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}
export default Dashboard;