import React, { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useDispatch, useSelector } from "react-redux";
import { deleteData, getData } from "./DashboardRedux/action";
import { useHistory } from "react-router-dom";
import { Button, Modal, TextField, Typography } from "@material-ui/core";
import { EditData } from "./EditData";
import { saveData } from "../../Redux/localStorage";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const useModalStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
export const Dashboard = (props) => {
  const classes = useStyles();
  const modalClasses = useModalStyles();

  const [modalStyle] = useState(getModalStyle);

  const dispatch = useDispatch();
  const history = useHistory();
  const dataArray = useSelector((state) => state.data.data);
  const isLoading = useSelector((state) => state.data.isLoading);
  const isError = useSelector((state) => state.data.error);
  const postCount = useSelector((state) => state.data.postCount);
  const editCount = useSelector((state) => state.data.editCount);
  const [open, setOpen] = useState(false);
  const [editId, setEditId] = useState("");

  //Call getData function on-load and by any change in postCount/editCount and save both the API counts to local storage.
  useEffect(() => {
    dispatch(getData());
    saveData("postCount", postCount);
    saveData("editCount", editCount);
  }, [postCount, editCount]);
  console.log(props);

  const handleOpen = (id) => {
    setOpen(true);
    setEditId(id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //Modal Body
  const body = (
    <div style={modalStyle} className={modalClasses.paper}>
      <EditData dataArray={dataArray} editId={editId} />
    </div>
  );
  console.log(postCount, editCount);

  return isLoading ? (
    <h3>Loading...</h3>
  ) : (
    <>
      <Typography>Post API count : {postCount}</Typography>
      <Typography>Edit API count : {editCount}</Typography>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Age</StyledTableCell>
              <StyledTableCell align="right">Gender</StyledTableCell>
              <StyledTableCell align="right">Edit</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataArray &&
              dataArray.map((row) => (
                <StyledTableRow key={row._id}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.age}</StyledTableCell>
                  <StyledTableCell align="right">{row.gender}</StyledTableCell>

                  <Button
                    variant="contained"
                    color="primary"
                    style={{ float: "right" }}
                    onClick={(id) => handleOpen(row._id)}
                  >
                    Edit
                  </Button>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal open={open} onClose={handleClose}>
        {body}
      </Modal>
      {/* In case of any network error or backend API not running, display the Error. */}
      {isError && <h5>Oops, Something went wrong!</h5>}
    </>
  );
};
