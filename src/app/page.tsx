import { Box, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import LandingPage from './components/LandingPage';

export default function Dashboards() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box>
                <LandingPage />
            </Box>
        </ThemeProvider>
    );
}
