import React from 'react';
import Employee from './Employee';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import { Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
 
const EmployeeList = ({employeeList}) => {
   return (
       <Container maxWidth="xl">
           <Grid container direction='row' alignItems="center">
               <Grid item xs={6}>
                    <Typography fontSize={45} paddingBottom={2}>
                        Employees
                    </Typography>
                </Grid>
                <Grid item container xs={6} justifyContent="flex-end">
                    <SearchIcon fontSize="xlarge"/>
                    <AddIcon fontSize="xlarge"/>
                </Grid>
            </Grid>
            <Grid
                container
                direction="column"
                //justifyContent="center"
                //alignItems="stretch"
                spacing={3}
            >
                {employeeList.map(employee => {
                    return (
                        <Employee employee={employee} />
                    )
                })}
            </Grid>
       </Container>
   );
};
 
export default EmployeeList;