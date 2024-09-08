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
import { WineDataMax } from '@/app/types';

interface AddWineDialogProps {
    fetchWines: () => Promise<void>;
    selectedEditWine: WineDataMax | null;
    setSelectedEditWine: (wine: WineDataMax | null) => void;
}

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
    const [values, setValues] = useState({
        Title: "",
        Description: "",
        Price: "",
        Capacity: "75CL",
        Grape: "",
        SecondaryGrapeVarieties: "",
        Closure: "",
        Country: "",
        Units: 10,
        Characteristics: "",
        PerBottleCaseEach: "Per Bottle",
        Type: "",
        ABV: "",
        Style: "",
        Vintage: "",
        _id: "",
    });

    useEffect(() => {
        if (selectedEditWine) {
            setValues(selectedEditWine);
            setOpen(true);
        }
    }, [selectedEditWine]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        try {
            if (values._id) {
                const { _id, ...updateData } = values;
                await axios.patch(`http://localhost:5000/personal_collection/${values._id}`, updateData);
            } else {
                await axios.post('http://localhost:5000/personal_collection', values);
            }
            fetchWines();
        } catch (error) {
            console.error('Error saving wine:', error);
        }
        setOpen(false);
        setSelectedEditWine(null);
    };

    return (
        <>
            <Button onClick={handleClickOpen} variant="contained"
                sx={{
                    display: "flex", gap: 2, backgroundColor: '#F9e8c0', height: "55px", width: '160px', color: "black", '&:hover': {
                        backgroundColor: '#e8d1a0',
                    },

                }}>
                ADD WINE
                <AddIcon sx={{ fontSize: '20px' }} />
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
                        <Grid item xs={12}>
                            <TextField
                                name="Title"
                                label="Title"
                                fullWidth
                                variant="outlined"
                                value={values.Title}
                                onChange={handleChange}
                                margin="dense"
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="Description"
                                label="Description"
                                fullWidth
                                variant="outlined"
                                value={values.Description}
                                onChange={handleChange}
                                margin="dense"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="Price"
                                label="Price"
                                fullWidth
                                variant="outlined"
                                value={values.Price}
                                onChange={handleChange}
                                margin="dense"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="Capacity"
                                label="Capacity"
                                fullWidth
                                variant="outlined"
                                value={values.Capacity}
                                onChange={handleChange}
                                margin="dense"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="Grape"
                                label="Grape"
                                fullWidth
                                variant="outlined"
                                value={values.Grape}
                                onChange={handleChange}
                                margin="dense"
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="SecondaryGrapeVarieties"
                                label="Secondary Grape Varieties"
                                fullWidth
                                variant="outlined"
                                value={values.SecondaryGrapeVarieties}
                                onChange={handleChange}
                                margin="dense"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="Closure"
                                label="Closure"
                                fullWidth
                                select
                                variant="outlined"
                                value={values.Closure}
                                onChange={handleChange}
                                margin="dense"
                            >
                                <MenuItem value="Cork">Cork</MenuItem>
                                <MenuItem value="Screwcap">Screwcap</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="Country"
                                label="Country"
                                fullWidth
                                variant="outlined"
                                value={values.Country}
                                onChange={handleChange}
                                margin="dense"
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="Units"
                                label="Units"
                                type="number"
                                fullWidth
                                variant="outlined"
                                value={values.Units}
                                onChange={handleChange}
                                margin="dense"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="Characteristics"
                                label="Characteristics"
                                fullWidth
                                variant="outlined"
                                value={values.Characteristics}
                                onChange={handleChange}
                                margin="dense"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="perBottleCaseEach"
                                label="Per Bottle / Case / Each"
                                fullWidth
                                variant="outlined"
                                value={values.PerBottleCaseEach}
                                onChange={handleChange}
                                margin="dense"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="Type"
                                label="Type"
                                fullWidth
                                select
                                variant="outlined"
                                value={values.Type}
                                onChange={handleChange}
                                margin="dense"
                                required
                                helperText="Please select your type"
                            >
                                <MenuItem value="Red">Red</MenuItem>
                                <MenuItem value="White">White</MenuItem>
                                <MenuItem value="Rosé">Rosé</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="ABV"
                                label="ABV"
                                fullWidth
                                variant="outlined"
                                value={values.ABV}
                                onChange={handleChange}
                                margin="dense"
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="Style"
                                label="Style"
                                fullWidth
                                variant="outlined"
                                value={values.Style}
                                onChange={handleChange}
                                margin="dense"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="Vintage"
                                label="Vintage"
                                fullWidth
                                variant="outlined"
                                value={values.Vintage}
                                onChange={handleChange}
                                margin="dense"
                                required
                            />
                        </Grid>
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