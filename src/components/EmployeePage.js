import React, { useState } from 'react';
import employee_data from "../employee_data.json"

import Employee from "./Employee"
import EmployeeList from "./EmployeeList"
import AddEmployee from "./AddEmployee"

function EmployeePage() {

    const [user, setUser] = useState({name: "", email: ""});
    const [error, setError] = useState("");
    const [ employeeList, setemployeeList ] = useState(employee_data);

    const addEmployee = ( {name,role} ) => {
        let copy = [...employeeList];
        copy = [...copy, { id: employeeList.length + 1, name: name, role: role}];
        setemployeeList(copy);
    }

    return (
        <div className='employee-page'>
            <h1>Employee Page</h1>
            <AddEmployee addEmployee={addEmployee}/>
            <EmployeeList employeeList={employeeList}/>
        </div>
    );
}

export default EmployeePage;