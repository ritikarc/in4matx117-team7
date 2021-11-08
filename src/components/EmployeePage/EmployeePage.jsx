import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import { auth } from "../../firebase";
import firebase from "../../firebase"

// import employee_data from "../../employee_data.json"
// import Employee from "./Employee"
// import EmployeeList from "./EmployeeList"
// import AddEmployee from "./AddEmployee"

function EmployeePage() {

    const[employees, setEmployees] = useState([]);
    const[loading, setLoading] = useState(false);
    const[addEmail, setAddEmail] = useState("");

    const ref = firebase.firestore().collection("users");
    const user = useContext(UserContext);
    const {name, email, uid} = user;
    var employeeIds = [];
    firebase.firestore().collection('users').doc(uid).get().then((doc)=>{
        employeeIds = doc.data().employees;
    });

    //REALTIME GET FUNCTION
    function getEmployees() {
        setLoading(true);
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                if(employeeIds.includes(doc.id))
                {
                    items.push(doc.data());
                }
            });
            //console.log(items);
            setEmployees(items);
            setLoading(false);
        });
    }

    useEffect(() => {
        getEmployees();
        // eslint-disable-next-line
    }, []);

    // ADD FUNCTION
    function addEmployee(employeeEmail) {
        ref.onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if(doc.data().email == employeeEmail)
                {
                    firebase.firestore().collection('users').doc(uid).update({employees: firebase.firestore.FieldValue.arrayUnion(doc.id)});
                }
            });
        });
    }

    function deleteEmployee(employeeEmail) {
        ref.onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if(doc.data().email == employeeEmail)
                {
                    firebase.firestore().collection('users').doc(uid).update({employees: firebase.firestore.FieldValue.arrayRemove(doc.id)});
                }
            });
        });
    }

    if(loading){
        return <h1>Loading...</h1>;
    }
 
    return(
        <div>
            <h1>Employees</h1>
            {employees.map((employee) => (
                <div key={employee.id}>
                    <h2>{employee.name} - ${employee.cost}  <button onClick={() => deleteEmployee(employee.email)} style={{color:"red"}}>X</button>
                    </h2>
                </div>
            ))}
                       <div className="inputBox">
                <h3>Add Employee</h3>
                <input
                    type="text"
                    value={addEmail}
                    onChange={(e) => setAddEmail(e.target.value)}
                />
                <button onClick={() => addEmployee(addEmail)}>
                    Submit
                </button>
            </div>
        </div>
    );

    // const user = useContext(UserContext);
    // const {name, email} = user;
    // console.log(user);

    // // const [ employeeList, setemployeeList ] = useState(employee_data);

    // // const addEmployee = ( {name,role} ) => {
    // //     let copy = [...employeeList];
    // //     copy = [...copy, { id: employeeList.length + 1, name: name, role: role}];
    // //     setemployeeList(copy);
    // // }

    // return (
    //     <div className='employee-page'>
    //         <h1>Employee Page</h1>
    //         {/* <AddEmployee addEmployee={addEmployee}/>
    //         <EmployeeList employeeList={employeeList}/> */}
    //     </div>
    // );
}

export default EmployeePage;