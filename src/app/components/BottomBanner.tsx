import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box } from '@mui/material';

export const BottomBanner = () => {

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: "row",
            width: "400px",
            justifyContent: "space-evenly",
            marginTop: 5,
            color: "#F9e8c0",
        }}>
            <XIcon fontSize='large' />
            <FacebookIcon fontSize='large' />
            <InstagramIcon fontSize='large' />
            <LinkedInIcon fontSize='large' />
        </Box >
    )
}