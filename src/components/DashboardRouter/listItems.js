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
    <Link style={{ textDecoration: 'none', color: "#fff", }} to="/">
      <ListItem button>
        <ListItemIcon>
          <HomeIcon  style={{ color: "#fff" }}/>
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
    </Link>

    <Link style={{ textDecoration: 'none', color: "#fff", }} to="/Dashboard">
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon style={{ color: "#fff" }}/>
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </Link>

    <Link style={{ textDecoration: 'none', color: "#fff", }} to="/Offers">
      <ListItem button>
        <ListItemIcon>
          <ShoppingBasketIcon style={{ color: "#fff" }}/>
        </ListItemIcon>
        <ListItemText primary="Offers" />
      </ListItem>
    </Link>

    <Link style={{ textDecoration: 'none', color: "#fff", }} to="/CreditCards">
      <ListItem button>
        <ListItemIcon>
          <CreditCardIcon style={{ color: "#fff" }}/>
        </ListItemIcon>
        <ListItemText primary="Credit Cards" />
      </ListItem>
    </Link>

    <Link style={{ textDecoration: 'none', color: "#fff", }} to="/Banks">
      <ListItem button>
        <ListItemIcon>
          <AccountBalanceIcon style={{ color: "#fff" }}/>
        </ListItemIcon>
        <ListItemText primary="Banks" />
      </ListItem>
    </Link>

    <Link style={{ textDecoration: 'none', color: "#fff", }} to="/Users">
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon style={{ color: "#fff" }}/>
        </ListItemIcon>
        <ListItemText primary="Users" />
      </ListItem>
    </Link>

    <Link style={{ textDecoration: 'none', color: "#fff", }} to="/Setting">
      <ListItem button>
        <ListItemIcon>
          <SettingsIcon style={{ color: "#fff" }}/>
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
