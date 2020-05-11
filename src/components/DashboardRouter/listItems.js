import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import AssignmentIcon from '@material-ui/icons/Assignment';
import SettingsIcon from '@material-ui/icons/Settings';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import { Link, Router } from "react-router-dom";

// import Rewards from "../../containers/Rewards";


export const mainListItems = (
  <div>
    <Link style={{ textDecoration: 'none', color: "#000000", }} to="/">
      <ListItem button>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
    </Link>

    <Link style={{ textDecoration: 'none', color: "#000000", }} to="/Dashboard">
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </Link>

    <Link style={{ textDecoration: 'none', color: "#000000", }} to="/Offers">
      <ListItem button>
        <ListItemIcon>
          <ShoppingBasketIcon />
        </ListItemIcon>
        <ListItemText primary="Offers" />
      </ListItem>
    </Link>

    <Link style={{ textDecoration: 'none', color: "#000000", }} to="/CreditCards">
      <ListItem button>
        <ListItemIcon>
          <CreditCardIcon />
        </ListItemIcon>
        <ListItemText primary="Credit Cards" />
      </ListItem>
    </Link>

    <Link style={{ textDecoration: 'none', color: "#000000", }} to="/Banks">
      <ListItem button>
        <ListItemIcon>
          <AccountBalanceIcon />
        </ListItemIcon>
        <ListItemText primary="Banks" />
      </ListItem>
    </Link>

    <Link style={{ textDecoration: 'none', color: "#000000", }} to="/Users">
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Users" />
      </ListItem>
    </Link>

    <Link style={{ textDecoration: 'none', color: "#000000", }} to="/Setting">
      <ListItem button>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Setting" />
      </ListItem>
    </Link>

  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Report 1" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Report 2" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Report 3" />
    </ListItem>
  </div>
);
