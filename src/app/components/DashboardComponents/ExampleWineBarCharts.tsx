import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';

interface ExampleWineBarChartsProps {
    title: string
    byGrapes: { variety: string; variant: number }[];
    byCountry: { country: string; variant: number }[];
    byAge: { age: string; count: number }[];
}

export default function ExampleWineBarCharts({ title, byGrapes, byCountry, byAge }: ExampleWineBarChartsProps) {
    const chartColor = title === 'Red' ? '#52020A' : title === 'White' ? '#F9e8c0' : '#FFB9B9';

    const chartSettingGrape = {
        xAxis: [
            {
                label: `${title} Bottles - By Grape`,
            },
        ],
        width: 700,
        height: 400,
        colors: [chartColor],
    };

    const chartSettingCountry = {
        xAxis: [
            {
                label: `${title} Bottles - By Country`,
            },
        ],
        width: 700,
        height: 400,
        colors: [chartColor],
    };

    const chartSettingAge = {
        xAxis: [
            {
                label: `${title} Bottles - By Vintage`,
            },
        ],
        width: 700,
        height: 400,
        colors: [chartColor],
    };

    return (
        <>
            <Box sx={{ padding: 3, display: "flex", flexDirection: "row", justifyContent: "space-between" }}> {/* Main container with flex row */}

                {/* Grape Chart Section */}
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1, marginRight: 2 }}>
                    <Typography variant='h5' sx={{ color: "#F9e8c0", textAlign: "center", marginBottom: 2 }}>
                        {title} Wines - Grape
                    </Typography>
                    <BarChart
                        dataset={byGrapes}
                        yAxis={[{ scaleType: 'band', dataKey: 'variety' }]}
                        series={[{ dataKey: 'variant' }]}
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
                        {...chartSettingGrape}
                    />
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1, marginLeft: 2 }}>
                    <Typography variant='h5' sx={{ color: "#F9e8c0", textAlign: "center", marginBottom: 2 }}>
                        {title} Wines - Country
                    </Typography>
                    <BarChart
                        dataset={byCountry}
                        yAxis={[{ scaleType: 'band', dataKey: 'country' }]}
                        series={[{ dataKey: 'variant' }]}
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
                        {...chartSettingCountry}
                    />
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1, marginLeft: 2 }}>
                    <Typography variant='h5' sx={{ color: "#F9e8c0", textAlign: "center", marginBottom: 2 }}>
                        {title} Wines - Vintage
                    </Typography>
                    <BarChart
                        dataset={byAge}
                        yAxis={[{ scaleType: 'band', dataKey: 'age' }]}
                        series={[{ dataKey: 'count' }]}
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
                        {...chartSettingAge}
                    />
                </Box>


            </Box>
        </>
    );
}
