import {
  Typography,
  Divider,
  TextField,
  Button,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { editData } from "./DashboardRedux/action";
export const EditData = ({ dataArray, editId }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  var data = dataArray && dataArray.filter((item) => item._id == editId);

  const [item, setItem] = useState(data[0]);

  // console.log(item);

  //Onsubmit, call the edit API to push the updated data to Database.
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(item);
    dispatch(editData(item));
    history.push("/");
  };
  const handleChange = (e) => {
    const { value, name, checked, type } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setItem((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Typography variant="h4">Edit Page</Typography>
        <br />
        <Divider variant="middle" />
        <form onSubmit={handleSubmit}>
          <TextField
            value={item.name}
            name="name"
            onChange={handleChange}
            label="Enter name"
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            value={item.age}
            name="age"
            onChange={handleChange}
            label="Enter age"
            variant="outlined"
          />
          <br />
          <br />
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="gender"
              name="gender"
              value={item.gender}
              onChange={handleChange}
            >
              <FormControlLabel value="Male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="Female"
                control={<Radio />}
                label="Female"
              />
            </RadioGroup>
          </FormControl>
          <br />
          <br />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onSubmit={handleSubmit}
          >
            Submit
          </Button>
        </form>
        <br />
      </div>
    </>
  );
};
