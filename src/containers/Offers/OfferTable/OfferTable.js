import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

import { columns, rowsPerPageSelection } from "../../../consts/OfferConst";
import OfferTableRow from "./OfferTableRow";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  container: {
    maxHeight: "80vh",
  },
});

const OfferTable = ({ offerList }) => {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table" size="small">
          <TableHead>
            <TableRow hover>
              <TableCell />
              {columns.map((col) => (
                <TableCell align="center" key={`table-head-${col}`}>
                  {col}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {offerList
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((offer) => (
                <OfferTableRow offer={offer} key={`table-body-${offer._id}`} />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={rowsPerPageSelection}
        component="div"
        count={offerList.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </div>
  );
};

OfferTable.propTypes = {
  offerList: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ).isRequired,
};

export default OfferTable;
