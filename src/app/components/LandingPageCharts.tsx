import * as React from 'react';
import { Box } from '@mui/material';
import WineBarCharts from './BarCharts';
import GuageCharts from './GuageCharts';
import PieCharts from './PieCharts';



export default function LandingPageCharts() {
    return (
        <Box mt={3} sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }} >
            <WineBarCharts />
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between" }}>
                <PieCharts />
                <GuageCharts />
            </Box>
        </Box>
    );
} 