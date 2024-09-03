'use client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WineList from './components/WineList';
import DashboardPage from './components/DashboardPage';
import { Box, CssBaseline } from '@mui/material';
import LandingPage from './components/LandingPage';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';


export default function Home() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/collections" element={<WineList type="Red" />} />
            <Route path="/dashboards" element={<DashboardPage />} />
            <Route path="*" element={<div></div>} />
          </Routes>
        </Router>
      </Box>
    </ThemeProvider>
  );
}