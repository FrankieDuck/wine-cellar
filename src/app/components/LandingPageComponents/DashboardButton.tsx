import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const DashboardButton = () => {
    const navigate = useNavigate();

    return (
        <>
            <Button sx={{
                backgroundColor: '#F9e8c0', color: "black", '&:hover': {
                    backgroundColor: '#e8d1a0',
                },
                height: "55px",
                width: "300px"
            }} onClick={() => navigate('/dashboards')}>DASHBOARDS</Button >
        </>
    )
}