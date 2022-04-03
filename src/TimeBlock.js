import * as React from 'react';
import { Typography, Grid, IconButton, Checkbox } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Draggable from 'react-draggable'; 

function TimeBlock(props) {
    let height = props.duration*42 + Math.ceil(1.2*(props.duration-1)+Math.floor(props.duration)-1);
    const heightPixels = String(height) + "px";

    let lineHeight = height - 2;
    const lineHeightPixels = String(lineHeight) + "px";

    const [completed, setCompleted] = React.useState(props.completed);
    const [yPos, setYPos] = React.useState(props.yPos);
    const [checked, setChecked] = React.useState(props.completed);

    const handleDelete = name => {
        props.handleDelete(name);
    }

    const handleClick = e => {
        switch (e.detail) {
            case 1:
                break;
            case 2:
                // double click
                props.updateCompleted(props.name, !completed);
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
        props.updateCoords(props.name, yPos + y);
    }

    const onCheckboxChange = () => {
        props.updateCompleted(props.name, !completed);
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
                <Grid item xs={7} sm={7} md={7} lg={7} align="left" style={{lineHeight: lineHeightPixels, width: "100%", overflow: "hidden", textOverflow: "ellipsis", color: "#ffffff"}}>
                    <Typography variant="h7" style={{width: "100%", color: "white", paddingLeft: "5px", textDecoration: completed ? "line-through" : "", textDecorationColor: "#ffffff", textDecorationThickness: "0.2em"}} noWrap>&nbsp;{props.name}&nbsp;</Typography>    
                </Grid>
                <Grid item xs={2} sm={2} md={2} lg={2} align="right" style={{lineHeight: lineHeightPixels}}>
                    <Typography variant="h7" style={{color: "white", fontSize: "0.7em"}}>{props.duration} {props.duration > 1 ? "hrs" : "hr"}</Typography>
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3} align="right" style={{lineHeight: lineHeightPixels}}>
                    <IconButton aria-label="delete" style={{paddingRight: "0px", cursor: 'pointer', color: "white", height: "20px"}} onTouchStart={() => handleDelete(props.name)} onClick={() => handleDelete(props.name)}>
                        <CloseIcon />
                    </IconButton>
                    <Checkbox checked={completed ? true : false} onChange={onCheckboxChange} onTouchStart={onCheckboxChange} style={{color: "#ffffff", paddingLeft: "5px"}} />
                </Grid>
            </Grid>
        </Draggable>
    );
}

export default TimeBlock;