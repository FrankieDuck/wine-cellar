import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import { styled } from '@mui/material/styles';

// Create a styled component for the FormControl
const StyledFormControl = styled(FormControl)({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
});

// Create a styled component for the RadioGroup
const StyledRadioGroup = styled(RadioGroup)({
    marginLeft: '16px', // Add some space between the label and the radio buttons
});

export default function AddChartDialogCheckBox() {
    const [value, setValue] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return (
        <StyledFormControl>
            <StyledRadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                value={value}
                onChange={handleChange}
            >
                <FormControlLabel value="Bar" control={<Radio />} label="Bar" />
                <FormControlLabel value="Pie" control={<Radio />} label="Pie" />
                <FormControlLabel value="Guage" control={<Radio />} label="Guage" />
            </StyledRadioGroup>
        </StyledFormControl>
    );
}