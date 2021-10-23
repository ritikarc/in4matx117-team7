import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from './components/LoginPage';
import LandingPage from './components/LandingPage';
// import { Link } from 'react-router-dom';


function App() {


  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const Logout = () => {
    console.log("Logout");
    setUser({ name: "", email: ""});
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/landingpage" component={LandingPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;