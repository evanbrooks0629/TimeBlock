import * as React from 'react';
import { Typography, Grid, IconButton, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import Draggable from 'react-draggable'; 
import EditDialog from './EditDialog';

function TimeBlock(props) {
    let height = props.duration*42 + Math.ceil(1.2*(props.duration-1)+Math.floor(props.duration)-1);
    const heightPixels = String(height) + "px";

    let lineHeight = height - 2;
    const lineHeightPixels = String(lineHeight) + "px";

    let marginTop = "0px";
    if (props.duration === 0.25) {
        marginTop = "-16px";
    } else if (props.duration === 0.5) {
        marginTop = "-11px";
    } else if (props.duration === 0.75) {
        marginTop = "-5px";
    } 

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
                    <IconButton aria-label="delete" style={{paddingRight: "0px", cursor: 'pointer', color: "white", height: "20px", marginTop: marginTop}} onTouchStart={handleClickOpen} onClick={handleClickOpen}>
                        <ModeEditIcon />
                    </IconButton>
                    
                    <EditDialog open={open} handleClose={handleClose} name={name} setName={handleChangeName} mins={mins} setMins={handleChangeMinutes} hrs={hrs} setHrs={handleChangeHours} color={color} setColor={handleChangeColor} editBlock={handleEdit}/>

                    <IconButton aria-label="delete" style={{paddingRight: "0px", cursor: 'pointer', color: "white", height: "20px", marginTop: marginTop}} onTouchStart={handleDelete} onClick={handleDelete}>
                        <DeleteIcon />
                    </IconButton>
                    
                    <Checkbox checked={completed ? true : false} onChange={onCheckboxChange} onTouchStart={onCheckboxChange} style={{color: "#ffffff", paddingLeft: "5px", marginTop: marginTop}} />
                </Grid>
            </Grid>
        </Draggable>
    );
}

export default TimeBlock;