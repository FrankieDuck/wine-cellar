import { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import { WineDataMax } from '../types';
import AddIcon from '@mui/icons-material/Add';
import { Alert, Snackbar } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ErrorIcon from '@mui/icons-material/Error';
import { Box, Table, Button, Tooltip, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import SearchBar from '../components/SearchBar';
import TableButtons from '../components/TableButtons';
import NavHeader from '../components/NavHeader';
import { CustomDivider } from './CustomDivider';

interface ExampleCollectionsPageProps {
    type: string;
}

const ExampleCollectionsPage: React.FC<ExampleCollectionsPageProps> = ({ type }) => {
    const [wines, setWines] = useState<WineDataMax[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [alertOpen, setAlertOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertSeverity, setAlertSeverity] = useState<'success' | 'error'>('success');
    
    useEffect(() => {
        const fetchWines = async () => {
            try {
                const response = await axios.get(`https://wine-cellar-backend.ew.r.appspot.com/wines/type/Rosé?p=${currentPage}`);
                const maxWines: WineDataMax[] = response.data.filter((wine: any) => wine.Grape !== undefined);
                setWines(maxWines);
            } catch (error) {
                console.error("Could not fetch wines. Please try again later.");
            }
        };

        fetchWines();
    }, [type, currentPage]);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const filteredWines = useMemo(() => {
        return wines.filter(wine => wine.Title.toLowerCase().includes(searchQuery.toLowerCase()));
    }, [wines, searchQuery]);


    const handleAddToCollection = async (wine: WineDataMax) => {
        try {
            await axios.post(`${process.env.CLOUD_API_URL}/personal_collection`, wine);
            setAlertMessage('Wine successfully added to your collection.');
            setAlertSeverity('success');
            setAlertOpen(true);
        } catch (error) {
            console.error('Error adding wine to collection:', error);
            setAlertMessage('Failed to add wine to your collection. Please try again.');
            setAlertSeverity('error');
            setAlertOpen(true);
        }
    };

    const handleAlertClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setAlertOpen(false);
    };

    return (
        <Box p={2} sx={{ backgroundColor: "#52020A" }}>
            <NavHeader title="COLLECTIONS" />
            <CustomDivider width="100%" />
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
                                <TableCell>{wine.PerBottleCaseEach}</TableCell>
                                <TableCell>{wine.Type}</TableCell>
                                <TableCell>{wine.Grape}</TableCell>
                                <TableCell>{wine.Closure}</TableCell>
                                <TableCell>{wine.Country}</TableCell>
                                <TableCell>{wine.Units}</TableCell>
                                <TableCell>{wine.Characteristics}</TableCell>
                                <TableCell>{wine.ABV}</TableCell>
                                <TableCell>{wine.Region}</TableCell>
                                <TableCell>{wine.Style}</TableCell>
                                <TableCell>{wine.Vintage}</TableCell>
                                <TableCell>
                                    <Tooltip title="Add this wine directly to your own collections">
                                        <Button
                                            variant="white"
                                            endIcon={<AddIcon />}
                                            sx={{
                                                width: "80px",
                                            }}
                                            onClick={() => handleAddToCollection(wine)}
                                        >
                                            Add
                                        </Button>
                                    </Tooltip>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TableButtons currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <Snackbar open={alertOpen} autoHideDuration={2000} onClose={handleAlertClose}>
                <Alert
                    onClose={handleAlertClose}
                    severity={alertSeverity}
                    variant="filled"
                    icon={alertSeverity === 'success' ? <CheckIcon fontSize="inherit" /> : <ErrorIcon fontSize="inherit" />}
                >
                    {alertMessage}
                </Alert>
            </Snackbar>
        </Box >
    );
};

export default ExampleCollectionsPage;
