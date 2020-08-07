import { makeStyles } from "@material-ui/core/styles";
// import Container from "@material-ui/core/Container";
import React from "react";

// import ListItem from "@material-ui/core/ListItem";
// import ListItemText from "@material-ui/core/ListItemText";
// import ListSubheader from "@material-ui/core/ListSubheader";

// import ListItemIcon from "@material-ui/core/ListItemIcon";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
// import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";

import "./Home.css";

const useStyles = makeStyles(() => ({
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div className="container">
      <div className="avatar">
        <img src="./logo.png" alt="Skytsunami" />
      </div>
      <div className="content">
        <h1>卡伯 Mr. Cardbo </h1>
        <div>
          <label htmlFor="icon-button-file" className="label">
            <IconButton href="https://github.com/cardbo" target="_blank">
              <GitHubIcon style={{ color: "#333333" }} />
            </IconButton>
          </label>

          <label htmlFor="icon-button-file">
            <IconButton
              href="https://www.facebook.com/%E5%8D%A1%E4%BC%AF-Mr-Cardbo-104328244577432"
              target="_blank"
              fontSize="large"
            >
              <FacebookIcon style={{ color: "#4267b2" }} />
            </IconButton>
          </label>

          <label htmlFor="icon-button-file">
            <IconButton
              href="https://www.instagram.com/mrcardbo/"
              target="_blank"
              color="primary"
            >
              <InstagramIcon style={{ color: "#b22cbb" }} />
            </IconButton>
          </label>
        </div>
        <div className="sign-in-up-container">
          <Link
            style={{ textDecoration: "none", color: "#000000" }}
            to="/signin"
          >
            Sign in
          </Link>
          {`    /    `}
          <Link
            style={{ textDecoration: "none", color: "#000000" }}
            to="/signup"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
