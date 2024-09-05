import { useEffect, useState } from 'react';
import axios from 'axios';
import { WineDataMax } from '../types';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import SearchBar from './SearchBar';
import TableButtons from './TableButtons';
import NavHeader from './NavHeader';
import { Divider } from './LandingPageComponents/Divider';

interface WineListProps {
    type: string;
}

const WineList: React.FC<WineListProps> = ({ type }) => {
    const [wines, setWines] = useState<WineDataMax[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [totalPages, setTotalPages] = useState<number>(0);

    useEffect(() => {
        const fetchWines = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/wines/type/${type}?p=${currentPage}`);
                // Filter the response data to only include WineDataMax
                const maxWines: WineDataMax[] = response.data.filter((wine: any) => wine.Grape !== undefined);
                setWines(maxWines);
                // setTotalPages(totalPageCount); // You might need another endpoint or response to get this
            } catch (error) {
                console.error("Could not fetch wines. Please try again later.");
            }
        };

        fetchWines();
    }, [type, currentPage]);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    // Filter wines based on search query
    const filteredWines = wines.filter(wine =>
        wine.Title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <Box p={2} sx={{ backgroundColor: "#52020A" }}>
            <NavHeader title="COLLECTIONS" />
            <Divider width="100%" />
            <Box display="flex"
                justifyContent="space-between"
                alignItems="center">
                <SearchBar value={searchQuery} onChange={handleSearchChange} />
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
                            <TableCell>Add</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredWines.map(wine => (
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
            <TableButtons currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </Box >
    );
};

export default WineList;
