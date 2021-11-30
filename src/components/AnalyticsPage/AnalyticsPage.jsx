import React from 'react';
import "../global.css";

import Typography from '@mui/material/Typography';
import { Divider, ListItem } from '@mui/material';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ChargesChart from "../AdminPage/charges-chart.PNG"
import MinutesChart from "../AdminPage/minutes-chart.PNG"

function AnalyticsPage() {
  return (
    <div className='analytics-page'>
      <Typography variant="h2" color="black">Analytics</Typography>

      <button>Spend</button>
      <Divider />

      <Stack direction="row" >
        <img src={ChargesChart}/>
        <img src={MinutesChart}/>
      </Stack>

      <Divider />

      <Typography variant="h4">Top 10 Spending Employees</Typography>
      <List>
        
        <Typography variant="h5">Employee     |     Employee ID     |     Total Spent</Typography>
        <br/>
        <br/>
        <Typography variant="h8">1. Lorem Ipsum | Lorem Ipsum | Lorem Ipsum</Typography>
        <br/>
        <Typography variant="h8">2. Lorem Ipsum | Lorem Ipsum | Lorem Ipsum</Typography>
        <br/>
        <Typography variant="h8">3. Lorem Ipsum | Lorem Ipsum | Lorem Ipsum</Typography>
        <br/>
        <Typography variant="h8">4. Lorem Ipsum | Lorem Ipsum | Lorem Ipsum</Typography>
        <br/>
        <Typography variant="h8">5. Lorem Ipsum | Lorem Ipsum | Lorem Ipsum</Typography>
        <br/>
        <Typography variant="h8">6. Lorem Ipsum | Lorem Ipsum | Lorem Ipsum</Typography>
        <br/>
        <Typography variant="h8">7. Lorem Ipsum | Lorem Ipsum | Lorem Ipsum</Typography>
        <br/>
        <Typography variant="h8">8. Lorem Ipsum | Lorem Ipsum | Lorem Ipsum</Typography>
        <br/>
        <Typography variant="h8">9. Lorem Ipsum | Lorem Ipsum | Lorem Ipsum</Typography>
        <br/>
        <Typography variant="h8">10. Lorem Ipsum | Lorem Ipsum | Lorem Ipsum</Typography>
      </List>
    
    </div>
  );
}

export default AnalyticsPage;