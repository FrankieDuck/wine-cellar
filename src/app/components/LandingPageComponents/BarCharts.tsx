import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';


const REDWINEDATA2023 = [
    {
        red: 111,
        month: 'Jan',
    },
    {
        red: 128,
        month: 'Feb',
    },
    {
        red: 41,
        month: 'Mar',
    },
    {
        red: 73,
        month: 'Apr',
    },
    {
        red: 44,
        month: 'May',
    },
    {
        red: 144,
        month: 'June',
    },
    {
        red: 89,
        month: 'July',
    },
    {
        red: 59,
        month: 'Aug',
    },
    {
        red: 101,
        month: 'Sept',
    },
    {
        red: 155,
        month: 'Oct',
    },
    {
        red: 148,
        month: 'Nov',
    },
    {
        red: 225,
        month: 'Dec',
    },
];

const redChartSetting = {
    xAxis: [
        {
            label: 'Red Bottles Sold',
        },
    ],
    width: 700,
    height: 400,
    colors: ['#52020A'],
};


export default function WineBarCharts() {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Typography variant='h5' sx={{ color: "#F9e8c0" }}>Red Wine Sales 2024</Typography>
            <BarChart
                dataset={REDWINEDATA2023}
                yAxis={[{ scaleType: 'band', dataKey: 'month', }]}
                series={[{ dataKey: 'red', }]}
                layout="horizontal"
                grid={{ vertical: true }}
                sx={{
                    "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
                        strokeWidth: "0.4",
                        fill: "#ded5c3"
                    },
                    "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
                        strokeWidth: "0.5",
                        fill: "#ded5c3"
                    },
                    "& .MuiChartsAxis-bottom .MuiChartsAxis-line": {
                        stroke: "#ded5c3",
                        strokeWidth: 0.4
                    },
                    "& .MuiChartsAxis-left .MuiChartsAxis-line": {
                        stroke: "#ded5c3",
                        strokeWidth: 0.4
                    },
                    "& .MuiChartsAxis-root .MuiChartsAxis-label": {
                        stroke: "#ded5c3",
                        strokeWidth: 0.7
                    }
                }}
                {...redChartSetting}
            />
        </Box>
    );
}
