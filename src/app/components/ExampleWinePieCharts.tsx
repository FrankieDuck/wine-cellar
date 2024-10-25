import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';

interface ExampleWinePieChartsProps {
    title: string
    byGrapes: { variety: string; variant: number }[];
    byCountry: { country: string; variant: number }[];
}

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const generateColors = (length: number) => {
    return Array.from({ length }, () => getRandomColor());
};

export default function ExampleWinePieCharts({ title, byGrapes, byCountry }: ExampleWinePieChartsProps) {

    const grapeData = byGrapes?.map((grape, index) => ({
        id: index,
        value: grape.variant,
        label: grape.variety,
    }));

    const countryData = byCountry?.map((country, index) => ({
        id: index,
        value: country.variant,
        label: country.country,
    }));

    const colors = generateColors(byGrapes.length);

    return (
        <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "100px" }}>
            <Box>
                <Typography variant='h5' sx={{ color: "#F9e8c0" }}>{title}: Current Stock - By Grape</Typography>
                <PieChart
                    series={[
                        {
                            data: grapeData
                        },
                    ]}
                    margin={{ top: 10, bottom: 0, left: 0, right: 0 }}
                    slotProps={{ legend: { hidden: true } }}
                    colors={colors}
                    width={350}
                    height={200}
                />
            </Box>
            <Box>
                <Typography variant='h5' sx={{ color: "#F9e8c0" }}>{title}: Current Stock - By Country</Typography>
                <PieChart
                    series={[
                        {
                            data: countryData
                        },
                    ]}
                    margin={{ top: 10, bottom: 0, left: 0, right: 0 }}
                    slotProps={{ legend: { hidden: true } }}
                    colors={colors}
                    width={350}
                    height={200}
                />
            </Box>
        </Box>
    );
}
