import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';
import Sidebar from '../Sidebar/Sidebar';
import AdminPage from '../AdminPage/AdminPage';
import AnalyticsPage from '../AnalyticsPage/AnalyticsPage';
import EmployeePage from '../EmployeePage/EmployeePage';
import ExpensesPage from '../ExpensesPage/ExpensesPage';
import { UserContext } from '../../providers/UserProvider';
import Topbar from '../Topbar/Topbar';
import './Application.css';

function Application() {
  const user = useContext(UserContext);
  return user ? (
    <div id="application">
      <Router>
        <div id="app-container">
          <Sidebar />
          <div id="main-container">
            <Topbar />
            <Switch>
              <Route path="/admin-page" component={AdminPage} />
              <Route path="/employee-page" component={EmployeePage} />
              <Route path="/expenses-page" component={ExpensesPage} />
              <Route path="/analytics-page" component={AnalyticsPage} />
              <Route path="/" exact component={AdminPage} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  ) : (
    <Router>
      <Switch>
        <Route path="/" component={LoginPage} />
      </Switch>
    </Router>
  );
}

export default Application;
