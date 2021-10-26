import React, { useState } from 'react';
import employee_data from "./employee_data.json"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//components
import LoginPage from './components/LoginPage';
import LandingPage from './components/LandingPage';
import Employee from "./components/Employee"
import EmployeeList from "./components/EmployeeList"
import AddEmployee from "./components/AddEmployee"
// import { Link } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import AdminPage from './components/AdminPage';
import AnalyticsPage from './components/AnalyticsPage';

function App() {


  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");
  const [ employeeList, setemployeeList ] = useState(employee_data);

  const Logout = () => {
    console.log("Logout");
    setUser({ name: "", email: ""});
  }

  const addEmployee = ( {name,role} ) => {
    let copy = [...employeeList];
    copy = [...copy, { id: employeeList.length + 1, name: name, role: role}];
    setemployeeList(copy);
  }

//        <AddEmployee addEmployee={addEmployee}/>
//       <EmployeeList employeeList={employeeList}/>
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/landingpage" component={LandingPage} />
        </Switch>
      </Router>

      <Router>
        <Sidebar />
        <Switch>
          <Route path = "/admin-page" exact component={AdminPage} />
          <Route path = "/analytics-page" component={AnalyticsPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;