import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import Box from "@material-ui/core/Box";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { Collapse } from "@material-ui/core";
import { columns } from "../../../consts/OfferConst";
import { dateFormat } from "../../../utils/date";

const useStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
  collapseCell: {
    maxWidth: "80vh",
    overflow: "scroll",
    paddingBottom: 0,
    paddingTop: 0,
  },
});

const OfferTableRow = ({ offer }) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  return (
    <>
      <TableRow className={classes.root} hover>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        {columns.map((col) => (
          // eslint-disable-next-line no-underscore-dangle
          <TableCell align="center" key={`table-body-${offer._id}-${col}`}>
            {
              // eslint-disable-next-line no-bitwise
              (col === "BeginDate") | (col === "EndDate")
                ? dateFormat(offer[col])
                : offer[col]
            }
          </TableCell>
        ))}
      </TableRow>
      <TableRow hover>
        <TableCell
          className={classes.collapseCell}
          colSpan={columns.length + 1}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <pre>{JSON.stringify(offer, null, 2)}</pre>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

OfferTableRow.propTypes = {
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

export default OfferTableRow;
