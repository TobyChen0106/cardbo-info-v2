import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';

import MenuIcon from '@material-ui/icons/Menu';
import EjectIcon from '@material-ui/icons/Eject';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from './listItems';

import { Route, Switch } from "react-router-dom";

import Home from "../../containers/Home/Home";
import Dashboard from "../../containers/Dashboard/Dashboard";
import Offers from "../../containers/Offers/Offers";
import Banks from "../../containers/Banks/Banks";
import Users from "../../containers/Users/Users";
import Setting from "../../containers/Setting/Setting";
import CreditCards from "../../containers/CreditCards/CreditCards";
import SignIn from "../../containers/sign-up-in/SignIn";
import SignUp from "../../containers/sign-up-in/SignUp";

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

const useStyles = makeStyles((theme) => ({
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
    // overflow: 'hidden',
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
}));

export default function DashboardRouter() {
  const classes = useStyles();
  const [open, setStaticOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setStaticOpen(~open);
  };
  const handleDrawerClose = () => {
    setStaticOpen(false);
  };

  return (
    <div className={classes.root}>
      <div className={clsx(classes.drawerPaper, !open && classes.drawerPaperClose)}>
        <IconButton
          onClick={handleDrawerOpen}
          className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
        >
          <EjectIcon
            className={clsx(classes.iconButton, open && classes.iconButtonHidden)} />
        </IconButton>
        <div />
        <List className={classes.listItem}>{mainListItems}</List>
      </div>

      <main className={classes.content}>
        {/* <div className={classes.appBarSpacer} /> */}
        <Container maxWidth="lg" className={classes.container}>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/Dashboard" component={Dashboard} />
            <Route exact={true} path="/Offers" component={Offers} />
            <Route exact={true} path="/CreditCards" component={CreditCards} />
            <Route exact={true} path="/Banks" component={Banks} />
            <Route exact={true} path="/Users" component={Users} />
            <Route exact={true} path="/Setting" component={Setting} />
            <Route exact={true} path="/SignUp" component={SignUp} />
            <Route exact={true} path="/SignIn" component={SignIn} />
          </Switch>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}
