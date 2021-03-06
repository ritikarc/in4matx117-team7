import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import { auth } from "../../firebase";
import firebase from "../../firebase"
import {collection, getDocs, onSnapshot, query, where, doc, updateDoc, getDoc} from "firebase/firestore"

import employee_data from "../../employee_data.json"
import Employee from "./Employee"
import EmployeeList from "./EmployeeList"

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import { Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import Modal from '@mui/material/Modal';
import { TextField } from "@mui/material";
import { Splitscreen } from "@mui/icons-material";

const addEmployeeModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function EmployeePage() {
    const [employeeList, setEmployeeList] = useState([]);
    const [addEmail, setAddEmail] = useState("");
    const secondCost = 0.01;

    const [currentUserEmail, setCurrentUserEmail] = useState(useContext(UserContext).email);
    const [currentUserID, setCurrentUserID] = useState(useContext(UserContext).uid);
    const db = firebase.firestore();

    const [openAddEmployee, setOpenAddEmployee] = useState(false);
    const handleOpenAddEmployee = () => setOpenAddEmployee(true);
    const handleCloseAddEmployee = () => setOpenAddEmployee(false);

    useEffect(()=> {
        onSnapshot(collection(db, "users"), (snapshot) => {
            getEmployees();
        });

        const getEmployees = async() => {
            const docRef = doc(db, "users", currentUserID);
            const userDoc = await getDoc(docRef);
            const employeeIds = userDoc.data().employees;
            let employees = [];

            for(const employeeId of employeeIds){
                const docRef = doc(db, "users", employeeId);
                const employeeDoc = await getDoc(docRef);
                const employee = ({...employeeDoc.data(),
                                    callCost: (employeeDoc.data().call_seconds * secondCost).toFixed(2),
                                    id: employeeDoc.id});
                employees.push(employee);
            };
            setEmployeeList(employees);
        }
    }, []);

    const addEmployee = async (email) => {
        const collectionRef = collection(db,"users");
        const q = query(collectionRef, where("email", "==", email))
        const snapshot = await getDocs(q);
        if(snapshot.docs.length > 0)
        {
            const employeeId = snapshot.docs[0].id;    
            const docRef = doc(db, "users", currentUserID);
            const userDoc = await getDoc(docRef);
            const employees = userDoc.data().employees;
            if(!employees.includes(employeeId))
            {
                employees.push(employeeId);
                await updateDoc(docRef, {employees: employees});
                setAddEmail("");
            }
        }
    }

    const removeEmployee = async (id) => {
        const docRef = doc(db, "users", currentUserID);
        const userDoc = await getDoc(docRef);
        const employees = userDoc.data().employees;
        const index = employees.indexOf(id);
        employees.splice(index,1);
        await updateDoc(docRef, {employees: employees});
    }
 
    return(
        <div style={{"font-size": "50px" ,"background-color": "#fbfbfb", "padding-left": "5%"}}>

            <Container>
                <Grid container direction='row' alignItems="center">
                    <Grid item container xs={6}>
                        <Typography fontSize={45} paddingBottom={2}>
                            Employees
                        </Typography>
                    </Grid>
                    <Grid item container xs={6} justifyContent="flex-end">
                        <SearchIcon fontSize="xlarge"/>
                        <AddIcon onClick={handleOpenAddEmployee} fontSize="xlarge"/>
                    </Grid>
                </Grid>
                <EmployeeList employeeList={employeeList} removeEmployee={removeEmployee}/>
            </Container>

            {/* Add employee modal */}
            <Modal
                    open={openAddEmployee}
                    onClose={handleCloseAddEmployee}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                <Box sx={addEmployeeModal}> 
                    <TextField label="Enter Employee Email"
                                variant="standard"
                                value={addEmail} 
                                onChange = {(e) => setAddEmail(e.target.value)}
                    />
                    <Button sx={{ mt: 1.5, ml:3}}
                        variant="contained"
                        color="primary"
                        onClick={() => addEmployee(addEmail)}
                    >
                        Add Employee
                    </Button>
                </Box>
            </Modal>
        </div>
    );
}

export default EmployeePage;