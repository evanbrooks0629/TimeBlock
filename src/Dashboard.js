import * as React from 'react';
import { Grid, Typography, Button, IconButton } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import './styles/App.css';
import DayBlock from './components/DayBlock';
import generateDays from './data/generateDays';
import logo from './assets/tb-icon.png';

const Dashboard = () => {

  const [days, setDays] = React.useState(generateDays(7,7));
  const [dayIndex, setDayIndex] = React.useState(7);
  
  const refreshDate = () => {
    const new_days = generateDays(7,7);
    setDays(new_days);
  }

  React.useEffect(() => {
    const updateDate = setTimeout(() => {
      console.log("use effect called");
      refreshDate();
    }, 10000);
    return () => clearTimeout(updateDate);
  }, []);

  const getNextDay = () => {
    refreshDate();
    if (dayIndex < 14) {
      setDayIndex(dayIndex + 1);
    }
  }

  const getPrevDay = () => {
    refreshDate();
    if (dayIndex > 0) {
      setDayIndex(dayIndex - 1);
    }
  }

  return (
    <div className="App">
      <Grid container spacing={3} align="right">
        <Grid item xs={12} /> 
        <Grid item xs={1} sm={2} md={2} lg={1} align="left">
          <img src={logo} alt="logo" style={{width: "30px", marginLeft: "15px", boxShadow: "0px 0px 12px 10px rgba(0,0,0,0.97)"}} />
        </Grid>
        <Grid item xs={8} sm={5} md={4} lg={4} align="center">
          <Grid container>
            <Grid item xs={3}>
              <IconButton aria-label="delete" style={{ marginTop: "00px", cursor: 'pointer', color: "#eeeeee", height: "35px", width: "35px", backgroundColor: "#8C52FF"}} onTouchStart={getPrevDay} onClick={getPrevDay}>
                <ChevronLeftIcon />
              </IconButton>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" style={{ color: "#aaaaaa"}}><span style={{fontSize: "15px"}}>&nbsp;&nbsp;{days[dayIndex].label ? days[dayIndex].label : ""}&nbsp;&nbsp;{days[dayIndex].month ? days[dayIndex].month : ""}/{days[dayIndex].date ? days[dayIndex].date : ""}&nbsp;&nbsp;</span></Typography>
            </Grid>
            <Grid item xs={3}>
              <IconButton aria-label="delete" style={{ marginTop: "0px", cursor: 'pointer', color: "#eeeeee", height: "35px", width: "35px", backgroundColor: "#8C52FF"}} onTouchStart={getNextDay} onClick={getNextDay}>
                <ChevronRightIcon />
              </IconButton>
            </Grid>
          </Grid>
          
        </Grid>
        <Grid item xs={3} sm={5} md={6} lg={7} align="right">
          <Button variant="contained" style={{backgroundColor: "#8C52FF", fontWeight: "bold", textTransform: "none", borderRadius: "25px", marginRight: "5px"}} href="/TimeBlock/" >Home</Button>
        </Grid>
        <Grid item xs={12} />
        <DayBlock dayIndex={dayIndex} />
        <Grid item xs={12} align="center">
          <Typography align="center" variant="h7" style={{color: "#aaaaaa"}}>Version 1.1.6 &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</Typography>
          <Typography align="center" variant="h7" style={{color: "#aaaaaa"}}>Brooks Development Co.</Typography>
        </Grid>
        <Grid item xs={12} sx={{ height: { xs: '90px', sm: '0px', md: '0px', lg: '0px' } }} />
      </Grid>
      
    </div>
  );
}

export default Dashboard;