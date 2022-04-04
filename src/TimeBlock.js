import * as React from 'react';
import { Typography, Grid, Button, IconButton, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, MenuItem } from '@mui/material';
//import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import Draggable from 'react-draggable'; 
import { ColorPicker } from 'mui-color';
import { inputLabelClasses } from "@mui/material/InputLabel";
import Times from './times.json';

function TimeBlock(props) {
    let height = props.duration*42 + Math.ceil(1.2*(props.duration-1)+Math.floor(props.duration)-1);
    const heightPixels = String(height) + "px";

    let lineHeight = height - 2;
    const lineHeightPixels = String(lineHeight) + "px";

    const hoursInputs = Times.hoursInputs;
    const minutesInputs = Times.minutesInputs;

    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState(props.name);
    const [hrs, setHours] = React.useState(props.hours);
    const [mins, setMinutes] = React.useState(props.minutes);
    const [color, setColor] = React.useState(props.color);
    const [completed, setCompleted] = React.useState(props.completed);
    const [yPos, setYPos] = React.useState(props.yPos);
    const [checked, setChecked] = React.useState(props.completed);

    // Dialog methods
    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleChangeName = e => {
        setName(e.target.value);
    }

    const handleChangeHours = e => {
        setHours(e.target.value);
    }

    const handleChangeMinutes = e => {
        setMinutes(e.target.value);
    }

    const handleChangeColor = e => {
        setColor("#" + e.hex);
    }

    const handleDelete = () => {
        props.handleDelete(props.id);
    }

    const handleEdit = () => {
        setOpen(false);
        props.handleEdit(props.id, name, hrs, mins, color);
    }

    const handleClick = e => {
        switch (e.detail) {
            case 1:
                break;
            case 2:
                // double click
                props.updateCompleted(props.id, !completed);
                setCompleted(!completed);
                setChecked(!checked);
                break;
            case 3:
                break;
            default:
                return;
        }
    }

    const handleDrag = (e,ui) => {
        //console.log(yPos + ui.deltaY);
        setYPos(yPos + ui.deltaY);
        let y;
        if (ui.deltaY > 0) {
            y = 11;
        } else {
            y= -11;
        }
        props.updateCoords(props.id, yPos + y);
    }

    const onCheckboxChange = () => {
        props.updateCompleted(props.id, !completed);
        setCompleted(!completed);
        setChecked(!checked);
    }

    return (
        <Draggable
            axis= 'y'
            grid={[11,11]}
            bounds={{
                top: 0,
                bottom: 748
            }}
            defaultPosition={{ 
                x: 0,
                y: yPos
            }}
            onDrag={handleDrag}
        >
            <Grid container style={{width: "91.85%", marginLeft: "8%", cursor: 'pointer', position: "absolute", height: heightPixels, backgroundColor: props.color, textDecorationColor: "#ffffff"}} onClick={handleClick}>
                <Grid item xs={6} sm={6} md={6} lg={6} align="left" style={{lineHeight: lineHeightPixels, width: "100%", overflow: "hidden", textOverflow: "ellipsis", color: "#ffffff"}}>
                    <Typography variant="h7" style={{width: "100%", color: "white", paddingLeft: "5px", textDecoration: completed ? "line-through" : "", textDecorationColor: "#ffffff", textDecorationThickness: "0.2em"}} noWrap>&nbsp;{props.name}&nbsp;</Typography>    
                </Grid>
                <Grid item xs={2} sm={2} md={2} lg={2} align="right" style={{lineHeight: lineHeightPixels}}>
                    <Typography variant="h7" style={{color: "white", fontSize: "0.7em"}}>{props.duration} {props.duration > 1 ? "hrs" : "hr"}</Typography>
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4} align="right" style={{lineHeight: lineHeightPixels}}>
                    <IconButton aria-label="delete" style={{paddingRight: "0px", cursor: 'pointer', color: "white", height: "20px"}} onTouchStart={handleClickOpen} onClick={handleClickOpen}>
                        <ModeEditIcon />
                    </IconButton>
                    <Dialog open={open} onClose={handleClose}>
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
                                        value={name}
                                        onChange={handleChangeName}
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
                                        value={hrs}
                                        onChange={handleChangeHours}
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
                                        value={mins}
                                        onChange={handleChangeMinutes}
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
                                <Grid item xs={4}>
                                    <DialogContentText>
                                        Color
                                    </DialogContentText>
                                </Grid>
                                <Grid item xs={8}>
                                    <ColorPicker value={color} onChange={handleChangeColor} />
                                </Grid>
                            </Grid>
                        </DialogContent>
                        <DialogActions>
                            <Button style={{color: "#8C52FF", textTransform: "none"}} onClick={handleClose}>Cancel</Button>
                            <Button variant="contained" style={{backgroundColor: "#8C52FF", textTransform: "none"}} onTouchStart={handleEdit} onClick={handleEdit}>Edit Block</Button>
                        </DialogActions>
                    </Dialog>


                    <IconButton aria-label="delete" style={{paddingRight: "0px", cursor: 'pointer', color: "white", height: "20px"}} onTouchStart={handleDelete} onClick={handleDelete}>
                        <DeleteIcon />
                    </IconButton>
                    
                    <Checkbox checked={completed ? true : false} onChange={onCheckboxChange} onTouchStart={onCheckboxChange} style={{color: "#ffffff", paddingLeft: "5px"}} />
                </Grid>
            </Grid>
        </Draggable>
    );
}

export default TimeBlock;