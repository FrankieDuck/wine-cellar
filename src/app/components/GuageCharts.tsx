import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';


export default function GuageCharts() {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Typography variant='h5' sx={{ color: "#F9e8c0" }}>Pinot Noir Stock</Typography>
            <Gauge
                width={100}
                height={100}
                value={45}
                sx={(theme) => ({
                    [`& .${gaugeClasses.valueText}`]: {
                        fontSize: 40,
                        fill: '#7B0323',
                    },
                    [`& .${gaugeClasses.valueText} text`]: {
                        fill: "#F9e8c0"
                    },
                    [`& .${gaugeClasses.valueArc}`]: {
                        fill: '#7B0323',
                    },
                    [`& .${gaugeClasses.referenceArc}`]: {
                        fill: theme.palette.text.disabled,
                    },
                })}
            />
        </Box>
    )
}