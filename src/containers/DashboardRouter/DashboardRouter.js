import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

// import MenuIcon from "@material-ui/icons/Menu";
import EjectIcon from "@material-ui/icons/Eject";
// import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
// import NotificationsIcon from "@material-ui/icons/Notifications";
import { Route, Switch } from "react-router-dom";
import { mainListItems } from "./listItems";

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
// import ViewPage from "../ViewPage/ViewPage";
import NewOffer from "../EditPage/NewOffer";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        Cardbo
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;
const dashBorderHoverClr = "#AFAFAF";
const dashBackgroundClr = "#131313";
const backgroundClr = "#202020";

// const dashBackgroundClr = "#247cb8";
// const backgroundClr = "#0058a3";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    position: "relative",
    height: "100vh",
    background: dashBackgroundClr,
  },

  menuButton: {
    width: "40px",
    height: "40px",
    border: `2px solid ${dashBackgroundClr}`,
    "&:hover": {
      backgroundColor: backgroundClr,
      border: `2px solid ${dashBorderHoverClr}`,
    },
    backgroundColor: backgroundClr,
    position: "absolute",
    top: "50%",
    right: "-20px",
  },
  menuButtonHidden: {},
  iconButton: {
    transform: "rotate(90deg)",
    transition: "1s",
  },
  iconButtonHidden: {
    transform: "rotate(-90deg)",
  },

  drawerPaper: {
    // "&:hover": {
    //   borderRight: `2px solid ${dashBorderHoverClr}`,
    // },
    background: backgroundClr,
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    background: backgroundClr,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(7),
    },
  },
  listItem: {
    overflow: "hidden",
  },

  content: {
    flexGrow: 1,
    overflow: "auto",
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
  },
}));

const DashboardRouter = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const classes = useStyles();
  const handleDrawerOpen = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <div className={classes.root}>
      <div
        className={clsx(
          classes.drawerPaper,
          !drawerOpen && classes.drawerPaperClose
        )}
      >
        <IconButton
          onClick={handleDrawerOpen}
          className={clsx(
            classes.menuButton,
            drawerOpen && classes.menuButtonHidden
          )}
        >
          <EjectIcon
            className={clsx(
              classes.iconButton,
              drawerOpen && classes.iconButtonHidden
            )}
          />
        </IconButton>
        <div />
        <List className={classes.listItem}>{mainListItems}</List>
      </div>

      <main className={classes.content}>
        {/* <div className={classes.appBarSpacer} /> */}
        {/* <Container maxWidth="xl"> */}
        <Switch>
          {/* <Route exact={true} path="*" component={Home} /> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/offers" component={Offers} />
          <Route exact path="/creditCards" component={CreditCards} />
          <Route exact path="/banks" component={Banks} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/setting" component={Setting} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/signIn" component={SignIn} />
          <Route exact path="/edit/:id?" component={EditPage} />
          <Route exact path="/newoffer" component={NewOffer} />
          {/* <Route exact path="*" component={<div>404 NOT FOUND</div>} /> */}
        </Switch>
        <Box pt={2}>
          <Copyright />
        </Box>
        {/* </Container> */}
      </main>
    </div>
  );
};

export default DashboardRouter;
