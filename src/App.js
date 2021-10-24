import React, { useState } from 'react';
import employee_data from "./employee_data.json"

//components
import LoginPage from './components/LoginPage';
import LandingPage from './components/LandingPage';
import Employee from "./components/Employee"
import EmployeeList from "./components/EmployeeList"
import AddEmployee from "./components/AddEmployee"
// import { Link } from 'react-router-dom';

function App() {
  // Temporary adminUser credentials until we get Firebase access
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");
  const [ employeeList, setemployeeList ] = useState(employee_data);

  const Login = details => {
    console.log(details);
  }

  const Logout = () => {
    console.log("Logout");
  }

  const addEmployee = ( {name,cost} ) => {
    let copy = [...employeeList];
    copy = [...copy, { id: employeeList.length + 1, name: name, cost: cost}];
    setemployeeList(copy);
  }

  return (
    <div className="App">
      {/* {(user.email != "") ?  (
        <div className="welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <button>Logout</button>
        </div>
      ) : (
        <LoginPage />
      )} */}

      <AddEmployee addEmployee={addEmployee}/>
      <EmployeeList employeeList={employeeList}/>
    </div>
  );
}

export default App;