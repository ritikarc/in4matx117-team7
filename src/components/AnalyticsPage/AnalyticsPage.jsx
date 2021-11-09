import React from 'react';
import "../global.css";

import Typography from '@mui/material/Typography';
import { Divider, ListItem } from '@mui/material';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';

function AnalyticsPage() {
  return (
    <div className='analytics-page'>
      <Typography variant="h2">Analytics</Typography>

      <button>Spend</button>
      <Divider />

      <Stack direction="row" spacing={7}>
        <Typography variant="h3">Spaceholder for money spent/budget</Typography>
        <Typography variant="h3">Spaceholder for chart showing previous and this month's expenditures</Typography>
      </Stack>

      <Divider />

      <Typography variant="h6">Top 10 Spending Employees</Typography>
      <List>
        <ListItem></ListItem>
        <Typography variant="h8">Employee     |     Employee ID     |     Total Spend</Typography>
      </List>
    
    </div>
  );
}

export default AnalyticsPage;