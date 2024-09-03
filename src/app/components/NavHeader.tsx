import { useState } from 'react';
import ViewDayIcon from '@mui/icons-material/ViewDay';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Box, Typography, IconButton, Tooltip, Menu, MenuItem, } from '@mui/material';

interface NavHeaderProps {
    title: string
}

const NavHeader = ({ title }: NavHeaderProps) => {
    const [anchorElUser, setAnchorElUser] = useState(null);
    const navigate = useNavigate();

    const handleOpenUserMenu = (event: any) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleMenuClick = (setting: string) => {
        handleCloseUserMenu();

        if (setting === 'Collections') {
            navigate('/collections');
        } else if (setting === 'Dashboards') {
            navigate('/dashboards');
        } else if (setting === 'Home') {
            navigate('/');
        }
    };

    const settings = ['Home', 'Dashboards', 'Collections'];

    return (
        <Box pb={10}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: "center",
                    flexDirection: "row",
                    width: '100%',
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        paddingTop: "40px"
                    }}
                >
                    <Typography variant="h1" sx={{ color: '#F9e8c0', letterSpacing: "0.25em" }}>
                        {title}
                    </Typography>
                </Box>
                <Box >
                    <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} size="large">
                            <ViewDayIcon sx={{ color: '#F9e8c0' }} />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ mt: '25px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        {settings.map((setting) => (
                            <MenuItem key={setting} onClick={() => handleMenuClick(setting)}>
                                <Typography textAlign="center">{setting}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
            </Box>
        </Box >
    );
};

export default NavHeader;
