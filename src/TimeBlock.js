import * as React from 'react';
import { Typography, Grid, Button } from '@mui/material';
import Draggable from 'react-draggable'; 

function TimeBlock(props) {
    let height = props.duration*42 + Math.ceil(1.2*(props.duration-1)+Math.floor(props.duration)-1);
    const heightPixels = String(height) + "px";

    let lineHeight = height - 2;
    const lineHeightPixels = String(lineHeight) + "px";

    const [completed, setCompleted] = React.useState(props.completed);
    const [yPos, setYPos] = React.useState(props.yPos);

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
            {
            // marginLeft: "2.95%", width: "31.5%",
            }
            <Grid container sx={{ width: { xs: '66%', sm: '65%', md: '31.5%', lg: '31.5%' }, marginLeft: { xs: '6%', sm: '6%', md: '2.95%', lg: '2.95%' } }} style={{position: "absolute", height: heightPixels, backgroundColor: props.color, textDecorationColor: "#ffffff"}} onClick={handleClick}>
                <Grid item xs={6} sm={7} md={8} lg={8} align="left" style={{lineHeight: lineHeightPixels}}>
                    <Typography variant="h7" style={{color: "white", paddingLeft: "5px", textDecoration: completed ? "line-through" : "", textDecorationColor: "#ffffff", textDecorationThickness: "0.2em"}}>&nbsp;{props.name}&nbsp;</Typography>    
                </Grid>
                <Grid item xs={4} sm={3} md={2} lg={2} align="right" style={{lineHeight: lineHeightPixels}}>
                    <Typography variant="h7" style={{color: "white", paddingRight: "10px", fontSize: "0.7em"}}>{props.duration} {props.duration > 1 ? "hrs" : "hr"}</Typography>
                </Grid>
                <Grid item xs={2} sm={2} md={2} lg={2} align="right" style={{lineHeight: lineHeightPixels}}>
                    <Button onClick={() => handleDelete(props.name)} style={{color: "white", width: "50%", height: "20px"}}>&#10006;</Button>
                </Grid>
            </Grid>
        </Draggable>
    );
}

export default TimeBlock;