import React from 'react';
import Employee from './Employee';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import { Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
 
const EmployeeList = ({employeeList,removeEmployee}) => {
   return (
            <Grid
                container
                direction="column"
                //justifyContent="center"
                //alignItems="stretch"
                spacing={3}
            >
                {employeeList.map(employee => {
                    return (
                        <Employee employee={employee} removeEmployee={removeEmployee} />
                    )
                })}
            </Grid>
   );
};
 
export default EmployeeList;