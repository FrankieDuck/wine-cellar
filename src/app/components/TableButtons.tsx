import { Button, Stack } from '@mui/material';

interface TableButtonsProps {
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const TableButtons: React.FC<TableButtonsProps> = ({ currentPage, setCurrentPage }) => {
    const handleNextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const handlePreviousPage = () => {
        setCurrentPage(prevPage => Math.max(prevPage - 1, 0));
    };

    return (
        <Stack direction="row" spacing={2} justifyContent="flex-end" mt={2} mb={2}>
            <Button
                variant="contained"
                onClick={handlePreviousPage}
                disabled={currentPage === 0}
                sx={{
                    backgroundColor: '#F9e8c0', color: "black", '&:hover': {
                        backgroundColor: '#e8d1a0',
                    },
                    height: "55px"
                }}
            >
                Previous Page
            </Button>
            <Button
                variant="contained"
                onClick={handleNextPage}
                sx={{
                    backgroundColor: '#F9e8c0', color: "black", '&:hover': {
                        backgroundColor: '#e8d1a0',
                    },

                }}
            >
                Next Page
            </Button>
        </Stack>
    );
};

export default TableButtons;
