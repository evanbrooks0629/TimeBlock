import * as React from 'react';
import { Typography, Grid, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, MenuItem } from '@mui/material';
import { inputLabelClasses } from "@mui/material/InputLabel";
import AddIcon from '@mui/icons-material/Add';
import { ColorPicker } from 'mui-color';
import TimeBlock from './TimeBlock';
import Times from './times.json';

function DayBlock() {

    const hours = Times.hours;
    const hoursInputs = Times.hoursInputs;
    const minutesInputs = Times.minutesInputs;
    let times = [];
    let items = [];

    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState("");
    const [hrs, setHours] = React.useState(1);
    const [mins, setMinutes] = React.useState(0);
    const [color, setColor] = React.useState("#ff0000");
    const [blocks, setBlocks] = React.useState(localStorage.getItem("blocks") ? JSON.parse(localStorage.getItem("blocks")) : []);
    //const [blocks, setBlocks] = React.useState(sessionStorage.getItem("blocks") ? JSON.parse(sessionStorage.getItem("blocks")) : []);
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
                <Grid item xs={11} style={{height: "44px", backgroundColor: "transparent", borderBottom: "1px solid #eeeeee", borderTop: "1px solid #eeeeee", borderRight: "1px solid #eeeeee"}}></Grid>]
            );
        } else {
            items.push(
                [<Grid item xs={1} style={{height: "44px", width: "1px", backgroundColor: currentColor, borderBottom: "1px solid #eeeeee"}}>
                    <div style={{height: "10px", width:"25%", marginLeft: "75%", borderBottom: "1px solid #eeeeee"}}></div>
                    <div style={{height: "10px", width:"50%", marginLeft: "50%", borderBottom: "1px solid #eeeeee"}}></div>
                    <div style={{height: "10px", width:"25%", marginLeft: "75%", borderBottom: "1px solid #eeeeee"}}></div>
                </Grid>,
                <Grid item xs={11} style={{height: "44px", backgroundColor: "transparent", borderBottom: "1px solid #eeeeee", borderRight: "1px solid #eeeeee"}}></Grid>]
            );
        }
    }
    items.unshift(
        <Grid item xs={12} style={{height: "12px"}}></Grid>
    );

    const writeData = newBlocks => {
        localStorage.setItem("blocks", JSON.stringify(newBlocks));
        //sessionStorage.setItem("blocks", JSON.stringify(newBlocks));
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
            yPos: 0,
            completed: false
        }
        blocks.push(newBlock);
        setBlocks(blocks);
        writeData(blocks);

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
        writeData(newBlocks);
    }

    const updateCompleted = (name, newCompleted) => {
        let newBlocks = [];
        for (let i = 0; i < blocks.length; i++) {
            let newBlock = blocks[i];
            if (newBlock.name === name) {
                newBlock.completed = newCompleted;
            }
            newBlocks.push(newBlock);
        }
        setBlocks(newBlocks);
        writeData(newBlocks);
    }

    const handleDelete = name => {
        const newBlocks = blocks.filter(block => block.name !== name);
        setBlocks(newBlocks);
        writeData(newBlocks);
    }

    return (
    <Grid container spacing={3}>
        <Grid item xs={0} sm={1} md={1} lg={1} sx={{ display: {xs: 'none', sm: 'block', md: 'block', lg: 'block'} }} />
        <Grid item xs={12} sm={10} md={7} lg={5} sx={{ paddingRight: {xs: '10px'} }}>
            <Grid container spacing={0}>
                <Grid item xs={2}>
                    <Grid container>
                        {times}
                    </Grid>
                </Grid>
                <Grid item xs={10}>
                    <Grid container>
                        {items}
                        <Grid item xs={12} style={{marginTop: "-793px", position: "relative"}} className="offsetParent">
                            <div style={{height: '2px'}}></div>
                            {
                            blocks.map(newBlock => (
                                <TimeBlock key={newBlock.name} name={newBlock.name} hours={newBlock.hours} yPos={newBlock.yPos} 
                                           minutes={newBlock.minutes} duration={newBlock.duration} color={newBlock.color} completed={newBlock.completed}
                                           handleDelete={handleDelete} updateCoords={updateCoords} updateCompleted={updateCompleted} />    
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={0} sm={1} md={0} lg={0} sx={{ display: { xs: 'none', sm: 'block', md: 'none', lg: 'none' } }} />
        <Grid item xs={12} sm={12} md={4} lg={6} >
          {
            // area to create events
          }
          <Grid container spacing={0}>
              <Grid item xs={12} sx={{ height: { xs: '0px', sm: '10px', md: '260px', lg: '260px' } }} />
              <Grid item xs={12} sx={{ display: { xs: 'none', sm: 'block', md: 'block', lg: 'block' } }}>
                <Typography align="center" variant="h6" style={{color: "#eeeeee"}}>Add blocks to build your day</Typography>
              </Grid>
              <Grid item xs={12} sx={{ height: { xs: '0px', sm: '50px', md: '50px', lg: '50px' } }} />
              <Grid item xs={3} sm={3} md={1} lg={3} />
              <Grid item xs={6} sm={6} md={10} lg={6} align="center">
                    <Button 
                        variant="contained" 
                        endIcon={<AddIcon />} 
                        sx={{ position: {xs: 'fixed', sm: 'static', md: 'static', lg: 'static'}, bottom: {xs:'20px'}, left: {xs:'10%'}, width: {xs: '80%'}}}
                        style={{backgroundColor: "#eeeeee", color: "black", height: "50px", textTransform: "none", fontWeight: "bold"}} 
                        fullWidth
                        onClick={handleClickOpen}>
                        Add New Block 
                    </Button>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle style={{ color: "#8C52FF" }}>Add New Block</DialogTitle>
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
                                <Grid item xs={6}>
                                    <DialogContentText>
                                        Pick a color for your block
                                    </DialogContentText>
                                </Grid>
                                <Grid item xs={6}>
                                    <ColorPicker value={color} onChange={handleChangeColor} 
                                    sx={{
                                        "& .MuiInputBase-root:hover": {
                                          "& > fieldset": {
                                            borderColor: "#8C52FF !important"
                                          }
                                        },
                                        "& .Mui-focused": {
                                            "& > fieldset": {
                                              borderColor: "#8C52FF"
                                            }
                                        }
                                    }}
                                    />
                                </Grid>
                            </Grid>
                        </DialogContent>
                        <DialogActions>
                            <Button style={{color: "#8C52FF", textTransform: "none"}} onClick={handleClose}>Cancel</Button>
                            <Button variant="contained" style={{backgroundColor: "#8C52FF", textTransform: "none"}} onClick={addBlock}>Add Block</Button>
                        </DialogActions>
                    </Dialog>
              </Grid>
              <Grid item xs={3} sm={3} md={1} lg={3} />
              <Grid item xs={12} sx={{ height: { xs: '0px', sm: '50px', md: '320px', lg: '320px' } }}/>
              <Grid item xs={2} />
              <Grid item xs={1} align="center">
                  <Typography variant="h4" style={{color: "red"}}>*</Typography>
              </Grid>
              <Grid item xs={7} align="left">
                <Typography align="left" variant="h7" style={{color: "#eeeeee"}} >Drag the blocks to adjust the times, click the 'x' to delete a block, and double click a block to complete it.</Typography>
              </Grid>
              <Grid item xs={2} />
              <Grid item xs={12} sx={{ height: { xs: '50px', sm: '20px', md: '0px', lg: '0px' } }} />
          </Grid>
        </Grid>
    </Grid>
    
    );
}
  
export default DayBlock;