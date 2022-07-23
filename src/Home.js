// import { useState } from 'react';
import { Typography, Grid } from '@mui/material';
import './styles/App.css';
import logo from './assets/TimeBlock.png';
import showcase from './assets/showcase (1).png';
import InfoCard from './components/InfoCard';
// import LoginDialog from './components/LoginDialog';
// import SignupDialog from './components/SignupDialog';
import { Link } from "react-router-dom";

const Home = () => {
    // const [loggedIn, setLoggedIn] = React.useState(localStorage.getItem("loggedIn") ? JSON.parse(localStorage.getItem("loggedIn")) : false);
    // const [loggedIn, setLoggedIn] = React.useState(false);
    // const [user, setUser] = React.useState(null);
    // const [loginOpen, setLoginOpen] = useState(false);
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    
    // const [signupOpen, setSignupOpen] = useState(false);
    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [email, setEmail] = useState("");
    // const [newUsername, setNewUsername] = useState("");
    // const [newPassword, setNewPassword] = useState("");
    // const [confirmPassword, setConfirmPassword] = useState("");
    
    // const handleLoginOpen = () => {
    //     setLoginOpen(true);
    // }

    // const handleLoginClose = () => {
    //     setLoginOpen(false);
    // }

    // const handleChangeUsername = e => {
    //     setUsername(e.target.value);
    // }

    // const handleChangePassword = e => {
    //     setPassword(e.target.value);
    // }

    // const loginUser = () => {
    //     setLoginOpen(false);
    //     console.log(username, password);
    //     // login to firebase and check if user exists
    //     // if so, redirect to dashboard with user's data
    //     setUsername("");
    //     setPassword("");
    // }

    // const handleSignupOpen = () => {
    //     // open pop up, use firebase to create new user
    //     setSignupOpen(true);
    // }

    // const handleSignupClose = () => {
    //     setSignupOpen(false);
    // }

    // const handleChangeFirstName = e => {
    //     setFirstName(e.target.value);
    // }

    // const handleChangeLastName = e => {
    //     setLastName(e.target.value);
    // }

    // const handleChangeEmail = e => {
    //     setEmail(e.target.value);
    // }

    // const handleChangeNewUsername = e => {
    //     setNewUsername(e.target.value);
    // }

    // const handleChangeNewPassword = e => {
    //     setNewPassword(e.target.value);
    // }

    // const handleChangeConfirmPassword = e => {
    //     setConfirmPassword(e.target.value);
    // }

    // const createNewUser = () => {
    //     if (newPassword === confirmPassword) {
    //         console.log(firstName, lastName, email, newUsername, newPassword);
    //         setSignupOpen(false);
    //         setFirstName("");
    //         setLastName("");
    //         setEmail("");
    //         setNewUsername("");
    //         setNewPassword("");
    //         setConfirmPassword("");
    //     }
    // }

    return (
        <div className="App">
        <Grid container spacing={3}>
            <Grid item xs={12} style={{height: "40px"}} /> 
            <Grid item xs={12} sm={3} md={2} lg={2} align="center">
                <img src={logo} alt="logo" style={{marginLeft: "10px", width: "120px", boxShadow: "0px 0px 25px 20px rgba(0,0,0,0.97)"}} />
            </Grid>
            <Grid item xs={12} sm={1} md={5} lg={6} />
            <Grid item xs={12} sm={8} md={5} lg={4}>
                {/* <Link 
                    style={{fontWeight: "bold", textTransform: "none", borderRadius: "25px", paddingLeft: "30px", paddingRight: "30px", color: "#ffffff", textDecoration: "none"}}
                    to={"/TimeBlock/dashboard"}>
                    Demo
                </Link> */}

                
                {/* LOGIN
                <Button 
                    variant="contained" 
                    style={{backgroundColor: "#8C52FF", fontWeight: "bold", textTransform: "none", marginLeft: "10px", borderRadius: "25px", paddingLeft: "30px", paddingRight: "30px"}}
                    onClick={handleLoginOpen}
                    disabled >
                    Log In
                </Button>
                <LoginDialog open={loginOpen} handleOpen={handleLoginOpen} handleClose={handleLoginClose} username={username} setUsername={handleChangeUsername} password={password} setPassword={handleChangePassword} handleLogin={loginUser} />

                {/* SIGNUP 
                <Button 
                    variant="outlined" 
                    style={{borderColor: "#8C52FF", color: "#8C52FF", marginLeft: "10px", fontWeight: "bold", textTransform: "none", borderRadius: "25px", paddingLeft: "30px", paddingRight: "30px"}}
                    onClick={handleSignupOpen} 
                    disabled>
                    Sign Up
                </Button>
                <SignupDialog open={signupOpen} handleOpen={handleSignupOpen} handleClose={handleSignupClose} firstName={firstName} setFirstName={handleChangeFirstName} lastName={lastName} setLastName={handleChangeLastName} email={email} setEmail={handleChangeEmail} 
                              newUsername={newUsername} setNewUsername={handleChangeNewUsername} newPassword={newPassword} setNewPassword={handleChangeNewPassword} confirmPassword={confirmPassword} setConfirmPassword={handleChangeConfirmPassword} handleSignup={createNewUser} />

                */}
                
                
            </Grid>

            <Grid item xs={12} stlye={{height: "10px"}} />

            <Grid item xs={12} sm={12} md={6} lg={6} container>
            <Grid item xs={12} style={{height: "250px"}} />

            <Grid item xs={1} sm={1} md={1} lg={2} />
            <Grid item xs={11} sm={11} md={11} lg={10} align="left">
                <Typography variant="h4" style={{color: "#eeeeee", fontWeight: "bold"}}>Welcome to TimeBlock</Typography>
            </Grid>
            
            <Grid item xs={12} style={{height: "15px"}} />

            <Grid item xs={1} sm={1} md={1} lg={2}/>
            <Grid item xs={11} sm={11} md={11} lg={10} align="left">
                <Typography variant="h5" style={{color: "#8C52FF"}}>The best way to keep track of your day</Typography>
            </Grid>

            <Grid item xs={12} style={{height: "50px"}} />

            <Grid item xs={1} sm={1} md={1} lg={2} />
            <Grid item xs={11} sm={11} md={11} lg={10} align="left">
                <Link to={"/TimeBlock/dashboard"} style={{backgroundColor: "#8C52FF", textDecoration: "none", color: "#ffffff", fontWeight: "bold", textTransform: "none", borderRadius: "25px", paddingLeft: "30px", paddingRight: "30px", paddingTop: "10px", paddingBottom: "10px"}}>Get Started</Link>
            </Grid>
            <Grid item xs={12} style={{height: "420px"}} />
            </Grid>
            <Grid item xs={0} sm={0} md={6} lg={6} sx={{display: {xs: 'none', sm: 'none', md: 'block', lg: 'block'}}} container style={{height: "650px"}}>
            <Grid item xs={12} style={{height: "100px"}} />
            <Grid item xs={12} style={{marginLeft: "90px"}}>
                <img src={showcase} alt={"showcase"} style={{border: "5px solid #8C52FF", borderRadius: "5px"}} />
            </Grid>
            </Grid>
            <Grid item xs={12} container>

            <Grid item xs={1}/>
            <Grid item xs={10} container spacing={5}>
                {/* Container for InfoCards */}
                <InfoCard img={1} title="De-Clutter Your Day" subtitle="Make your day easier by timeblocking your schedule. TimeBlock makes use of the extremely popular 'timeblocking' technique to ensure that you move through your day in the easiest and most structured way possible. "/>
                <InfoCard img={2} title="Improve Time-Management" subtitle="Increase productivity and time management effectively. Studies show that timeblocking your day leads to you getting all your work done and even finding time to spare. AKA, more free time for you. It's a win win." />
                <InfoCard img={3} title="Easy To Use" subtitle="The blocks snap to a grid to make it adjust to different time intervals. With a simple and elegant user interface, it is easier than ever to plan out your day and get things done. Here's to never getting caught up!" />
                <InfoCard img={4} title="Create Blocks With Ease" subtitle="Easily click a button to add a new block to your day. Add a title, an estimated duration, and even pick any color to create your block. Durations can range from just 15 minutes to over 12 hours, depending on what you have going on." />
            </Grid>
            <Grid item xs={1} />
            </Grid>
        </Grid>
        
        </div>
    );
}

export default Home;