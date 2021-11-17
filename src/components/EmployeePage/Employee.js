import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

//Probably should not use card, maybe box?

const Employee = ({ employee }) => {
    return (
        <Grid item xs={10}>
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