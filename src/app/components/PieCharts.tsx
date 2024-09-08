import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { PieChart } from '@mui/x-charts/PieChart';

export default function PieCharts() {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Typography variant='h5' sx={{ color: "#F9e8c0" }}>CURRENT STOCK</Typography>
            <Typography variant='h5' sx={{ color: "#7B0323" }}>2024</Typography>
            <PieChart
                series={[
                    {
                        data: [
                            { id: 0, value: 80, label: 'Red' },
                            { id: 1, value: 20, label: 'White' },
                        ],
                    },
                ]}
                colors={['#7B0323', '#F9e8c0',]}
                width={400}
                height={200}
            />
        </Box>
    )
}