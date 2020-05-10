import React, { Component } from "react";

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockIcon from '@material-ui/icons/Lock';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { sha256 } from 'js-sha256';

const useStyles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#0058a3",
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    maxWidth: '40rem',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  onSavePassWord = (e) => {
    e.preventDefault();
    console.log('onSavePassWord');
    var email = document.getElementById('email').value;
    var password = sha256(document.getElementById('password').value);
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(email)) {
      console.log(email, "valid");
    } else {
      console.log(email, "not valid");
    }
    if (password === sha256("")) {
      console.log(password, "not valid");
    } else {
      console.log(password, "valid");
    }
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.paper} >
        <Avatar className={classes.avatar}>
          <LockIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            style={{ backgroundColor: "#0058a3", color: "#FFFFFF" }}
            className={classes.submit}
            onClick={this.onSavePassWord}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/SignUp" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}

export default withStyles(useStyles)(SignIn)