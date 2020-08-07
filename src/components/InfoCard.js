import React from "react";
import dayjs from "dayjs";
// import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";

// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import PropTypes from "prop-types";

import "./InfoCard.css";

const useStyles = makeStyles(() => ({
  root: {
    width: "22rem",
    maxWidth: "50vw",
    fontFamily: "cwTeXYen",
    margin: "0.5rem",
    position: "relative",
  },
  avatar: {
    backgroundColor: "#0058a3",
  },
  content: {
    paddingTop: 0,
    paddingBottom: 0,
    fontFamily: "cwTeXYen",
  },
  contentContainer: {
    display: "flex",
    justifyContent: "space-between",
    fontFamily: "cwTeXYen",
  },
  mainInfo: {
    width: "50%",
  },
  subInfo: {
    width: "50%",
  },
  textOverflow: {
    width: "100%",
    "text-overflow": "ellipsis",
    overflow: "hidden",
  },
}));

const InfoCard = ({ offer }) => {
  const {
    _id,
    // OfferCards,
    // OfferPays,
    // OfferPlaces,
    // Tags,
    OfferName,
    OfferAbstract,
    // Note,
    // Content,
    Category,
    // Value,
    // ValuePercant,
    BeginDate,
    EndDate,
  } = offer;
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        titleTypographyProps={{ variant: "body1" }}
        title={OfferName}
        subheaderTypographyProps={{ variant: "body2" }}
        subheader={OfferAbstract}
      />
      <CardContent className={classes.content}>
        <div className={classes.contentContainer}>
          <div className={classes.mainInfo}>
            <Typography variant="body2" color="textSecondary" component="p">
              {_id}
            </Typography>
            <Typography
              className={classes.textOverflow}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {/* {`${this.props.cardName}`} */}
            </Typography>
          </div>
          <div className={classes.subInfo}>
            <Typography
              className={classes.textOverflow}
              variant="body2"
              color="textSecondary"
              component="p"
              align="right"
            >
              {/* {`${this.props.numSearch} 次搜尋`} */}
            </Typography>
            <Typography
              className={classes.textOverflow}
              variant="body2"
              color="textSecondary"
              component="p"
              align="right"
            >
              {`${Category}`}
            </Typography>
          </div>
        </div>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          align="left"
        >
          {BeginDate ? dayjs(BeginDate).format("DD/MM/YYYY") : ""}~
          {dayjs(EndDate).format("DD/MM/YYYY")}
        </Typography>
      </CardContent>
    </Card>
  );
};

InfoCard.propTypes = {
  offer: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    OfferName: PropTypes.string.isRequired,
    // OfferCards: [mongoose.ObjectId],
    // OfferPays: [mongoose.ObjectId],
    OfferPlaces: PropTypes.arrayOf(PropTypes.string).isRequired,
    OfferAbstract: PropTypes.string.isRequired,
    Tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    Note: PropTypes.string.isRequired,
    Content: PropTypes.string.isRequired,
    Category: PropTypes.string.isRequired,
    Value: PropTypes.number.isRequired,
    ValuePercant: PropTypes.number.isRequired,
    BeginDate: PropTypes.string.isRequired,
    EndDate: PropTypes.string.isRequired,
  }).isRequired,
};

export default InfoCard;
