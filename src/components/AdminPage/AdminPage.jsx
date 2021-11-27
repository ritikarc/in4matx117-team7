import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import { auth } from "../../firebase";
import firebase from "../../firebase"

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

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

const charge_data = [
    {
        title: "Charges last month",
        cost: 1300
    },
    {
        title: "Amount Difference",
        cost: 100
    },
    {
        title: "% Change",
        cost: 7.69
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

        <Stack direction="row" padding="2%">
            <Stack direction="column" padding="1%"> 
                {/* <Typography variant="h5" align="center"> Charges </Typography> */}
                <Box sx={{
                    width: 300,
                    height: 300,
                    backgroundColor: "#FCA795"}}>
                    <Typography variant="h6" align="center"> Total Charges</Typography>
                    <Typography variant="h5" align="center"> $1400 </Typography>
                    <Divider/>
                    <Typography variant="h8" align="center">Previous Month</Typography>
                    {/* <table id="sample">
                        <tbody>
                            {charge_data}
                        </tbody>
                    </table> */}
                    <Divider/>
                    <Typography variant="h8" align="center">Top Spenders</Typography>
                    
                </Box>
            </Stack>
            <Stack direction="column" padding="1%"> 
                {/* <Typography variant="h5" align="center"> Minutes </Typography> */}
                <Box sx={{
                    width: 300,
                    height: 300,
                    backgroundColor: "#B4FC95"}}>

                    <Typography variant="h6" align="center"> Total Minutes</Typography>
                    <Typography variant="h5" align="center"> 2300 </Typography>
                    <Divider/>
                    <Typography variant="h8" align="center">Previous Month</Typography>
                    {/* <table id="sample">
                        <tbody>
                            {charge_data}
                        </tbody>
                    </table> */}
                    <Divider/>
                    <Typography variant="h8" align="center">Top Minutes</Typography>
                    <Divider/>
                    <Typography variant="h8" align="center">Least Minutes</Typography>
                    

                </Box>
            </Stack>
        </Stack>
        
        <Divider light="true"/>

        <div id="overviews">
            <TotalEmployee {...totalEmployees}/>
            {pendings.map((pending, idx) => (
                <Pending
                    key = {idx}
                    {...pending}
                />
            ))}
        </div>
    </div>
  )
};

export default AdminPage;