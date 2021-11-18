import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import { auth } from "../../firebase";
import firebase from "../../firebase"

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import "./AdminPage.css";
import '../global.css';
import Report from "./Report/Report";
import TotalEmployee from './Overview/TotalEmployee/TotalEmployee';
import Pending from './Overview/Pending/Pending';

// DATA THAT NEEDS TO RETRIEVED FROM FIREBASE
const reports = [
    {
        title: "Unreported Expenses",
        count: 101,
        dollars: 44915,
        color1: "#bf8037",
        color2: "#f4993e"
    },
    {
        title: "Reports Submitted",
        count: 15,
        dollars: 471335,
        color1: "#3080c4",
        color2: "#3097f4"
    },
    {
        title: "Reports Inquiry",
        count: 3,
        dollars: 1285,
        color1: "#6d52a2",
        color2: "#7f57c2"
    },
    {
        title: "Reports Approved",
        count: 5,
        dollars: 3001,
        color1: "#599964",
        color2: "#66bb6a"
    }
]

const totalEmployees = 
    {
        title: "Total Employees",
        total: 25,
        verified: 19
    };


const pendings = [
    {
        title: "Pending Review",
        cost: 3001,
        count: 5,
    },
    {
        title: "Pending Payment",
        cost: 1142,
        count: 3
    }
]

const AdminPage = () => {
    // FIREBASE DATA RETRIEVAL STARTS HERE
    const user = useContext(UserContext);
    const {name, email, uid} = user;
    // const ref = firebase.firestore().collection("users");
    // var employeeIds = [];
    // firebase.firestore().collection('users').doc(uid).get().then((doc)=>{
    //     employeeIds = doc.data().employees;
    // });


  return (
    <div className ="admin-page" id="admin-page">
        {/* <h2 className="admin-title">Welcome, {name}</h2>
        <h2>Email: {email}</h2>
        <button onClick = {() => {auth.signOut()}}>Sign out</button> */}
        
        <div id="reports">
            {
                reports.map((report, idx) => (
                    <Report
                        key = {idx}
                        {...report}
                    />
                ))
            }
        </div>
    
        <Typography variant="h2"> Overview </Typography>

        <div id="overviews">
            <TotalEmployee {...totalEmployees}/>
            {pendings.map((pending, idx) => (
                <Pending
                    key = {idx}
                    {...pending}
                />
            ))}
        </div>
        
        {/* <Stack direction="row" spacing={2}> 
            <Box sx={{
            width: 250,
            height: 150,
            backgroundColor: 'whitesmoke',
            '&:hover': {
                backgroundColor: '#a1c5ff',
                opacity: [0.9, 0.8, 0.7],
            },
            }}>
            
            <Typography variant="h5">
                Total Employees
            </Typography>
            <Typography variant="h3">
                25
            </Typography>
            <Typography variant="h8">
                19 employees are verified
            </Typography>
            </Box>

            <Box sx={{
            width: 250,
            height: 150,
            backgroundColor: 'whitesmoke',
            '&:hover': {
                backgroundColor: '#a1c5ff',
                opacity: [0.9, 0.8, 0.7],
            },
            }}>
            
            <Typography variant="h5">
                Pending Review
            </Typography>
            <Typography variant="h3">
                $3,001
            </Typography>
            <Typography variant="h8">
                5 reports in the queue
            </Typography>
            </Box>

            <Box sx={{
            width: 250,
            height: 150,
            backgroundColor: 'whitesmoke',
            '&:hover': {
                backgroundColor: '#a1c5ff',
                opacity: [0.9, 0.8, 0.7],
            },
            }}>
            
            <Typography variant="h5">
                Pending Payment
            </Typography>
            <Typography variant="h3">
                $1,142
            </Typography>
            <Typography variant="h8">
                3 reports in queue
            </Typography>
            </Box>
        </Stack>

        <Typography variant="h2"> Reminders </Typography>

        <Stack direction="row" spacing={2}> 
            <Box sx={{
            width: 200,
            height: 100,
            backgroundColor: 'whitesmoke'
            }}>
            
            <Typography variant="h6">
                Unverified Employees
            </Typography>
            <button backgroundColor="#c5d4c9">
                Remind
            </button>
            </Box>

            <Box sx={{
            width: 200,
            height: 100,
            backgroundColor: 'whitesmoke'
            }}>
            
            <Typography variant="h6">
                Pay Period
            </Typography>
            <button backgroundColor="#c5d4c9">
                Remind
            </button>
            </Box>

            <Box sx={{
            width: 200,
            height: 100,
            backgroundColor: 'whitesmoke'
            }}>
            
            <Typography variant="h6">
                Employees unreported Expenses
            </Typography>
            <button backgroundColor="#c5d4c9">
                Remind
            </button>
            </Box>

            <Box sx={{
            width: 200,
            height: 100,
            backgroundColor: 'whitesmoke'
            }}>
            
            <Typography variant="h6">
                Approvers Pending Expenses
            </Typography>
            <button backgroundColor="#c5d4c9">
                Remind
            </button>
            </Box>

        </Stack> */}

    </div>
  )
};

export default AdminPage;