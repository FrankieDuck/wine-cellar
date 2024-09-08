'use client'
import { Box, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import { MyCollectionsPage } from '../components/MyCollectionsPage';

export default function MyCollection() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box>
                <MyCollectionsPage />
            </Box>
        </ThemeProvider>
    );
}
