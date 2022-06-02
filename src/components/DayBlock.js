import React, { useState } from 'react';
import { Typography, Grid, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import TimeBlock from './TimeBlock';
import AddDialog from './AddDialog';
import Directions from './Directions';
import GetTimes from '../data/GetTimes';
import GetItems from '../data/GetItems';
import randomKey from '../data/generateKey';
// import firebaseConfig from '../fb/fbConfig';

//import  firebase from 'firebase/compat/app';
//import 'firebase/compat/firestore';
//import 'firebase/compat/auth';


const DayBlock = (props) => {

    let times = GetTimes();
    let items = GetItems();

    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [hrs, setHours] = useState(1);
    const [mins, setMinutes] = useState(0);
    const [color, setColor] = useState("#ff0000");
    const [blocks, setBlocks] = useState(localStorage.getItem("blocks") ? JSON.parse(localStorage.getItem("blocks")) : Array.from(Array(15), () => []));
    const [currDay, setCurrDay] = useState(new Date().getDate());

    React.useEffect(() => {
        // use local storage to keep track of the last day,
        // then use Date.getDate()-i --> i is number of shifts
        const updateDate = setTimeout(() => {
            const checkDate = new Date().getDate();
            // move data 1 day forward
            if (currDay !== checkDate) {
                setCurrDay(checkDate);
                blocks.shift();
                blocks.push([]);
                setBlocks([...blocks]);
                writeData([...blocks]);
            }
        }, 1000);
        return () => clearTimeout(updateDate);
    });

    const writeData = newBlocks => {
        localStorage.setItem("blocks", JSON.stringify(newBlocks));
    }

    const reset = () => {
        setName("");
        setHours(1);
        setMinutes(0);
        setColor("#ff0000");
    }

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
        reset();
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
        const randKey = randomKey();
        const newBlock = {
            key: randKey,
            name: name,
            hours: hrs,
            minutes: mins,
            duration: duration,
            color: color,
            yPos: 0,
            completed: false
        }
        console.log(newBlock);
        let allBlocks = blocks;
        allBlocks[props.dayIndex].push(newBlock);
        setBlocks([...allBlocks]);
        writeData([...allBlocks]);

        // reset dialog states
        reset();
    }

    const updateCoords = (id, newYPos) => {
        let newBlocks = [];
        for (let i = 0; i < blocks[props.dayIndex].length; i++) {
            let newBlock = blocks[props.dayIndex][i];
            if (newBlock.key === id) {
                newBlock.yPos = newYPos;
            }
            newBlocks.push(newBlock);
        }
        let allBlocks = blocks;
        allBlocks[props.TimeBlockdayIndex] = newBlocks;
        setBlocks([...allBlocks]);
        writeData([...allBlocks]);
    }

    const updateCompleted = (id, newCompleted) => {
        let newBlocks = [];
        for (let i = 0; i < blocks[props.dayIndex].length; i++) {
            let newBlock = blocks[props.dayIndex][i];
            if (newBlock.key === id) {
                newBlock.completed = newCompleted;
            }
            newBlocks.push(newBlock);
        }
        let allBlocks = blocks;
        allBlocks[props.dayIndex] = newBlocks;
        setBlocks([...allBlocks]);
        writeData([...allBlocks]);
    }

    const updateEdit = (id, name, hrs, mins, color) => {
        let newBlocks = [];

        let duration = hrs;
        if (mins === 15) {
            duration += 0.25;
        } else if (mins === 30) {
            duration += 0.5;
        } else if (mins === 45) {
            duration += 0.75;
        }

        for (let i = 0; i < blocks[props.dayIndex].length; i++) {
            let newBlock = blocks[props.dayIndex][i];
            if (newBlock.key === id) {
                newBlock.name = name;
                newBlock.hours = hrs;
                newBlock.minutes = mins;
                newBlock.duration = duration;
                newBlock.color = color;
            }
            newBlocks.push(newBlock);
        }
        let allBlocks = blocks;
        allBlocks[props.dayIndex] = newBlocks;
        setBlocks([...allBlocks]);
        writeData([...allBlocks]);
        console.log("edit");
    }

    const handleDelete = key => {
        console.log(key);
        let newBlocks = []
        for (let block of blocks[props.dayIndex]) {
            if (block.key !== key) {
                newBlocks.push(block);
            }
        }
        blocks[props.dayIndex] = newBlocks;

        setBlocks([...blocks]);
        writeData([...blocks]);
        console.log(blocks);
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
                            blocks.length > 0 ? blocks[props.dayIndex].map(newBlock => (
                                <TimeBlock key={newBlock.key} id={newBlock.key} name={newBlock.name} hours={newBlock.hours} yPos={newBlock.yPos} 
                                           minutes={newBlock.minutes} duration={newBlock.duration} color={newBlock.color} completed={newBlock.completed}
                                           handleDelete={handleDelete} updateCoords={updateCoords} updateCompleted={updateCompleted} handleEdit={updateEdit} />    
                            )) : <></>}
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
              <Grid item xs={12} sx={{ height: { xs: '0px', sm: '0px', md: '260px', lg: '260px' } }} />
              <Grid item xs={12} sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' } }}>
                <Typography align="center" variant="h6" style={{color: "#eeeeee"}}>Add blocks to build your day</Typography>
              </Grid>
              <Grid item xs={12} sx={{ height: { xs: '0px', sm: '0px', md: '50px', lg: '50px' } }} />
              <Grid item xs={3} sm={3} md={1} lg={3} />
              <Grid item xs={6} sm={6} md={10} lg={6} align="center">
                    <Button 
                        variant="contained" 
                        endIcon={<AddIcon />} 
                        sx={{ position: {xs: 'fixed', sm: 'fixed', md: 'static', lg: 'static'}, bottom: {xs:'20px'}, left: {xs:'10%', sm: '20%'}, width: {xs: '80%', sm: '60%', md: '80%', lg: '80%'}}}
                        style={{backgroundColor: "#eeeeee", color: "black", height: "50px", textTransform: "none", fontWeight: "bold"}} 
                        fullWidth
                        onClick={handleClickOpen}>
                        Add New Block 
                    </Button>
                    
                    <AddDialog open={open} handleClose={handleClose} name={name} setName={handleChangeName} mins={mins} setMins={handleChangeMinutes} hrs={hrs} setHrs={handleChangeHours} color={color} setColor={handleChangeColor} addBlock={addBlock} />
                    
              </Grid>
              <Directions />
          </Grid>
        </Grid>
    </Grid>
    );
}
  
export default DayBlock;