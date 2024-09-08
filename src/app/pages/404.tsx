import { Box, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';

export default function Custom404() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box>
                <div>Page not found</div>
            </Box>
        </ThemeProvider>
    );
}
