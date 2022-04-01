import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import './App.css';
import DayBlock from './DayBlock';
import logo from './TimeBlock.png';

function App() {
  // get day of week, month, and day of month

  const [currDay, setWeekDay] = React.useState("");
  const [currMonth, setMonth] = React.useState("");
  const [currDate, setDate] = React.useState("");
  const [suffix, setSuffix] = React.useState("");

  const refreshDate = () => {
    const date = new Date();
    let weekday = "";
    let month = "";
    let day = date.getDate().toString();
    let ending = "";

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

    switch (date.getMonth()) {
      case 0:
        month = "January";
        break;
      case 1:
        month = "February";
        break;
      case 2:
        month = "March";
        break;
      case 3:
        month = "April";
        break;
      case 4:
        month = "May";
        break;
      case 5:
        month = "June";
        break;
      case 6:
        month = "July";
        break;
      case 7:
        month = "Auguest";
        break;
      case 8:
        month = "September";
        break;
      case 9:
        month = "October";
        break;
      case 10:
        month = "November";
        break;
      case 11:
        month = "December";
        break;
      default:
        break;
    }

    console.log(day.charAt(day.length-1));
    console.log(day);
    switch (day.charAt(day.length-1)) {
      case "1":
        if (day !== 11) 
          ending = "st";
        else
          ending = "th";
        break;
      case "2":
        if (day !== 12)
          ending = "nd";
        else 
          ending = "th";
        break;
      case "3":
        if (day !== 13)
          ending = "rd";
        else 
          ending = "th";
        break;
      default:
        ending = "th";
    }
    console.log(ending);

    setWeekDay(weekday);
    setMonth(month);
    setDate(day);
    setSuffix(ending);
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
        <Grid item xs={2} sm={2} md={2} lg={2} align="center">
          <img src={logo} alt="logo" style={{paddingLeft: "20px", width: "120px"}} />
        </Grid>
        <Grid item xs={1} sm={4} md={4} lg={4} />
        <Grid item xs={9} sm={6} md={6} lg={6} align="right">
          <Typography align="right" variant="h6" style={{paddingRight: "45px", color: "#aaaaaa"}}>{currDay}, {currMonth} {currDate}{suffix}</Typography>
        </Grid>
        <Grid item xs={12} />
        <DayBlock />
        <Grid item xs={12} align="center">
          <Typography align="center" variant="h7" style={{color: "#aaaaaa"}}>Version 1.0 &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</Typography>
          <Typography align="center" variant="h7" style={{color: "#aaaaaa"}}>Brooks Development Co.</Typography>
        </Grid>
      </Grid>
      
    </div>
  );
}

export default App;
