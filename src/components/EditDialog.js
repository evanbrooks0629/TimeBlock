import { Dialog, DialogContent, DialogTitle, Grid, TextField, DialogActions, Button, MenuItem, DialogContentText } from '@mui/material';
import { ColorPicker } from 'mui-color';
import { inputLabelClasses } from "@mui/material/InputLabel";
import Times from '../data/times.json';

const EditDialog = (props) => {
    const hoursInputs = Times.hoursInputs;
    const minutesInputs = Times.minutesInputs;

    const palette = {
        red: '#da5151',
        orange: '#ff7700',
        yellow: '#f5b216',
        green: '#1edb8b',
        lightblue: '#16b6f5',
        blue: '#006fff',
        darkblue: 'darkblue',
        purple: '#7b00ff',
        pink: '#F200FF',
    };

    return (
        <Dialog open={props.open} onClose={props.handleClose}>
            <DialogTitle style={{ color: "#8C52FF" }}>Edit Block</DialogTitle>
            <DialogContent>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Block Name"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={props.name}
                            onChange={props.setName}
                            InputLabelProps={{
                                sx: {
                                    color:"#000000", 
                                    [`&.${inputLabelClasses.shrink}`]: {
                                        // when focused
                                        color: "#8C52FF"
                                        }
                                }
                            }}
                            style={{color: "#000000"}}
                            sx={{
                                '& .MuiInput-underline:before': { borderBottomColor: '#000000' },
                                '& .MuiInput-underline:after': { borderBottomColor: '#8C52FF' }
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} />
                    <Grid item xs={6}>
                        <TextField 
                            select
                            id="hourSelect"
                            label="Hours"
                            value={props.hrs}
                            onChange={props.setHrs}
                            fullWidth
                            sx={{
                                "& .MuiOutlinedInput-root:hover": {
                                    "& > fieldset": {
                                    borderColor: "#8C52FF"
                                    }
                                },
                                "& .MuiOutlinedInput-root": {
                                    "& > fieldset": {
                                        borderColor: "#8C52FF"
                                    }
                                }
                            }}
                            InputLabelProps={{
                                sx: {
                                    color:"#000000", 
                                    [`&.${inputLabelClasses.shrink}`]: {
                                        // when focused
                                        color: "#8C52FF"
                                        }
                                }
                            }}
                            variant="outlined"
                        >
                            {hoursInputs.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField 
                            select
                            id="minuteSelect"
                            label="Minutes"
                            value={props.mins}
                            onChange={props.setMins}
                            fullWidth
                            sx={{
                                "& .MuiOutlinedInput-root:hover": {
                                    "& > fieldset": {
                                    borderColor: "#8C52FF"
                                    }
                                },
                                "& .MuiOutlinedInput-root": {
                                    "& > fieldset": {
                                        borderColor: "#8C52FF"
                                    }
                                }
                            }}
                            InputLabelProps={{
                                sx: {
                                    color:"#000000", 
                                    [`&.${inputLabelClasses.shrink}`]: {
                                        // when focused
                                        color: "#8C52FF"
                                        }
                                }
                            }}
                            variant="outlined"
                        >
                            {minutesInputs.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={2}>
                        <DialogContentText>
                            Color
                        </DialogContentText>
                    </Grid>
                    <Grid item xs={10}>
                        <ColorPicker value={props.color} onChange={props.setColor} palette={palette} />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button style={{color: "#8C52FF", textTransform: "none"}} onClick={props.handleClose}>Cancel</Button>
                <Button variant="contained" style={{backgroundColor: "#8C52FF", textTransform: "none"}} onTouchStart={props.editBlock} onClick={props.editBlock}>Edit Block</Button>
            </DialogActions>
        </Dialog>
    );
}

export default EditDialog;