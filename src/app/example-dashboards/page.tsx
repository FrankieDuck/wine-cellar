'use client'
import { Box, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import ExampleDashboardPage from '../components/ExampleDashboardPage';

export default function Dashboards() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box>
                <ExampleDashboardPage />
            </Box>
        </ThemeProvider>
    );
}
