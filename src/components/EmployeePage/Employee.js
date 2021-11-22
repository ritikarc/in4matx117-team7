import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Avatar } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

//Probably should not use card, maybe box?

const Employee = ({ employee }) => {
    return (
        <Grid item>
            <Box 
            maxWidth="lg"
            backgroundColor="white"
            border={1}
            borderRadius={1}>
                <Grid container direction="row" alignItems="center">
                    <Grid item container xs={1} justifyContent="center">
                        <Avatar alt={employee.name} src="joe.jpg"/>
                    </Grid>

                    <Grid item xs={8} paddingTop={2} paddingBottom={2}>
                        <Typography fontSize={35}>
                            {employee.name}
                        </Typography>
                        <Typography fontSize={15} color="gray">
                            {employee.role}
                        </Typography>
                    </Grid>
                    
                    {/* <Grid item xs={3}>
                    <Button
                            variant="contained"
                            size="medium"
                            color="primary">
                                Employee Details
                        </Button>
                    </Grid> */}

                    {/* <Grid item container xs={1}></Grid> */}

                    <Grid item container xs={3} justifyContent="center"> 
                        <Typography fontSize={30} >
                            ${employee.cost}
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    );
};

export default Employee;

{/* <Grid item xs={10}>
    <Card maxWidth={345}>
        <CardHeader
            title={employee.name}
            subheader={employee.role} />
        <CardContent>
            <Button
                variant="contained"
                color="primary">View Profile
            </Button>
            <Typography component="div" variant="h5">
                ${employee.cost}
            </Typography>
        </CardContent>
    </Card>
</Grid> */}


{/* <Box
    component="span"
    m={1} //margin
    border="1px solid black"
    justifyContent="flex-end"
    alignItems="flex-end"
> {employee.name} | {employee.role}
    <Button
        variant="contained"
        color="primary"
        style={{ height: 30 }}
    >
        Employee Profile
    </Button>
</Box> */}