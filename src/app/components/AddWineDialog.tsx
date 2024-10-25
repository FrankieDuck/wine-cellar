import * as React from 'react';
import { useEffect, useState, } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import axios from 'axios';
import AddIcon from '@mui/icons-material/Add';
import { Grid, TextField, MenuItem } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { v4 as uuidv4 } from 'uuid';
import { WineDataMax } from '@/app/types';

interface AddWineDialogProps {
    fetchWines: () => Promise<void>;
    selectedEditWine: WineDataMax | null;
    setSelectedEditWine: (wine: WineDataMax | null) => void;
}

interface FieldConfig {
    name: keyof WineDataMax;
    label: string;
    select?: boolean;
    options?: string[];
    type?: string;
    required?: boolean;
    helperText?: string;
};

const fields: FieldConfig[] = [
    { name: 'Title', label: 'Title', required: true },
    { name: 'Description', label: 'Description' },
    { name: 'Price', label: 'Price' },
    { name: 'Capacity', label: 'Capacity' },
    { name: 'Grape', label: 'Grape', required: true },
    { name: 'SecondaryGrapeVarieties', label: 'Secondary Grape Varieties' },
    { name: 'Closure', label: 'Closure', select: true, options: ['Cork', 'Screwcap'] },
    { name: 'Country', label: 'Country', required: true },
    { name: 'Units', label: 'Units', type: 'number' },
    { name: 'Quantity', label: 'Quantity', type: 'number' },
    { name: 'Characteristics', label: 'Characteristics' },
    { name: 'PerBottleCaseEach', label: 'Per Bottle / Case / Each' },
    { name: 'Type', label: 'Type', select: true, required: true, options: ['Red', 'White', 'Rosé'], helperText: 'Please select your type' },
    { name: 'ABV', label: 'ABV', required: true },
    { name: 'Style', label: 'Style' },
    { name: 'Vintage', label: 'Vintage', type: 'number', required: true }
];

const initialFormValues = {
    Title: "",
    Description: "",
    Price: "",
    Capacity: "75CL",
    Grape: "",
    SecondaryGrapeVarieties: "",
    Closure: "",
    Country: "",
    Units: 10,
    Quantity: 1,
    Characteristics: "",
    PerBottleCaseEach: "Per Bottle",
    Type: "",
    ABV: "",
    Style: "",
    Vintage: 2000,
    _id: "",
};

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});


export default function AddWineDialog({ fetchWines, selectedEditWine, setSelectedEditWine }: AddWineDialogProps) {
    const [open, setOpen] = useState(false);
    const [values, setValues] = useState(initialFormValues);

    useEffect(() => {
        if (selectedEditWine) {
            setValues(selectedEditWine);
            setOpen(true);
        } else {
            resetForm();
        }
    }, [selectedEditWine]);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        resetForm();
        setSelectedEditWine(null);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        try {
            if (values._id) {
                // Updating existing wine
                const { _id, ...updateData } = values;
                const response = await axios.patch(`http://localhost:5000/personal_collection/${values._id}`, updateData);
                if (response.status === 200) {
                    console.log('Wine updated successfully');
                } else {
                    console.error('Failed to update wine', response);
                }
            } else {
                // Adding new wine
                const newWine = { ...values, _id: uuidv4() };
                const response = await axios.post('http://localhost:5000/personal_collection', newWine);
                if (response.status === 201) {
                    console.log('Wine added successfully');
                } else {
                    console.error('Failed to add wine', response);
                }
            }
            fetchWines();
            setOpen(false);
            setSelectedEditWine(null);
            resetForm();
        } catch (error) {
            console.error('Error saving wine:', error);
        }
    };

    const resetForm = () => {
        setValues(initialFormValues);
    };

    return (
        <>
            <Button onClick={handleClickOpen} variant="white"
                startIcon={<AddIcon sx={{ fontSize: '20px' }} />} >
                ADD WINE
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{values._id ? "Edit Wine" : "Add Wine"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Use the form below to add a wine to your collection.
                    </DialogContentText>
                    <Grid container spacing={2}>
                        {fields.map(({ name, label, select, options, type, required, helperText }) => (
                            <Grid item xs={12} key={name}>
                                <TextField
                                    name={name}
                                    label={label}
                                    fullWidth
                                    variant="outlined"
                                    value={values[name as keyof typeof values] ?? ''}
                                    onChange={handleChange}
                                    margin="dense"
                                    required={required}
                                    select={select}
                                    type={type}
                                    helperText={helperText}
                                >
                                    {select && options?.map(option => (
                                        <MenuItem key={option} value={option}>{option}</MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                        ))}
                    </Grid>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>{values._id ? "Update" : "Add Wine"}</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
