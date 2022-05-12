import * as React from 'react';
import { Grid, Typography, Button } from '@mui/material';
import './styles/App.css';
import DayBlock from './components/DayBlock';
import logo from './assets/tb-icon.png';

const Dashboard = () => {

  const [currDay, setWeekDay] = React.useState("");
  const [currMonth, setMonth] = React.useState("");
  const [currDate, setDate] = React.useState("");
  
  const refreshDate = () => {
    const date = new Date();
    let weekday = "";
    let day = date.getDate().toString();

    switch (date.getDay()) {
      case 0:
        weekday = "Sunday";
        break;
      case 1:
        weekday = "Monday";
        break;
      case 2:
        weekday = "Tuesday";
        break;
      case 3:
        weekday = "Wednesday";
        break;
      case 4:
        weekday = "Thursday";
        break;
      case 5:
        weekday = "Friday";
        break;
      case 6:
        weekday = "Saturday";
        break;
      default:
        break;
    }

    setWeekDay(weekday);
    setMonth(date.getMonth() + 1);
    setDate(day);
  }

  React.useEffect(() => {
    refreshDate();
  }, []);

  React.useEffect(() => {
    const interval = setInterval(() => refreshDate(), 1000);
    return () => {
        clearInterval(interval);
    }
  }, []);

  return (
    <div className="App">
      <Grid container spacing={3} align="right">
        <Grid item xs={12} /> 
        <Grid item xs={3} sm={3} md={3} lg={3} align="left">
          <img src={logo} alt="logo" style={{width: "30px", marginLeft: "15px", boxShadow: "0px 0px 12px 10px rgba(0,0,0,0.97)"}} />
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6} align="center">
          <Typography variant="h6" style={{color: "#aaaaaa"}}><span style={{fontSize: "15px"}}>&#5130;&nbsp;&nbsp;{currDay}&nbsp;&nbsp;{currMonth}/{currDate}&nbsp;&nbsp;&#5125;</span></Typography>
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={3} align="right">
          <Button variant="contained" style={{backgroundColor: "#8C52FF", fontWeight: "bold", textTransform: "none", borderRadius: "25px", marginRight: "5px"}} href="/TimeBlock/" >Home</Button>
        </Grid>
        <Grid item xs={12} />
        <DayBlock />
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