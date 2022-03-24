import * as React from 'react';
import { Typography, Grid, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, MenuItem } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Draggable from 'react-draggable'; 
import { ColorPicker } from 'mui-color';

function TimeBlock(props) {
    let height = props.duration*42 + Math.ceil(1.2*(props.duration-1)+Math.floor(props.duration)-1);
    const heightPixels = String(height) + "px";

    let lineHeight = height - 2;
    const lineHeightPixels = String(lineHeight) + "px";

    const [strikethrough, setStrikethrough] = React.useState("");
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
                strikethrough === "" ?
                setStrikethrough("line-through") : setStrikethrough("");
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
            <Grid container style={{position: "absolute", marginLeft: "2.95%", width: "31.58%", height: heightPixels, backgroundColor: props.color, textDecorationColor: "#ffffff"}} onClick={handleClick}>
                <Grid item xs={6} sm={7} md={8} lg={8} align="left" style={{lineHeight: lineHeightPixels}}>
                    <Typography variant="h7" style={{color: "white", paddingLeft: "5px", textDecoration: strikethrough, textDecorationColor: "#ffffff", textDecorationThickness: "0.2em"}}>&nbsp;{props.name}&nbsp;</Typography>    
                </Grid>
                <Grid item xs={4} sm={3} md={2} lg={2} align="right" style={{lineHeight: lineHeightPixels}}>
                    <Typography variant="h7" style={{color: "white", paddingRight: "10px", fontSize: "0.7em"}}>{props.duration} {props.duration > 1 ? "hrs" : "hr"}</Typography>
                </Grid>
                <Grid item xs={2} sm={2} md={2} lg={2} align="right" style={{lineHeight: lineHeightPixels}}>
                    <Typography variant="h7" onClick={() => handleDelete(props.name)} style={{color: "white", paddingRight: "10px"}}>&#10006;</Typography>
                </Grid>
            </Grid>
        </Draggable>
    );
}

function DayBlock() {

    const hours = [
        {
            time: "6am",
            num: 6
        }, 
        {
            time: "7am",
            num: 7
        }, 
        {
            time: "8am",
            num: 8
        }, 
        {
            time: "9am",
            num: 9
        }, 
        {
            time: "10am",
            num: 10
        }, 
        {
            time: "11am",
            num: 11
        }, 
        {
            time: "12pm",
            num: 12
        }, 
        {
            time: "1pm",
            num: 13
        }, 
        {
            time: "2pm",
            num: 14
        }, 
        {
            time: "3pm",
            num: 15
        }, 
        {
            time: "4pm",
            num: 16
        }, 
        {
            time: "5pm",
            num: 17
        }, 
        {
            time: "6pm",
            num: 18
        }, 
        {
            time: "7pm",
            num: 19
        }, 
        {
            time: "8pm",
            num: 20
        }, 
        {
            time: "9pm",
            num: 21
        }, 
        {
            time: "10pm",
            num: 22
        }, 
        {
            time: "11pm",
            num: 23
        }, 
        {
            time: "12am",
            num: 0
        }, 
    ];
    const hoursInputs = [
        {
            value: 0,
            label: 0
        },
        {
            value: 1,
            label: 1
        },
        {
            value: 2,
            label: 2
        },
        {
            value: 3,
            label: 3
        },
        {
            value: 4,
            label: 4
        },
        {
            value: 5,
            label: 5
        },
        {
            value: 6,
            label: 6
        },
        {
            value: 7,
            label: 7
        },
        {
            value: 8,
            label: 8
        },
        {
            value: 9,
            label: 9
        },
        {
            value: 10,
            label: 10
        },
        {
            value: 11,
            label: 11
        },
        {
            value: 12,
            label: 12
        }
    ];
    const minutesInputs = [
        {
            value: 0,
            label: 0
        },
        {
            value: 15,
            label: 15
        },
        {
            value: 30,
            label: 30
        },
        {
            value: 45,
            label: 45
        }
    ];
    const times = [];
    const items = [];

    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState("");
    const [hrs, setHours] = React.useState(1);
    const [mins, setMinutes] = React.useState(0);
    const [color, setColor] = React.useState("#ff0000");
    const [blocks, setBlocks] = React.useState(JSON.parse(localStorage.getItem("blocks")));
    const [currNum, setCurrNum] = React.useState(new Date().getHours());

    React.useEffect(() => {
        const interval = setInterval(() => setCurrNum(new Date().getHours()), 10000);
        return () => {
            clearInterval(interval);
        }
    }, []);
    
    for (let i = 0; i < hours.length; i++) {
        times.push(
            [<Grid item xs={11} style={{height: "40px"}}>
                <Typography variant="h7" style={{color: "#eeeeee"}}>{hours[i].time}</Typography>
            </Grid>,
            <Grid item xs={12} style={{height: "4px"}}></Grid>]
        );
    }

    for (let i = 0; i < hours.length-1; i++) {
        let currentColor = "transparent";
        if (currNum === hours[i].num && currNum !== 0) {
            currentColor = "#04aa6d";
        }

        if (i === 0) {
            items.push(
                [<Grid item xs={1} style={{height: "44px", width: "1px", backgroundColor: currentColor, borderBottom: "1px solid #eeeeee", borderTop: "1px solid #eeeeee"}}>
                    <div style={{height: "10px", width:"25%", marginLeft: "75%", borderBottom: "1px solid #eeeeee"}}></div>
                    <div style={{height: "10px", width:"50%", marginLeft: "50%", borderBottom: "1px solid #eeeeee"}}></div>
                    <div style={{height: "10px", width:"25%", marginLeft: "75%", borderBottom: "1px solid #eeeeee"}}></div>
                </Grid>,
                <Grid item xs={11} style={{height: "44px", backgroundColor: "#222222", borderBottom: "1px solid #eeeeee", borderTop: "1px solid #eeeeee"}}></Grid>]
            );
        } else {
            items.push(
                [<Grid item xs={1} style={{height: "44px", width: "1px", backgroundColor: currentColor, borderBottom: "1px solid #eeeeee"}}>
                    <div style={{height: "10px", width:"25%", marginLeft: "75%", borderBottom: "1px solid #eeeeee"}}></div>
                    <div style={{height: "10px", width:"50%", marginLeft: "50%", borderBottom: "1px solid #eeeeee"}}></div>
                    <div style={{height: "10px", width:"25%", marginLeft: "75%", borderBottom: "1px solid #eeeeee"}}></div>
                </Grid>,
                <Grid item xs={11} style={{height: "44px", backgroundColor: "#222222", borderBottom: "1px solid #eeeeee"}}></Grid>]
            );
        }
    }
    items.unshift(
        <Grid item xs={12} style={{height: "12px"}}></Grid>
    );

    const writeFile = newBlocks => {
        localStorage.setItem("blocks", JSON.stringify(newBlocks));
    }

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

    const addBlock = () => {
        setOpen(false);
        let duration = hrs;
        if (mins === 15) {
            duration += 0.25;
        } else if (mins === 30) {
            duration += 0.5;
        } else if (mins === 45) {
            duration += 0.75;
        }
        const newBlock = {
            name: name,
            hours: hrs,
            minutes: mins,
            duration: duration,
            color: color,
            yPos: 0
        }
        blocks.push(newBlock);
        setBlocks(blocks);
        writeFile(blocks);

        // reset dialog states
        setName("");
        setHours(1);
        setMinutes(0);
        setColor("#ff0000");
    }

    const updateCoords = (name, newYPos) => {
        let newBlocks = [];
        for (let i = 0; i < blocks.length; i++) {
            let newBlock = blocks[i];
            if (newBlock.name === name) {
                newBlock.yPos = newYPos;
            }
            newBlocks.push(newBlock);
        }
        setBlocks(newBlocks);
        writeFile(newBlocks);
    }

    const handleDelete = name => {
        const newBlocks = blocks.filter(block => block.name !== name);
        setBlocks(newBlocks);
        writeFile(newBlocks);
    }

    return (
    <Grid container spacing={3}>
        <Grid item xs={1}/>
        <Grid item xs={5}>
            <Grid container spacing={0}>
                <Grid item xs={2}>
                    <Grid container>
                        {times}
                    </Grid>
                </Grid>
                <Grid item xs={10}>
                    <Grid container>
                        {items}
                        <Grid item xs={12} style={{marginTop: "-793px"}} className="offsetParent">
                            <div style={{height: '2px'}}></div>
                            {
                            blocks.map(newBlock => (
                                <TimeBlock key={newBlock.name} name={newBlock.name} hours={newBlock.hours} yPos={newBlock.yPos} 
                                           minutes={newBlock.minutes} duration={newBlock.duration} 
                                           color={newBlock.color} handleDelete={handleDelete} updateCoords={updateCoords} />    
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={6} >
          {
            // area to create events
          }
          <Grid container spacing={0}>
              <Grid item xs={12} style={{height: "260px"}} />
              <Grid item xs={12}>
                <Typography align="center" variant="h6" style={{color: "#eeeeee"}}>Add blocks to build your day</Typography>
              </Grid>
              <Grid item xs={12} style={{height: "50px"}} />
              <Grid item xs={3} />
              <Grid item xs={6}>
                    <Button 
                        variant="contained" 
                        endIcon={<AddIcon />} 
                        style={{backgroundColor: "#eeeeee", color: "black", height: "50px", textTransform: "none", fontWeight: "bold"}} 
                        fullWidth
                        onClick={handleClickOpen}>
                        Add New Block 
                    </Button>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Add New Block</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Please input a name for your block
                            </DialogContentText>
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
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <DialogContentText>
                                        Estimate about how long this block will take to complete
                                    </DialogContentText>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField 
                                        select
                                        id="hourSelect"
                                        label="Hours"
                                        value={hrs}
                                        onChange={handleChangeHours}
                                        fullWidth
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
                                    >
                                        {minutesInputs.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item xs={6}>
                                    <DialogContentText>
                                        Pick a color for your block
                                    </DialogContentText>
                                </Grid>
                                <Grid item xs={6}>
                                    <ColorPicker value={color} onChange={handleChangeColor}  />
                                </Grid>
                            </Grid>
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button variant="contained" onClick={addBlock}>Add Block</Button>
                        </DialogActions>
                    </Dialog>
              </Grid>
              <Grid item xs={3} />
              <Grid item xs={12} style={{height: "320px"}} />
              <Grid item xs={1} />
              <Grid item xs={1}>
                  <Typography variant="h4" style={{color: "red"}}>*</Typography>
              </Grid>
              <Grid item xs={8} align="left">
                <Typography align="left" variant="h7" style={{color: "#eeeeee"}}>Drag the blocks to adjust the times, click the 'x' to delete a block, and double click a block to complete it.</Typography>
              </Grid>
              <Grid item xs={2} />
          </Grid>
        </Grid>
    </Grid>
    
    );
}
  
export default DayBlock;
  