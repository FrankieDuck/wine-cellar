import { useState } from 'react';
import ViewDayIcon from '@mui/icons-material/ViewDay';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Box, Typography, IconButton, Tooltip, Menu, MenuItem, } from '@mui/material';
import NavHeader from './NavHeader';


const DashboardPage = () => {


    return (
        <Box sx={{ backgroundColor: "#52020A" }} >
            <NavHeader title="DASHBOARDS" />
        </Box>
    );
};

export default DashboardPage;
