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
import Modal from '@mui/material/Modal';

const employeeModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


const Employee = ({ employee }) => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Grid item>
            <Box 
            maxWidth="lg"
            backgroundColor="white"
            border={1}
            borderRadius={1}
            onClick={handleOpen}>
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
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
            <Box sx={employeeModal}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                {employee.name}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 1,   color:"gray"}}>
                {employee.role}
            </Typography>
            <Typography sx={{ mt: 1}}>
                ${employee.cost}
            </Typography>
            <Button sx={{ mt: 2 }}
                variant="contained"
                color="error">Delete Employee
            </Button>
            </Box>
        </Modal>
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