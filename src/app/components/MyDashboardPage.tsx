import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import NavHeader from './NavHeader';
import { CustomDivider } from './CustomDivider';
import { WineDataMax } from '../types';
import AddChartDialog from './AddChartDialog';
import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart'; // Import BarChart
import { Gauge } from '@mui/x-charts/Gauge'; // Import Gauge
import Typography from '@mui/material/Typography';

interface ChartData {
    type: string;
    dataField: string;
    data: Array<{ id: number; value: number; label: string }>;
}

export const MyDashboardPage = () => {
    const [wines, setWines] = useState<WineDataMax[]>([]);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [charts, setCharts] = useState<ChartData[]>([]);

    const fetchWines = async () => {
        try {
            const response = await axios.get('http://localhost:5000/personal_collection');
            setWines(response.data);
        } catch (error) {
            console.error("Could not fetch wines. Please try again later.");
        }
    };

    useEffect(() => {
        fetchWines();
    }, []);

    const handleOpenDialog = () => {
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
    };

    const handleAddChart = (newChart: ChartData) => {
        setCharts([...charts, newChart]);
        handleCloseDialog();
    };

    const handleDeleteChart = (indexToDelete: number) => {
        setCharts(charts.filter((_, index) => index !== indexToDelete));
    };

    return (
        <Box sx={{ backgroundColor: "#52020A" }} >
            <NavHeader title="DASHBOARDS" />
            <Box sx={{ backgroundColor: "#300106", height: '83vh' }} >
                <CustomDivider width="100%" />
                <Box display="flex" flexDirection="column" alignItems="center" pt={4} >
                    <Button variant="white" onClick={handleOpenDialog} sx={{
                        height: "55px", width: '160px',
                    }}>
                        Add New Chart
                    </Button>
                    <AddChartDialog
                        open={dialogOpen}
                        onClose={handleCloseDialog}
                        wines={wines}
                        onAddChart={handleAddChart}
                    />
                </Box>
                <Box sx={{ p: 2 }} >
                    <Grid container spacing={2}>
                        {charts.map((chart, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Box sx={{ bgcolor: 'background.paper', p: 2, borderRadius: 1, backgroundColor: '#52020A', position: 'relative' }}>
                                    <IconButton
                                        onClick={() => handleDeleteChart(index)}
                                        sx={{
                                            position: 'absolute',
                                            right: 8,
                                            top: 8,
                                            color: '#F9e8c0'
                                        }}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                    <Typography variant="h6" gutterBottom color={"#F9e8c0"}>
                                        Wine Distribution by {chart.dataField}
                                    </Typography>
                                    {chart.type === 'Pie' && (
                                        <PieChart
                                            series={[{ data: chart.data }]}
                                            width={300}
                                            height={200}
                                            margin={{ top: 10, bottom: 0, left: 0, right: 0 }}
                                            slotProps={{ legend: { hidden: true } }}
                                        />
                                    )}
                                    {chart.type === 'Bar' && (
                                        <BarChart
                                            dataset={chart.data}
                                            xAxis={[{ scaleType: 'band', dataKey: 'label' }]}
                                            yAxis={[{ scaleType: 'linear' }]}
                                            series={[{ dataKey: 'value', type: 'bar' }]}
                                            width={300}
                                            height={200}
                                            margin={{ top: 10, bottom: 0, left: 0, right: 0 }}
                                        />
                                    )}
                                    {chart.type === 'Gauge' && (
                                        <Box sx={{ display: 'flex', justifyContent: 'space-around', }}>
                                            {chart.data.map((data) => (
                                                <Box key={data.id} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                                                    <Typography variant='h6' sx={{ color: "#F9e8c0" }}>{data.label}</Typography>
                                                    <Gauge
                                                        width={100}
                                                        height={100}
                                                        value={data.value}
                                                        sx={{
                                                            '& .MuiCharts-valueText': {
                                                                fontSize: 20,
                                                                fill: '#7B0323',
                                                            },
                                                            '& .MuiCharts-valueArc': {
                                                                fill: '#FF6384',
                                                            },
                                                        }}
                                                    />
                                                </Box>
                                            ))}
                                        </Box>
                                    )}
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};