import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import { auth } from "../../firebase";
// import "./AdminPage.css";
import "../global.css";


import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const AdminPage = () => {
  const user = useContext(UserContext);
  const {name, email} = user;
  console.log(user);

  return (
    <div className = "admin-page">
      <h2>Welcome, {name}</h2>
      <h2>Email: {email}</h2>
      <button onClick = {() => {auth.signOut()}}>Sign out</button>
      
      <Typography variant="h2"> Overview </Typography>
      
      <Stack direction="row" spacing={2}> 
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

      </Stack>

    </div>
  )
};

export default AdminPage;