import { useState } from 'react';
import ViewDayIcon from '@mui/icons-material/ViewDay';
import { useRouter } from 'next/navigation';
import { Box, Typography, IconButton, Tooltip, Menu, MenuItem, Divider } from '@mui/material';

interface NavHeaderProps {
    title: string
}

const NavHeader = ({ title }: NavHeaderProps) => {
    const [anchorElUser, setAnchorElUser] = useState(null);
    const router = useRouter();

    const handleOpenUserMenu = (event: any) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleMenuClick = (
        router: ReturnType<typeof useRouter>,
        setting: string,
        handleCloseUserMenu: () => void
    ) => {
        handleCloseUserMenu();

        if (setting === 'Example Collections') {
            router.push('/example-collections');
        } else if (setting === 'Example Dashboards') {
            router.push('/example-dashboards');
        } else if (setting === 'Home') {
            router.push('/');
        } else if (setting === 'My Dashboards') {
            router.push('/my-dashboards');
        } else if (setting === 'My Collections') {
            router.push('/my-collections');
        }
    };

    const exampleSettings = ['Home', 'Example Dashboards', 'Example Collections'];
    const mySettings = ['My Dashboards', 'My Collections'];

    return (
        <Box pb={10}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: "center",
                    flexDirection: "row",
                    width: '100%',
                    height: 'auto',
                    pt: 2,
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        pt: 5,
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
                        {exampleSettings.map((setting) => (
                            <MenuItem key={setting} onClick={() => handleMenuClick(router, setting, handleCloseUserMenu)}>
                                <Typography textAlign="center">{setting}</Typography>
                            </MenuItem>
                        ))}
                        <Divider />
                        {mySettings.map((setting) => (
                            <MenuItem key={setting} onClick={() => handleMenuClick(router, setting, handleCloseUserMenu)}>
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
