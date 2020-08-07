import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { NavLink } from "react-router-dom";
// import Link from "@material-ui/core/Link";
import ReactLoading from "react-loading";
// import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import InfoCard from "../../components/InfoCard";
import "./Offers.css";

import { OffersAgent } from "../../agent";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
  dataListContainer: {
    display: "flex",
    flexWrap: "wrap",
  },
  addButton: {
    width: "100px",
    height: "100px",
    position: "absolute",
    right: "50px",
    bottom: "50px",
    border: "solid 10px #0058a3",
  },
  addButtonIcon: {
    width: "100px",
    height: "100px",
    fill: "#fff",
  },
}));

const Offers = () => {
  const [offerList, setOfferList] = useState([]);
  const [loading, setLoading] = useState(true);
  const classes = useStyles();

  // const onSavePassWord = () => {};
  const handleNewOffer = () => {};

  const getAllOffers = async () => {
    try {
      const result = await OffersAgent.getAllOffers();
      setOfferList(result.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getAllOffers();
  }, []);

  const dataList = offerList.map((offer) => {
    const { _id } = offer;
    return (
      <div className="offer-card-holder" key={_id}>
        <NavLink
          to={`/edit/${_id}`}
          className="offer-card-link"
          style={{ textDecoration: "none" }}
          target="_blank"
        >
          <InfoCard
            key={`offer-card-key-${_id}`}
            id={`offer-card-id-${_id}`}
            offer={offer}
          />
        </NavLink>
      </div>
    );
  });

  if (loading) {
    return (
      <div className="my-loading">
        <ReactLoading
          type="spinningBubbles"
          color="#0058a3"
          height="5rem"
          width="5rem"
        />
      </div>
    );
  }

  return (
    <div className={classes.dataListContainer}>
      {dataList}
      <NavLink
        to="/newoffer"
        style={{ textDecoration: "none" }}
        target="_blank"
      >
        <IconButton onClick={handleNewOffer} className={classes.addButton}>
          <AddCircleIcon className={classes.addButtonIcon} />
        </IconButton>
      </NavLink>
    </div>
  );
};

export default Offers;
