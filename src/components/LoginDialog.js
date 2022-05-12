import {Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Grid, TextField, Button } from '@mui/material';
import { inputLabelClasses } from "@mui/material/InputLabel";

const LoginDialog = props => {
    return (
        <Dialog open={props.open} onClose={props.handleClose}>
            <DialogTitle style={{ color: "#8C52FF" }}>Log In</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Please input your username 
                </DialogContentText>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="username"
                            label="Username"
                            type="text"
                            fullWidth
                            variant="standard"
                            focused={false}
                            value={props.username}
                            onChange={props.setUsername}
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
                        Please input your password
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
                            value={props.password}
                            onChange={props.setPassword}
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
                <Button variant="contained" style={{backgroundColor: "#8C52FF", textTransform: "none"}} onClick={props.handleLogin}>Log In</Button>
            </DialogActions>
        </Dialog>
    );
}

export default LoginDialog;