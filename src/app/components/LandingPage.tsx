'use client'
import Image from 'next/image';
import { Box, Typography, IconButton, Paper } from '@mui/material';
import NavHeader from '../components/NavHeader';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LandingPageCharts from './LandingPageCharts';
import { DashboardButton } from './DashboardButton';
import { CollectionsButton } from './CollectionsButton';
import { BottomBanner } from './BottomBanner';
import { CustomDivider } from './CustomDivider';
import { Link as ScrollLink } from 'react-scroll';
import '../page.module.css'

export default function LandingPage() {

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
                        <ScrollLink to="chart-section" smooth={true} duration={500}>
                            <IconButton
                                sx={{
                                    '& .MuiSvgIcon-root': {
                                        fontSize: '88px',
                                    },
                                }}
                            >
                                <KeyboardArrowDownIcon
                                    sx={{
                                        color: "#F9e8c0",
                                        fontSize: 'inherit',
                                    }}
                                />
                            </IconButton>
                        </ScrollLink>
                    </Box>

                </Box>
            </Box >

            <Box className="bottom-section">
                <Box className="content-wrapper" id="chart-section">
                    <CustomDivider />
                    <Typography variant="h2" sx={{ color: "#F9e8c0", letterSpacing: "0.25em" }}>
                        DYNAMIC CHARTS
                    </Typography>
                    <LandingPageCharts />
                    <Box className="text-container">
                        <Paper sx={{ backgroundColor: "#310206", p: 1, br: 4, }}>
                            <Typography variant="h6" sx={{ color: "#F9e8c0" }}>
                                Easily manage your collection with our custom dashboards. These dashboards feature a variety of graphs and charts,
                                offering a comprehensive infographic overview of your entire collection. Whether you want a broad overview of your wine collection or insights into specific details like age, region, price, or grape variety, the dashboards can be tailored to your needs.
                                They update automatically with any changes to your collection, ensuring you always have the most current information.
                            </Typography>
                        </Paper>
                    </Box>

                    <CustomDivider />
                    <Typography variant="h2" sx={{ color: "#F9e8c0", letterSpacing: "0.25em" }}>
                        RESPONSIVE TABLES
                    </Typography>
                    <Box className="collections-landing-container">
                        <Typography variant="h6" >
                            Keep track of your stock with a dynamic table that provides a comprehensive view of all available wines.
                            Use it to monitor your entire inventory and easily pre-order your favorite selections.
                        </Typography>
                        <Image src="/images/collectionsTable.png"
                            width={800}
                            height={500}
                            alt="collections table"
                        />
                    </Box>
                    <CustomDivider />
                    <Typography variant="h5" color="#F9e8c0" >Check out example Dashboards and Collections using the buttons below!</Typography>
                    <Box sx={{ display: "flex", gap: 10, pt: 4, pb: 2 }}>

                        <DashboardButton />
                        <CollectionsButton />
                    </Box>
                    <Box className="text-container">
                        <Paper sx={{ backgroundColor: "#310206", p: 1, br: 4, }}>
                            <Typography variant="h5" sx={{ fontStyle: 'italic', color: "#F9e8c0" }}>
                                "This app is a game-changer for any wine enthusiast. It not only helps me effortlessly manage my collection but also lets me visualize trends in my wines, whether it's tracking the aging process or analyzing the diversity of grape varieties.
                                It’s like having a personal assistant that keeps my cellar perfectly organized and up-to-date." - Luan Yitargio
                            </Typography>
                            <Image src="/images/signature.png"
                                width={500}
                                height={200}
                                alt="signature"
                            />
                        </Paper>
                    </Box>
                    <Box sx={{ display: "flex", width: '100%', alignItems: 'center' }}>
                        <CustomDivider />
                        <BottomBanner />
                        <CustomDivider />
                    </Box>
                </Box>
            </Box >
        </>
    );
}

