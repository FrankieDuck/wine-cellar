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
                variant="white"
                onClick={handlePreviousPage}
                disabled={currentPage === 0}
            >
                Previous Page
            </Button>
            <Button
                variant="white"
                onClick={handleNextPage}
            >
                Next Page
            </Button>
        </Stack>
    );
};

export default TableButtons;
