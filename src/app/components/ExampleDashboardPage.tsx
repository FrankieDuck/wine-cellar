import { useState, useMemo, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, Button } from '@mui/material';
import NavHeader from '../components/NavHeader';
import { CustomDivider } from './CustomDivider';
import { WineDataMax } from '../types';
import ExampleWineBarCharts from './ExampleWineBarCharts';
import ExampleWinePieCharts from './ExampleWinePieCharts';
import ExampleGuageCharts from './ExampleGuageCharts';

const ExampleDashboardPage = () => {
    const [wines, setWines] = useState<WineDataMax[]>([]);
    const [exampleSelection, setExampleSelection] = useState("Red")
    const [countryCounts, setCountryCounts] = useState<Record<string, number>>({});
    const [grapeCounts, setGrapeCounts] = useState<Record<string, number>>({});
    const [ageCounts, setAgeCounts] = useState<Record<string, number>>({});


    useEffect(() => {
        const fetchWines = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_CLOUD_API_URL}/wines/type/${exampleSelection}?p=0`);
                setWines(response.data);
            } catch (error) {
                console.error("Could not fetch wines. Please try again later.");
            }
        };

        fetchWines();
    }, [exampleSelection]);

    const countByGrape = (wines: WineDataMax[]) => {
        const counts: Record<string, number> = {};
        wines.forEach(wine => {
            if (wine.Grape) {
                counts[wine.Grape] = (counts[wine.Grape] || 0) + 1;
            }
        });
        return counts;
    };

    const countByCountry = (wines: WineDataMax[]) => {
        const counts: Record<string, number> = {};
        wines.forEach(wine => {
            if (wine.Country) {
                counts[wine.Country] = (counts[wine.Country] || 0) + 1;
            }
        });
        return counts;
    };

    const countByAge = (wines: WineDataMax[]) => {
        const counts: Record<string, number> = {};
        wines.forEach(wine => {
            if (wine.Vintage) {
                counts[wine.Vintage] = (counts[wine.Vintage] || 0) + 1;
            }
        });
        return counts;
    };

    useMemo(() => {
        setGrapeCounts(countByGrape(wines));
        setCountryCounts(countByCountry(wines));
        setAgeCounts(countByAge(wines));
    }, [wines]);

    const grapeData = useMemo(() => {
        return Object.entries(grapeCounts).map(([variety, variant]) => ({
            variety,
            variant,
        }));
    }, [grapeCounts]);

    const countryData = useMemo(() => {
        return Object.entries(countryCounts).map(([country, variant]) => ({
            country,
            variant,
        }));
    }, [countryCounts]);

    const ageData = useMemo(() => {
        return Object.entries(ageCounts).map(([age, count]) => ({
            age,
            count,
        }));
    }, [countryCounts]);


    return (
        <Box sx={{ backgroundColor: "#52020A" }}>
            <NavHeader title="DASHBOARDS" />
             <CustomDivider width="100%" />
            <Box sx={{ backgroundColor: "#300106", padding: "20px" }}>
                <Box sx={{ p: 4, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                    <Typography variant="h5" color="#F9e8c0" textAlign="center">
                        Keep track of your stock with a dynamic table that provides a comprehensive view of all available wines.
                        Use it to monitor your entire inventory and easily pre-order your favorite selections.
                    </Typography>
                    <Typography variant="h5" color="#F9e8c0" textAlign="center">
                        Use the pre-set buttons below to see different examples of charts based on grape variety.
                    </Typography>
                    <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} gap={2} justifyContent="center">
                        <Button variant="red" onClick={() => setExampleSelection("Red")}>Red</Button>
                        <Button variant="white" onClick={() => setExampleSelection("White")}>White</Button>
                        <Button variant="rose" onClick={() => setExampleSelection("Rosé")}>Rosé</Button>
                    </Box>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
                    <ExampleWineBarCharts title={exampleSelection} byGrapes={grapeData} byCountry={countryData} byAge={ageData} />
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", width: "100%", pt: 4 }}>
                    <Box sx={{ width: { xs: "100%", md: "50%" }, display: "flex", justifyContent: "center", alignItems: "flex-start" }}>
                        <ExampleWinePieCharts title={exampleSelection} byGrapes={grapeData} byCountry={countryData} />
                    </Box>
                    <Box sx={{ width: { xs: "100%", md: "50%" }, display: "flex", justifyContent: "center" }}>
                        <ExampleGuageCharts title={exampleSelection} byGrapes={grapeData} />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default ExampleDashboardPage;
