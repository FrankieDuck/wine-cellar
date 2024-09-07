'use client'
import { useState, useEffect } from "react"
import axios from "axios"
import NavHeader from "../NavHeader"
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { Divider } from "../LandingPageComponents/Divider"
import SearchBar from "../SearchBar";
import TableButtons from '../TableButtons';
import AddWineDialog from "./AddWineDialog";
import { WineDataMax } from "@/app/types"

export const MyCollectionsPage = () => {
    const [wines, setWines] = useState<WineDataMax[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(0);

    const fetchWines = async () => {
        try {
            const response = await axios.get('http://localhost:5000/personal_collection');
            setWines(response.data);
        } catch (error) {
            console.error("Could not fetch wines. Please try again later.");
        }
    };

    useEffect(() => {
        fetchWines();
    }, []);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };


    return (
        <Box sx={{ backgroundColor: "#52020A" }} >
            <NavHeader title="COLLECTION" />
            <Box sx={{ backgroundColor: "#300106" }} >
                <Divider width="100%" />
            </Box>
            <Box sx={{ padding: 2 }}>
                <Box display="flex"
                    justifyContent="space-between"
                    alignItems="center">
                    <SearchBar value={searchQuery} onChange={handleSearchChange} />
                    <AddWineDialog />
                    <Button variant="contained" color="primary" onClick={fetchWines}>Refresh</Button>
                    <TableButtons currentPage={currentPage} setCurrentPage={setCurrentPage} />
                </Box>
                <TableContainer component={Paper}>
                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableCell>Title</TableCell>
                                <TableCell>Price</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Capacity</TableCell>
                                <TableCell>Per Bottle / Case / Each</TableCell>
                                <TableCell>Type</TableCell>
                                <TableCell>Grape</TableCell>
                                <TableCell>Closure</TableCell>
                                <TableCell>Country</TableCell>
                                <TableCell>Unit</TableCell>
                                <TableCell>Characteristics</TableCell>
                                <TableCell>ABV</TableCell>
                                <TableCell>Region</TableCell>
                                <TableCell>Style</TableCell>
                                <TableCell>Vintage</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {wines.map(wine => (
                                <TableRow key={wine._id}>
                                    <TableCell>{wine.Title}</TableCell>
                                    <TableCell>{wine.Price}</TableCell>
                                    <TableCell>{wine.Description}</TableCell>
                                    <TableCell>{wine.Capacity}</TableCell>
                                    <TableCell>{wine["Per bottle / case / each"]}</TableCell>
                                    <TableCell>{wine.Type}</TableCell>
                                    <TableCell>{wine.Grape}</TableCell>
                                    <TableCell>{wine.Closure}</TableCell>
                                    <TableCell>{wine.Country}</TableCell>
                                    <TableCell>{wine.Unit}</TableCell>
                                    <TableCell>{wine.Characteristics}</TableCell>
                                    <TableCell>{wine.ABV}</TableCell>
                                    <TableCell>{wine.Region}</TableCell>
                                    <TableCell>{wine.Style}</TableCell>
                                    <TableCell>{wine.Vintage}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
}