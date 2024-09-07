import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface SearchBarProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {

    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
            width={"60%"}
        >
            <TextField
                id="search-bar"
                label="Search"
                variant="filled"
                fullWidth
                value={value}
                onChange={onChange}
                sx={{
                    backgroundColor: '#F9e8c0',
                    '& .MuiFilledInput-root': {
                        backgroundColor: '#F9e8c0',
                    },
                    '& .MuiInputLabel-root': {
                        color: 'black',
                    },
                    '& .MuiFilledInput-root:before': {
                        borderBottom: 'none',
                    },
                    '& .MuiFilledInput-root:hover:not(.Mui-disabled):before': {
                        borderBottom: 'none',
                    },
                    '& .MuiFilledInput-root:after': {
                        borderBottom: '2px solid black',
                    },
                    borderRadius: "6px"
                }}
            />
        </Box>
    );
}

export default SearchBar;
