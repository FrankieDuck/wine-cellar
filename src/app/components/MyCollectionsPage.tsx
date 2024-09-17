'use client'
import { useState, useEffect } from "react"
import axios from "axios"
import NavHeader from "../components/NavHeader"
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { CustomDivider } from "./CustomDivider"
import SearchBar from "../components/SearchBar";
import TableButtons from '../components/TableButtons';
import AddWineDialog from "./AddWineDialog";
import { WineDataMax } from "@/app/types"

export const MyCollectionsPage = () => {
    const [wines, setWines] = useState<WineDataMax[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [selectedEditWine, setSelectedEditWine] = useState<WineDataMax | null>(null);

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

    const handleDelete = async (id: string) => {
        try {
            await axios.delete(`http://localhost:5000/personal_collection/${id}`);
            fetchWines();
        } catch (error) {
            console.error("Error deleting wine:", error);
        }
    };

    const handleEdit = (wine: WineDataMax) => {
        setSelectedEditWine(wine);
    };


    return (
        <Box sx={{ backgroundColor: "#52020A" }} >
            <NavHeader title="COLLECTION" />
            <Box sx={{ backgroundColor: "#300106" }} >
                <CustomDivider width="100%" />
            </Box>
            <Box sx={{ padding: 2 }}>
                <Box display="flex"
                    justifyContent="space-between"
                    alignItems="center">
                    <SearchBar value={searchQuery} onChange={handleSearchChange} />
                    <AddWineDialog fetchWines={fetchWines} selectedEditWine={selectedEditWine} setSelectedEditWine={setSelectedEditWine} />
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
                                <TableCell>Units</TableCell>
                                <TableCell>Quantity</TableCell>
                                <TableCell>Characteristics</TableCell>
                                <TableCell>ABV</TableCell>
                                <TableCell>Region</TableCell>
                                <TableCell>Style</TableCell>
                                <TableCell>Vintage</TableCell>
                                <TableCell>Actions</TableCell>
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
                                    <TableCell>{wine.Units}</TableCell>
                                    <TableCell>{wine.Quantity}</TableCell>
                                    <TableCell>{wine.Characteristics}</TableCell>
                                    <TableCell>{wine.ABV}</TableCell>
                                    <TableCell>{wine.Region}</TableCell>
                                    <TableCell>{wine.Style}</TableCell>
                                    <TableCell>{wine.Vintage}</TableCell>
                                    <TableCell>
                                        <Box display="flex" flexDirection="column" alignItems="center">
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                startIcon={<EditIcon />}
                                                sx={{
                                                    marginBottom: 1, width: "110px", backgroundColor: '#F9e8c0', color: "black", '&:hover': {
                                                        backgroundColor: '#e8d1a0',
                                                    },
                                                }}
                                                onClick={() => handleEdit(wine)}
                                            >
                                                Edit
                                            </Button>
                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                sx={{
                                                    backgroundColor: '#a82f3b', color: "black", '&:hover': {
                                                        backgroundColor: '#7B0323',
                                                    },
                                                }}
                                                startIcon={<DeleteIcon />}
                                                onClick={() => handleDelete(wine._id)}
                                            >
                                                Delete
                                            </Button>
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box >
    );
}