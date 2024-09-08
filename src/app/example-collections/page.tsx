'use client'
import { Box, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import ExampleCollectionsPage from '../components/ExampleCollectionsPage';

export default function Collections() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box>
                <ExampleCollectionsPage type="Red" />
            </Box>
        </ThemeProvider>
    );
}
