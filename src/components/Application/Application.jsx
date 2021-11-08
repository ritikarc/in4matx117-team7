import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginPage from "../LoginPage/LoginPage";
import Sidebar from "../Sidebar/Sidebar";
import AdminPage from "../AdminPage/AdminPage";
import AnalyticsPage from "../AnalyticsPage/AnalyticsPage";
import EmployeePage from "../EmployeePage/EmployeePage";
import ExpensesPage from "../ExpensesPage/ExpensesPage";
import UserProvider from "../../providers/UserProvider";
import { UserContext } from "../../providers/UserProvider";
import "./Application.css";

function Application() {
  const user = useContext(UserContext);
  return (
        user ?
        <Router>
            <Sidebar />
            <Switch>
                <Route path = "/admin-page" component={AdminPage} />
                <Route path = "/employee-page" component={EmployeePage} />
                <Route path = "/expenses-page" component={ExpensesPage} />
                <Route path = "/analytics-page" component={AnalyticsPage} />
                <Route path = "/" exact component={AdminPage} />
            </Switch>
        </Router>
      :
        <Router>
            <Switch>
                <Route path = "/" component={LoginPage} />
            </Switch>
        </Router> 
  );
}

export default Application;