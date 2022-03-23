import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import './App.css';
import DayBlock from './DayBlock';
import logo from './TimeBlock.png';

function App() {
  // get day of week, month, and day of month
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

  switch (day.charAt(day.length-1)) {
    case 1:
      if (day !== 11)
        ending = "st";
      else
        ending = "th";
      break;
    case 2:
      if (day !== 12)
        ending = "nd";
      else 
        ending = "th";
      break;
    case 3:
      if (day !== 13)
        ending = "rd";
      else 
        ending = "th";
      break;
    default:
      ending = "th";
      break;
  }

  return (
    <div className="App">
      <Grid container spacing={3}>
        <Grid item xs={12} style={{height: "30px"}} /> 
        <Grid item xs={2} sm={2} md={2} lg={2} align="center">
          <img src={logo} alt="logo" style={{paddingLeft: "20px", width: "120px"}} />
        </Grid>
        <Grid item xs={4} sm={4} md={4} lg={4} />
        <Grid item xs={6} sm={6} md={6} lg={6}>
          <Typography align="right" variant="h6" style={{paddingRight: "45px", color: "#666666"}}>{weekday}, {month} {day}{ending}</Typography>
        </Grid>
        <Grid item xs={12} />
        <DayBlock />
      </Grid>
      
    </div>
  );
}

export default App;
