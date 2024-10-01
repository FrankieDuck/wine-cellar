import React, { useState, useMemo } from 'react';
import { WineDataMax } from '../types';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';
import { Gauge } from '@mui/x-charts/Gauge';
import { Typography, Box } from '@mui/material';

interface ChartData {
    type: string;
    dataField: string;
    wineType: string;
    data: Array<{ id: number; value: number; label: string }>;
}

interface AddChartDialogProps {
    open: boolean;
    onClose: () => void;
    wines: WineDataMax[];
    onAddChart: (chartData: ChartData) => void;
}

const AddChartDialog: React.FC<AddChartDialogProps> = ({ open, onClose, wines, onAddChart }) => {
    const [chartType, setChartType] = useState<string>('Pie');
    const [dataField, setDataField] = useState<string>('');
    const [wineType, setWineType] = useState<string>('All');

    const handleChartTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChartType(event.target.value);
    };

    const handleDataFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDataField(event.target.value);
    };

    const handleWineTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWineType(event.target.value);
    };

    const prepareChartData = useMemo(() => {
        if (!dataField) return [];

        const filteredWines = wineType === 'All' ? wines : wines.filter(wine => wine.Type === wineType);
        const counts: { [key: string]: number } = {};
        filteredWines.forEach(wine => {
            const value = wine[dataField as keyof WineDataMax];
            if (value) {
                counts[value] = (counts[value] || 0) + 1;
            }
        });

        return Object.entries(counts).map(([label, value], index) => ({
            id: index,
            value,
            label,
        }));
    }, [wines, dataField, wineType]);

    const handleAddChart = () => {
        if (chartType && dataField) {
            onAddChart({
                type: chartType,
                dataField: dataField,
                wineType: wineType,
                data: prepareChartData
            });
        }
    };

    const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'];

    return (
        <Dialog open={open} onClose={onClose} maxWidth="md">
            <DialogTitle>
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    Add New Chart
                </Box>
            </DialogTitle>
            <DialogContent>
                {/* Wine Type Selection */}
                <FormControl component="fieldset" fullWidth margin="normal">
                    <FormLabel component="legend">Wine Type</FormLabel>
                    <RadioGroup row value={wineType} onChange={handleWineTypeChange}>
                        <FormControlLabel value="All" control={<Radio />} label="All Types" />
                        <FormControlLabel value="Red" control={<Radio />} label="Red" />
                        <FormControlLabel value="White" control={<Radio />} label="White" />
                        <FormControlLabel value="Rosé" control={<Radio />} label="Rosé" />
                    </RadioGroup>
                </FormControl>

                {/* Chart Type Selection */}
                <FormControl component="fieldset" fullWidth margin="normal">
                    <FormLabel component="legend">Chart Type</FormLabel>
                    <RadioGroup row value={chartType} onChange={handleChartTypeChange}>
                        <FormControlLabel value="Pie" control={<Radio />} label="Pie" />
                        <FormControlLabel value="Bar" control={<Radio />} label="Bar" />
                        <FormControlLabel value="Gauge" control={<Radio />} label="Gauge" />
                    </RadioGroup>
                </FormControl>

                {/* Data Field Selection */}
                <FormControl component="fieldset" fullWidth margin="normal">
                    <FormLabel component="legend">Data Field</FormLabel>
                    <RadioGroup row value={dataField} onChange={handleDataFieldChange}>
                        <FormControlLabel value="Vintage" control={<Radio />} label="Vintage" />
                        <FormControlLabel value="Country" control={<Radio />} label="Country" />
                        <FormControlLabel value="Grape" control={<Radio />} label="Grape" />
                        <FormControlLabel value="Price" control={<Radio />} label="Price" />
                    </RadioGroup>
                </FormControl>

                {/* Chart Preview */}
                {chartType && dataField && (
                    <Box sx={{ mt: 4, border: '1px solid #ccc', borderRadius: '4px', padding: '16px', backgroundColor: "#52020A" }}>

                        {chartType && dataField && (
                            <Box sx={{ mt: 4, border: '1px solid #ccc', borderRadius: '4px', padding: '16px', backgroundColor: "#52020A" }}>
                                <Typography variant='h6' sx={{ color: "#F9e8c0", mb: 2, textAlign: 'center' }}>
                                    Preview: {wineType === 'All' ? 'All' : wineType} Wine Distribution by {dataField}
                                </Typography>

                                {chartType === 'Pie' && (
                                    <PieChart
                                        series={[{ data: prepareChartData }]}
                                        width={400}
                                        height={200}
                                        colors={colors}
                                        margin={{ top: 10, bottom: 0, left: 0, right: 0 }}
                                        slotProps={{ legend: { hidden: true } }}
                                    />
                                )}

                                {chartType === 'Bar' && (
                                    <BarChart
                                        dataset={prepareChartData}
                                        xAxis={[{ scaleType: 'band', dataKey: 'label' }]}
                                        yAxis={[{ scaleType: 'linear' }]}
                                        series={[{ dataKey: 'value', type: 'bar' }]}
                                        width={400}
                                        height={200}
                                        colors={colors}
                                        margin={{ top: 10, bottom: 0, left: 0, right: 0 }}
                                    />
                                )}

                                {chartType === 'Gauge' && (
                                    <Box sx={{ display: 'flex', justifyContent: 'space-around', }}>
                                        {prepareChartData.map((data) => (
                                            <Box key={data.id} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                <Typography variant='subtitle1' sx={{ color: "#F9e8c0" }}>{data.label}</Typography>
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
                                                            fill: colors[data.id % colors.length],
                                                        },
                                                    }}
                                                />
                                            </Box>
                                        ))}
                                    </Box>
                                )}
                            </Box>
                        )}
                    </Box>
                )}
            </DialogContent>
            <DialogActions sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                <Button onClick={onClose} sx={{
                    display: "flex", gap: 2, backgroundColor: '#a82f3b', height: "55px", width: '160px', color: "black", '&:hover': {
                        backgroundColor: '#7B0323',
                    },
                }}>Cancel</Button>
                <Button onClick={handleAddChart} sx={{
                    display: "flex", gap: 2, backgroundColor: '#a82f3b', height: "55px", width: '160px', color: "black", '&:hover': {
                        backgroundColor: '#7B0323',
                    },
                }}>Add Chart</Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddChartDialog;