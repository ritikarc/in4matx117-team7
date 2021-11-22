import React from 'react';
import Employee from './Employee';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import { Typography } from '@mui/material';
 
const EmployeeList = ({employeeList}) => {
   return (
       <Container maxWidth="xl">
            <Typography fontSize={45} paddingBottom={2}>
                Employees
            </Typography>
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