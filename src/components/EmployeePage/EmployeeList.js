import React from 'react';
import Employee from './Employee';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
 
const EmployeeList = ({employeeList}) => {
   return (
       <Box padding={5}>
            <Grid
                container
                direction="column"
                //justifyContent="center"
                alignItems="stretch"
                columnSpacing={10}
            >
                {employeeList.map(employee => {
                    return (
                        <Employee employee={employee} />
                    )
                })}
            </Grid>
       </Box>
   );
};
 
export default EmployeeList;