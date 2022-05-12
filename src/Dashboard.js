import * as React from 'react';
import { Grid, Typography, Button } from '@mui/material';
import './styles/App.css';
import DayBlock from './components/DayBlock';
import logo from './assets/TimeBlock.png';

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
        <Grid item xs={12} style={{height: "30px"}} /> 
        <Grid item xs={5} sm={2} md={2} lg={2} align="center">
          <img src={logo} alt="logo" style={{marginLeft: "20px", width: "120px", boxShadow: "0px 0px 12px 10px rgba(0,0,0,0.97)"}} />
        </Grid>
        <Grid item xs={4} sm={6} md={6} lg={6} align="right">
          <Typography align="right" variant="h6" style={{color: "#aaaaaa", marginLeft: "5px"}}><span style={{fontSize: "15px"}}>{currDay}&nbsp;&nbsp;{currMonth}/{currDate}</span></Typography>
        </Grid>
        <Grid item xs={3} sm={4} md={4} lg={4} align="right">
          <Button variant="contained" 
                  style={{backgroundColor: "#8C52FF", fontWeight: "bold", textTransform: "none", borderRadius: "25px", marginRight: "10px"}}
                  href="/TimeBlock/" >
                  Home
          </Button>
        </Grid>
        <DayBlock />
        <Grid item xs={12} align="center">
          <Typography align="center" variant="h7" style={{color: "#aaaaaa"}}>Version 1.1.3 &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</Typography>
          <Typography align="center" variant="h7" style={{color: "#aaaaaa"}}>Brooks Development Co.</Typography>
        </Grid>
        <Grid item xs={12} sx={{ height: { xs: '90px', sm: '0px', md: '0px', lg: '0px' } }} />
      </Grid>
      
    </div>
  );
}

export default Dashboard;