import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { NavLink } from "react-router-dom";
// import Link from "@material-ui/core/Link";
import ReactLoading from "react-loading";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import InfoCard from "../../components/InfoCard";
import OfferTable from "./OfferTable/OfferTable";

import "./Offers.css";

import { OffersAgent } from "../../agent";

const useStyles = makeStyles((theme) => ({}));

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
    <>
      {/* {dataList} */}
      <Typography variant="h5" color="textPrimary">
        優惠：
      </Typography>
      <OfferTable offerList={offerList} />
      {/* <NavLink
        to="/newoffer"
        style={{ textDecoration: "none" }}
        target="_blank"
      >
        <IconButton onClick={handleNewOffer} className={classes.addButton}>
          <AddCircleIcon className={classes.addButtonIcon} />
        </IconButton>
      </NavLink> */}
    </>
  );
};

export default Offers;
