import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import './styles/App.css';
import DayBlock from './components/DayBlock';
import logo from './assets/TimeBlock.png';


const App = () => {

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
        <Grid item xs={2} sm={2} md={2} lg={2} align="center">
          <img src={logo} alt="logo" style={{paddingLeft: "20px", width: "120px"}} />
        </Grid>
        <Grid item xs={1} sm={4} md={4} lg={4} />
        <Grid item xs={9} sm={6} md={6} lg={6} align="right">
          <Typography align="right" variant="h6" style={{paddingRight: "45px", color: "#aaaaaa"}}><span style={{color: "#eeeeee"}}>{currDay}</span><span style={{fontSize: "15px"}}>&nbsp;&nbsp;&nbsp;&nbsp;{currMonth}/{currDate}/2022</span></Typography>
        </Grid>
        <Grid item xs={12} />
        <DayBlock />
        <Grid item xs={12} align="center">
          <Typography align="center" variant="h7" style={{color: "#aaaaaa"}}>Version 1.0.5 &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</Typography>
          <Typography align="center" variant="h7" style={{color: "#aaaaaa"}}>Brooks Development Co.</Typography>
        </Grid>
        <Grid item xs={12} sx={{ height: { xs: '90px', sm: '0px', md: '0px', lg: '0px' } }} />
      </Grid>
      
    </div>
  );
}

export default App;