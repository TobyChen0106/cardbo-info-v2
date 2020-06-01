import React, { Component } from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import MenuIcon from '@material-ui/icons/Menu';
import EjectIcon from '@material-ui/icons/Eject';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from './listItems';

import { Route, Switch } from "react-router-dom";

import Home from "../Home/Home";
import Dashboard from "../Dashboard/Dashboard";
import Offers from "../Offers/Offers";
import Banks from "../Banks/Banks";
import Users from "../Users/Users";
import Setting from "../Setting/Setting";
import CreditCards from "../CreditCards/CreditCards";
import SignIn from "../sign-up-in/SignIn";
import SignUp from "../sign-up-in/SignUp";
import EditPage from "../EditPage/EditPage";
import ViewPage from "../ViewPage/ViewPage";
import NewOffer from "../EditPage/NewOffer";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="">
        Cardbo
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = (theme) => ({
  root: {
    
    display: 'flex',
    position: 'relative',
    background: '#247cb8'
  },
  menuButton: {
    width: '40px',
    height: '40px',

    border: "3px solid #247cb8",
    '&:hover': {
      backgroundColor: "#0058a3",
      border: "3px solid #fff",
    },
    backgroundColor: "#0058a3",
    position: "absolute",
    top: '50%',
    right: '-20px',
  },
  menuButtonHidden: {

  },
  iconButton: {
    transform: 'rotate(90deg)',
    transition: '1s',
  },
  iconButtonHidden: {
    transform: 'rotate(-90deg)',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    '&:hover': {
      borderRight: "3px solid #fff",
    },
    background: "#0058a3",
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    background: "#0058a3",
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(7),
    },
  },
  listItem: {
    overflow: 'hidden',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    display:'flex',
    flexDirection: 'column',
    justifyContent:'space-between',
    minHeight: '100vh',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
});

class DashboardRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false,
    }
  }

  handleDrawerOpen = () => {
    this.setState(preState => { return { drawerOpen: !preState.drawerOpen } });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={clsx(classes.drawerPaper, !this.state.drawerOpen && classes.drawerPaperClose)}>
          <IconButton
            onClick={this.handleDrawerOpen}
            className={clsx(classes.menuButton, this.state.drawerOpen && classes.menuButtonHidden)}
          >
            <EjectIcon
              className={clsx(classes.iconButton, this.state.drawerOpen && classes.iconButtonHidden)} />
          </IconButton>
          <div />
          <List className={classes.listItem}>{mainListItems}</List>
        </div>

        <main className={classes.content}>
          {/* <div className={classes.appBarSpacer} /> */}
          <Container maxWidth="xl" className={classes.container}>
            <Switch>
              <Route exact={true} path="/" component={Home} />
              <Route exact={true} path="/dashboard" component={Dashboard} />
              <Route exact={true} path="/offers" component={Offers} />
              <Route exact={true} path="/creditCards" component={CreditCards} />
              <Route exact={true} path="/banks" component={Banks} />
              <Route exact={true} path="/users" component={Users} />
              <Route exact={true} path="/setting" component={Setting} />
              <Route exact={true} path="/signUp" component={SignUp} />
              <Route exact={true} path="/signIn" component={SignIn} />
              <Route exact={true} path="/edit/:id?" component={EditPage} />
              <Route exact={true} path="/view/:id?" component={ViewPage} />
              <Route exact={true} path="/newoffer" component={NewOffer} />
            </Switch>
            <Box pt={4}>
              <Copyright />
            </Box>
          </Container>
        </main>
      </div>
    );
  }
}

export default withStyles(useStyles)(DashboardRouter);