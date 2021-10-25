import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import LandingPage from './components/LandingPage';
// import { Link } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import AdminPage from './components/AdminPage';
import AnalyticsPage from './components/AnalyticsPage';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  // Temporary adminUser credentials until we get Firebase access
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);
  }

  const Logout = () => {
    console.log("Logout");
  }

  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Switch>
          <Route path = "/admin-page" exact component={AdminPage} />
          <Route path = "/analytics-page" component={AnalyticsPage} />
        </Switch>
      </Router>
      
      {(user.email != "") ?  (
        <div className="welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <button>Logout</button>
        </div>
      ) : (
        <LoginPage />
      )}
    </div>
  );
}

export default App;