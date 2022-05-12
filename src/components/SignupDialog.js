import {Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Grid, TextField, Button } from '@mui/material';
import { inputLabelClasses } from "@mui/material/InputLabel";

const SignupDialog = props => {
    return (
        <Dialog open={props.open} onClose={props.handleClose}>
            <DialogTitle style={{ color: "#8C52FF" }}>Create an Account</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Please input your first and last name
                </DialogContentText>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="firstName"
                            label="First Name"
                            type="text"
                            fullWidth
                            variant="standard"
                            focused={false}
                            value={props.firstName}
                            onChange={props.setFirstName}
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
                    <Grid item xs={6}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="lastName"
                            label="Last Name"
                            type="text"
                            fullWidth
                            variant="standard"
                            focused={false}
                            value={props.lastName}
                            onChange={props.setLastName}
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
                        Please input your email
                    </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="email"
                            label="Email"
                            type="text"
                            fullWidth
                            variant="standard"
                            focused={false}
                            value={props.email}
                            onChange={props.setEmail}
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
                        Please create a username
                    </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="username"
                            label="Username"
                            type="text"
                            fullWidth
                            variant="standard"
                            focused={false}
                            value={props.newUsername}
                            onChange={props.setNewUsername}
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
                    <Grid item xs={6}>
                    <DialogContentText>
                        Please create a password
                    </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="password"
                            label="Password"
                            type="text"
                            fullWidth
                            variant="standard"
                            focused={false}
                            value={props.newPassword}
                            onChange={props.setNewPassword}
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
                    <Grid item xs={6}>
                    <DialogContentText>
                        Confirm password
                    </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="confirmPassword"
                            label="Password"
                            type="text"
                            fullWidth
                            variant="standard"
                            focused={false}
                            value={props.confirmPassword}
                            onChange={props.setConfirmPassword}
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
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button style={{color: "#8C52FF", textTransform: "none"}} onClick={props.handleClose}>Cancel</Button>
                <Button variant="contained" style={{backgroundColor: "#8C52FF", textTransform: "none"}} onClick={props.handleSignup}>Create Account</Button>
            </DialogActions>
        </Dialog>
    );
}

export default SignupDialog;