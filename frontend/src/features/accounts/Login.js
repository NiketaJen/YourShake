import React, {useState} from "react"
import { useHistory } from "react-router";
import {
    Button,
    TextField,
    Grid,
    Paper,
    Typography,
    Link,
    } from "@material-ui/core";

 function Login(props){
    let history = useHistory()

    let handleSubmit = (event) => {
        event.preventDefault();

         fetch("http://localhost:3000/account/login", {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Content-type': "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                username: event.target.username.value,
                password: event.target.password.value
            })
        })
        .then(res => res.json())
        .then(user => {
            console.log(user)
            if(user.username){
                props.setUser(user)
                history.push('/account/useraccount')
            }
            else{
                history.push('/account/login')
            }
        })
    }

    let registerAccount = () => {
        history.push('/account/Signup')
    }

    return(
        <div>
            <Grid container spacing={0} justify="center" direction="row">
                <Grid item>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        spacing={0}
                        className="login-form"
                    >
                    <Paper
                        variant="elevation"
                        elevation={2}
                        className="login-background"
                    >
                <Grid item className="loginHeader">
                    <Typography component="h1" variant="h5">
                    Sign in
                    </Typography>
                    <Typography component="subtitle2" variant="subtitle2">
                    Become a member - enjoy customized product selection and more!
                    </Typography>
                </Grid>
                <Grid item>
                    <form onSubmit={(event) => handleSubmit(event)}>
                <Grid container direction="column" spacing={2}>
                    <Grid item>
                    <TextField
                        type="username"
                        placeholder="Username"
                        fullWidth
                        name="username"
                        variant="outlined"
                        
                        required
                        autoFocus
                    />
                </Grid>
                <Grid item>
                <TextField
                    type="password"
                    placeholder="Password"
                    fullWidth
                    name="password"
                    variant="outlined"
                required
                />
                </Grid>
                <Grid container direction="column" spacing={2}>
                <Grid item>
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        className="button-block"
                    >
                        Sign in
                    </Button>
                    </Grid>
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        color="primary"
                        type="register"
                        className="button-block"
                        onClick={() => registerAccount()}
                    >
                        Become a Member
                    </Button>
                    </Grid>
                </Grid>
               
                </form>
                </Grid>
                <Grid item>
                    <Link href="#" variant="body2">
                    Forgot Password?
                    </Link>
                </Grid>
                </Paper>
                </Grid>
                </Grid>
                </Grid>
        </div>
    )

};
 
export default Login