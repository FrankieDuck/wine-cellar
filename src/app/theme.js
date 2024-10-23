'use client'
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'Work Sans, sans-serif',
    },
    components: {
        MuiButton: {
            variants: [
                {
                    props: { variant: 'addChartDialog' },
                    style: {
                        backgroundColor: '#a82f3b', // Red
                        color: 'black',
                        '&:hover': {
                            backgroundColor: '#7B0323',
                        },
                    },
                },
                {
                    props: { variant: 'white' },
                    style: {
                        backgroundColor: '#F9e8c0', // Light Beige
                        color: 'black',
                        '&:hover': {
                            backgroundColor: '#e8d1a0',
                        },
                    },
                },
                {
                    props: { variant: 'red' },
                    style: {
                        backgroundColor: '#a82f3b', // Red for wine selection
                        color: 'black',
                        '&:hover': {
                            backgroundColor: '#7B0323',
                        },
                    },
                },
                {
                    props: { variant: 'rose' },
                    style: {
                        backgroundColor: '#FFB9B9', // Rosé
                        color: 'black',
                        '&:hover': {
                            backgroundColor: '#FFB9B9',
                        },
                    },
                },
            ],
            styleOverrides: {
                root: {
                    height: '55px',
                    width: '160px',
                    display: 'flex',
                    gap: '8px',
                },
            },
        },
    },
});

export default theme;