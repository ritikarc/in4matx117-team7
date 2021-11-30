import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import { auth } from "../../firebase";
import firebase from "../../firebase"
//import MUIDataTable from "mui-datatables";
//import Document from "./Document.js"
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Modal from '@mui/material/Modal';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import "./AdminPage.css";
import '../global.css';
import Report from "./Report/Report";
import TotalEmployee from './Overview/TotalEmployee/TotalEmployee';
import Pending from './Overview/Pending/Pending';
import Button from '@mui/material/Button';

import ChargesChart from "./charges-chart.PNG";
import MinutesChart from "./minutes-chart.PNG";

const chargesModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height:600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

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
        title: "Previous Month",
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

const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    },
    heading: {
        margin: 10,
        padding: 10,
        fontSize:30
    }
  });
  
  const MyDoc = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.heading}>
          <Text>Expense Report: November</Text>
        </View>
        <View style={styles.section}>
          <Text>Lorem ipsum dolor sit amet, 
//                 consectetur adipiscing elit, 
//                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
//                 Ut enim ad minim veniam, 
//                 quis nostrud exercitation ullamco laboris 
//                 nisi ut aliquip ex ea commodo consequat. 
//                 Duis aute irure dolor in reprehenderit in 
//                 voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
//                 Excepteur sint occaecat cupidatat non proident, 
//                 sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
        </View>
      </Page>
    </Document>
  );

// const MyDoc = () => (
//     <Document>
//         <Page>
//             <h1>Expense Report PHONETAXX</h1>
//             <h3>November</h3>
//             <h7>Lorem ipsum dolor sit amet, 
//                 consectetur adipiscing elit, 
//                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
//                 Ut enim ad minim veniam, 
//                 quis nostrud exercitation ullamco laboris 
//                 nisi ut aliquip ex ea commodo consequat. 
//                 Duis aute irure dolor in reprehenderit in 
//                 voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
//                 Excepteur sint occaecat cupidatat non proident, 
//                 sunt in culpa qui officia deserunt mollit anim id est laborum.</h7>
//         </Page>
//     </Document>
// )

const AdminPage = () => {
    // FIREBASE DATA RETRIEVAL STARTS HERE
    const user = useContext(UserContext);
    const {name, email, uid} = user;
    // const ref = firebase.firestore().collection("users");
    // var employeeIds = [];
    // firebase.firestore().collection('users').doc(uid).get().then((doc)=>{
    //     employeeIds = doc.data().employees;
    // });

    const [openCharges, setOpenCharges] = React.useState(false);
    const handleOpenCharges = () => setOpenCharges(true);
    const handleCloseCharges = () => setOpenCharges(false);

    const [openMinutes, setOpenMinutes] = React.useState(false);
    const handleOpenMinutes = () => setOpenMinutes(true);
    const handleCloseMinutes = () => setOpenMinutes(false);

    // onDownloadExpense() {

    // }

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
    
        <Typography variant="h2" color="black" padding-top="10%"> Overview </Typography>

        <Stack direction="row" padding="2%">
            <Stack direction="column" padding="1%"> 
                {/* <Typography variant="h5" align="center"> Charges </Typography> */}
                <Box padding="2%"
                    onClick={handleOpenCharges}
                    sx={{
                    width: 450,
                    height: 350,
                    backgroundColor: "#FCA795"
                    }}>
                    <Typography variant="h6" align="center"> Total Charges</Typography>
                    <Typography variant="h5" align="center"> $1400 </Typography>
                    <Divider/>
                    <Typography variant="h8" align="left">Previous Month | $1200</Typography>
                    <Divider/>
                    <Typography variant="h8" align="left">Difference | $200</Typography>

                    <Divider/>
                    <Typography variant="h6" align="left">Top Spenders</Typography>
                    <br/>
                    <Typography variant="h8" align="left">Bob Smith</Typography>
                    <br/>
                    <Typography variant="h8" align="left">Cora Lucas</Typography>
                    <br/>
                    <Typography variant="h8" align="left">Jane Doe</Typography>

                    <Divider/>
                    <Typography variant="h6" align="left">Bottom Spenders</Typography>
                    <br/>
                    <Typography variant="h8" align="left">Jason Mendoza</Typography>
                    <br/>
                    <Typography variant="h8" align="left">Thelma Turner</Typography>
                    <br/>
                    <Typography variant="h8" align="left">Robin Murray</Typography>
                    
                </Box>
            </Stack>
            <Stack direction="column" padding="1%"> 
                {/* <Typography variant="h5" align="center"> Minutes </Typography> */}
                <Box
                    padding="2%"
                    onClick={handleOpenMinutes} 
                    sx={{
                    width: 450,
                    height: 350,
                    backgroundColor: "#B4FC95"}}>

                    <Typography variant="h6" align="center"> Total Minutes</Typography>
                    <Typography variant="h5" align="center"> 2,128 </Typography>
                    <Divider/>
                    <Typography variant="h8" align="left">Previous Month | 1,980</Typography>
                    <Divider/>
                    <Typography variant="h8" align="left">Difference | 148</Typography>

                    <Divider/>
                    <Typography variant="h6" align="left">Top Spenders</Typography>
                    <br/>
                    <Typography variant="h8" align="left">Bob Smith</Typography>
                    <br/>
                    <Typography variant="h8" align="left">Jane Doe</Typography>
                    <br/>
                    <Typography variant="h8" align="left">Johann Smith</Typography>

                    <Divider/>
                    <Typography variant="h6" align="left">Bottom Spenders</Typography>
                    <br/>
                    <Typography variant="h8" align="left">Jason Mendoza</Typography>
                    <br/>
                    <Typography variant="h8" align="left">Thelma Turner</Typography>
                    <br/>
                    <Typography variant="h8" align="left">Robin Murray</Typography>
    
                </Box>
            </Stack>

            {/* <Button variant="contained"
                sx = {{
                    width:160,
                    height:70,
                    margin: 3,
                    mt: 15
                }}>
            </Button> */}

            <Box padding="0.3%"
                    sx={{
                    width: 160,
                    height: 60,
                    backgroundColor: "#f0ffff",
                    margin: 3,
                    mt: 15,
                    border: 1,
                    borderRadius: 2
                    }}> 
                <PDFDownloadLink 
                    document={ <MyDoc/> } 
                    fileName="PHONETAXX_expense_report.pdf">
                    {({ blob, url, loading, error }) =>
                        loading ? 'Loading document...' : 'Download Expense Report'
                    }
                </PDFDownloadLink>
            </Box>
            

        </Stack>

        {/* CHARGES info Modal */}
        <Modal
                open={openCharges}
                onClose={handleCloseCharges}
            >
            <Box sx={chargesModal}>
                <h1>Charges Expenses</h1>
                <img src={ChargesChart} height="150" width="auto"/>
                <Divider/>
                <Stack direction="column">
                    <h4> Top Spenders This Month </h4>
                    <br/>
                    <h4> Top Spenders Last Month</h4>
                    <br/>
                </Stack>
                <Divider/>
                <Stack direction="column">
                    <h4> Bottom Spenders This Month </h4>
                    <br/>
                    <h4> Bottom Spenders Last Month</h4>
                </Stack>
                
            </Box>
        </Modal>

        <Modal
                open={openMinutes}
                onClose={handleCloseMinutes}
            >
            <Box sx={chargesModal}>
                <h1>Minutes Expenses</h1>
                <img src={MinutesChart} width="1000px"/>
                <Divider/>
                <Stack direction="column">
                    <h4> Top Users This Month </h4>
                    <br/>
                    <h4> Top Users Last Month</h4>
                    <br/>
                </Stack>
                <Divider/>
                <Stack direction="column">
                    <h4> Bottom Users This Month </h4>
                    <br/>
                    <h4> Bottom Users Last Month</h4>
                </Stack>
            </Box>
        </Modal>
        
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