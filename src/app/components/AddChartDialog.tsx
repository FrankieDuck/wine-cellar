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
import { BarChart } from '@mui/x-charts/BarChart'; // Import BarChart
import { Gauge } from '@mui/x-charts/Gauge'; // Import Gauge
import { Typography, Box } from '@mui/material';

interface ChartData {
    type: string;
    dataField: string;
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

    const handleChartTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChartType(event.target.value);
    };

    const handleDataFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDataField(event.target.value);
    };

    const prepareChartData = useMemo(() => {
        if (!dataField) return [];

        const counts: { [key: string]: number } = {};
        wines.forEach(wine => {
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
    }, [wines, dataField]);

    const handleAddChart = () => {
        if (chartType && dataField) {
            onAddChart({
                type: chartType,
                dataField: dataField,
                data: prepareChartData
            });
        }
    };

    const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'];

    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
            <DialogTitle>Add New Chart</DialogTitle>
            <DialogContent>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Chart Type</FormLabel>
                    <RadioGroup row value={chartType} onChange={handleChartTypeChange}>
                        <FormControlLabel value="Pie" control={<Radio />} label="Pie" />
                        <FormControlLabel value="Bar" control={<Radio />} label="Bar" />
                        <FormControlLabel value="Gauge" control={<Radio />} label="Gauge" />
                    </RadioGroup>
                </FormControl>

                <FormControl component="fieldset" style={{ marginTop: 20 }}>
                    <FormLabel component="legend">Data Field</FormLabel>
                    <RadioGroup row value={dataField} onChange={handleDataFieldChange}>
                        <FormControlLabel value="Vintage" control={<Radio />} label="Vintage" />
                        <FormControlLabel value="Country" control={<Radio />} label="Country" />
                        <FormControlLabel value="Grape" control={<Radio />} label="Grape" />
                        <FormControlLabel value="Price" control={<Radio />} label="Price" />
                    </RadioGroup>
                </FormControl>

                {chartType === 'Pie' && dataField && (
                    <Box sx={{ mt: 2 }}>
                        <Typography variant='h6' sx={{ color: "#F9e8c0" }}>
                            Wine Distribution by {dataField}
                        </Typography>
                        <PieChart
                            series={[{ data: prepareChartData }]}
                            width={400}
                            height={200}
                            colors={colors}
                            margin={{ top: 10, bottom: 0, left: 0, right: 0 }}
                            slotProps={{ legend: { hidden: true } }}
                        />
                    </Box>
                )}

                {chartType === 'Bar' && dataField && (
                    <Box sx={{ mt: 2 }}>
                        <Typography variant='h6' sx={{ color: "#F9e8c0" }}>
                            Wine Distribution by {dataField}
                        </Typography>
                        <BarChart
                            dataset={prepareChartData}
                            xAxis={[{ dataKey: 'label' }]}
                            yAxis={[{ scaleType: 'linear' }]}
                            series={[{ dataKey: 'value' }]}
                            width={400}
                            height={200}
                            colors={colors}
                            margin={{ top: 10, bottom: 0, left: 0, right: 0 }}
                        />
                    </Box>
                )}

                {chartType === 'Gauge' && dataField && (
                    <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-around' }}>
                        {prepareChartData.map((data) => (
                            <Box key={data.id} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
                                            fill: colors[data.id % colors.length],
                                        },
                                    }}
                                />
                            </Box>
                        ))}
                    </Box>
                )}
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={handleAddChart} color="primary">Add Chart</Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddChartDialog;