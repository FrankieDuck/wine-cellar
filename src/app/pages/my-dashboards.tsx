// pages/my-dashboards.tsx
import { Box, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import { MyDashboardPage } from '../my-dashboards/MyDashboardPage';

export default function MyDashboards() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box>
                <MyDashboardPage />
            </Box>
        </ThemeProvider>
    );
}
