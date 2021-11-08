import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import { auth } from "../../firebase";

// import employee_data from "../../employee_data.json"
// import Employee from "./Employee"
// import EmployeeList from "./EmployeeList"
// import AddEmployee from "./AddEmployee"

function EmployeePage() {

    const user = useContext(UserContext);
    const {name, email} = user;
    console.log(user);

    // const [ employeeList, setemployeeList ] = useState(employee_data);

    // const addEmployee = ( {name,role} ) => {
    //     let copy = [...employeeList];
    //     copy = [...copy, { id: employeeList.length + 1, name: name, role: role}];
    //     setemployeeList(copy);
    // }

    return (
        <div className='employee-page'>
            <h1>Employee Page</h1>
            {/* <AddEmployee addEmployee={addEmployee}/>
            <EmployeeList employeeList={employeeList}/> */}
        </div>
    );
}

export default EmployeePage;