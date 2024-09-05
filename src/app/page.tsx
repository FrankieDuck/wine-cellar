'use client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WineList from './components/WineList';
import ExampleDashboardPage from './components/ExampleDashboardPage';
import { Box, CssBaseline } from '@mui/material';
import LandingPage from './components/LandingPage';
import { MyCollectionsPage } from './components/MyCollectionsComponents/MyCollectionsPage';
import { MyDashboardPage } from './components/MyDashboardComponents/MyDashboardPage';
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
            <Route path="/dashboards" element={<ExampleDashboardPage />} />
            <Route path="/my-collection" element={<MyCollectionsPage />} />
            <Route path="/my-dashboards" element={<MyDashboardPage />} />
            <Route path="*" element={<div></div>} />
          </Routes>
        </Router>
      </Box>
    </ThemeProvider>
  );
}