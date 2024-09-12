import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';

interface ExampleWineGuageChartsProps {
    title: string
    byGrapes: { variety: string; variant: number }[];
}

export default function ExampleGuageCharts({ title, byGrapes }: ExampleWineGuageChartsProps) {
    const chartColor = title === 'Red' ? '#52020A' : title === 'White' ? '#F9e8c0' : '#FFB9B9';
    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
            <Typography variant='h5' sx={{ color: "#F9e8c0", marginBottom: 2 }}>{title} Stock</Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", width: '100%' }}>
                {byGrapes.map((grape, index) => (
                    <Box key={index} sx={{ display: "flex", flexDirection: "column", alignItems: "center", m: 2, width: '18%' }}>
                        <Typography variant='h6' sx={{ color: "#F9e8c0" }}>{grape.variety}</Typography>
                        <Gauge
                            width={100}
                            height={100}
                            value={grape.variant}
                            sx={(theme) => ({
                                [`& .${gaugeClasses.valueText}`]: {
                                    fontSize: 40,
                                    fill: '#7B0323',
                                },
                                [`& .${gaugeClasses.valueText} text`]: {
                                    fill: "#F9e8c0"
                                },
                                [`& .${gaugeClasses.valueArc}`]: {
                                    fill: chartColor,
                                },
                                [`& .${gaugeClasses.referenceArc}`]: {
                                    fill: theme.palette.text.disabled,
                                },
                            })}
                        />
                    </Box>
                ))}
            </Box>
        </Box>
    );
}