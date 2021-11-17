import React from 'react';
// import "./ExpensesPage.css";
import "../global.css";

import List from '@mui/material/List';
import ListItem from '@material-ui/core/ListItem';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';


function ExpensesPage() {
  return (
    <div className='expenses-page'>
      <Typography variant="h2">Expenses</Typography>

      <Stack direction="row" spacing={3}>
        <button>CREATE</button>
        <button>IMPORT</button>
      </Stack>

      <Divider />

      <Stack direction="row" spacing={5}> 

        {/* APPROVED */}
        <List>
          <Typography variant="h5">Approved</Typography>
          <Box sx={{
            width: 200,
            height: 150,
            backgroundColor: 'whitesmoke',
            '&:hover': {
              backgroundColor: '#a1c5ff',
              opacity: [0.9, 0.8, 0.7],
            },
          }}>
            
            <Typography variant="h8">
              Sample
            </Typography>
          </Box>
          <Box sx={{
            width: 200,
            height: 150,
            backgroundColor: 'whitesmoke',
            '&:hover': {
              backgroundColor: '#a1c5ff',
              opacity: [0.9, 0.8, 0.7],
            },
          }}>
            
            <Typography variant="h8">
              Sample
            </Typography>
          </Box>
          <Box sx={{
            width: 200,
            height: 150,
            backgroundColor: 'whitesmoke',
            '&:hover': {
              backgroundColor: '#a1c5ff',
              opacity: [0.9, 0.8, 0.7],
            },
          }}>
            
            <Typography variant="h8">
              Sample
            </Typography>
          </Box>

        </List>

        {/* PENDING SUBMISSION */}
        <List>
        <Typography variant="h5">Pending Submission</Typography>
          <Box sx={{
            width: 250,
            height: 150,
            backgroundColor: 'whitesmoke',
            '&:hover': {
              backgroundColor: '#a1c5ff',
              opacity: [0.9, 0.8, 0.7],
            },
          }}>
            
            <Typography variant="h8">
              Sample
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
            
            <Typography variant="h8">
              Sample
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
            
            <Typography variant="h8">
              Sample
            </Typography>
          </Box>

        </List>

        {/* DISAPPROVED */}
        <List>
          <Typography variant="h5">Disapproved</Typography>
          <Box sx={{
            width: 200,
            height: 150,
            backgroundColor: 'whitesmoke',
            '&:hover': {
              backgroundColor: '#a1c5ff',
              opacity: [0.9, 0.8, 0.7],
            },
          }}>
            
            <Typography variant="h8">
              Sample
            </Typography>
          </Box>
          <Box sx={{
            width: 200,
            height: 150,
            backgroundColor: 'whitesmoke',
            '&:hover': {
              backgroundColor: '#a1c5ff',
              opacity: [0.9, 0.8, 0.7],
            },
          }}>
            
            <Typography variant="h8">
              Sample
            </Typography>
          </Box>
          <Box sx={{
            width: 200,
            height: 150,
            backgroundColor: 'whitesmoke',
            '&:hover': {
              backgroundColor: '#a1c5ff',
              opacity: [0.9, 0.8, 0.7],
            },
          }}>
            
            <Typography variant="h8">
              Sample
            </Typography>
          </Box>
        </List>

          {/* SUBMITTED */}

        <List>
          <Typography variant="h5">Submitted</Typography>
          <Box sx={{
            width: 200,
            height: 150,
            backgroundColor: 'whitesmoke',
            '&:hover': {
              backgroundColor: '#a1c5ff',
              opacity: [0.9, 0.8, 0.7],
            },
          }}>
            
            <Typography variant="h8">
              Sample
            </Typography>
          </Box>
          <Box sx={{
            width: 200,
            height: 150,
            backgroundColor: 'whitesmoke',
            '&:hover': {
              backgroundColor: '#a1c5ff',
              opacity: [0.9, 0.8, 0.7],
            },
          }}>
            
            <Typography variant="h8">
              Sample
            </Typography>
          </Box>
          <Box sx={{
            width: 200,
            height: 150,
            backgroundColor: 'whitesmoke',
            '&:hover': {
              backgroundColor: '#a1c5ff',
              opacity: [0.9, 0.8, 0.7],
            },
          }}>
            
            <Typography variant="h8">
              Sample
            </Typography>
          </Box>
        </List>
      </Stack>
    </div>
  );
}

export default ExpensesPage;