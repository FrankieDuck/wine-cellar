import Image from 'next/image';
import { Box, Typography, IconButton, Paper, Menu, MenuItem, } from '@mui/material';
import NavHeader from './NavHeader';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LandingPageCharts from './LandingPageComponents/LandingPageCharts';
import '../globals.css';

const Home = () => {

    return (
        <>
            <Box className="top-section">
                <Box className="image-overlay">
                    <NavHeader title="WINE CELLAR" />
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "100px" }}>

                        <Typography variant="h2" sx={{ color: "#F9e8c0", letterSpacing: "0.25em" }}>
                            TAKE WINE COLLECTING
                        </Typography>
                        <Typography variant="h2" sx={{ color: "#F9e8c0", letterSpacing: "0.25em" }}>
                            EVEN FURTHER
                        </Typography>
                        <IconButton > <KeyboardArrowDownIcon sx={{ color: "#F9e8c0" }} /></IconButton>
                    </Box>

                </Box>
            </Box >

            <Box className="bottom-section">
                <Box className="content-wrapper">
                    <LandingPageCharts />
                    <Box className="text-container">
                        <Typography variant="body1">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Typography>
                    </Box>
                    <Box className="text-container">
                        <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                        </Typography>
                        <Image src="/images/signature.png"
                            width={500}
                            height={200}
                            alt="signature"
                        />
                    </Box>
                    <Box className="collections-landing-container">
                        <Typography variant="h5" >
                            Keep track of your stock through a dynamic table. It can be used to show complete stock of all available wines and to pre-order favourites.
                        </Typography>
                        <Image src="/images/collectionsTable.png"
                            width={800}
                            height={500}
                            alt="collections table"
                        />
                    </Box>
                </Box>
            </Box >
        </>
    );
}

export default Home;