import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';


const REDWINEDATA2024 = [
    {
        red: 106,
        variety: 'Merlot',
    },
    {
        red: 98,
        variety: "Nebbiolo",
    },
    {
        red: 12,
        variety: 'Pinot Noir',
    },
    {
        red: 53,
        variety: 'Syrah',
    },
    {
        red: 71,
        variety: 'Zinfandel',
    },
    {
        red: 59,
        variety: 'Malbec',
    },
    {
        red: 111,
        variety: 'Grenache',
    },
    {
        red: 168,
        variety: 'Sangiovese',
    },
    {
        red: 160,
        variety: 'Barbera',
    },
    {
        red: 90,
        variety: 'Tempranillo',
    },
];


const redChartSetting = {
    xAxis: [
        {
            label: 'Bottles', WineBarCharts
        },
    ],
    width: 700,
    height: 400,
    colors: ['#52020A'],
};


export default function WineBarCharts() {

    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Typography variant='h5' sx={{ color: "#F9e8c0" }}>Red Wines - Grape</Typography>
            <BarChart
                dataset={REDWINEDATA2024}
                yAxis={[{ scaleType: 'band', dataKey: 'variety', }]}
                series={[{ dataKey: 'red', }]}
                layout="horizontal"
                grid={{ vertical: true }}
                margin={{ left: 100 }}
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
