import React from "react";
import {
  TextField,
  Button,
  Paper,
  Divider,
  FormControlLabel,
  RadioGroup,
  Radio,
  Checkbox,
  FormControl,
} from "@material-ui/core";
import { useState } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postData } from "../Dashboard/DashboardRedux/action";
import { saveData } from "../../Redux/localStorage";

export const FormData = (props) => {
  const initState = {
    id: uuid(),
    name: "",
    age: "",
    gender: "",
  };
  const [user, setUser] = useState(initState);
  const history = useHistory();
  const dispatch = useDispatch();
  const postCount = useSelector((state) => state.data.postCount);

  const handleChange = (e) => {
    const { value, name, checked, type } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setUser((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  //Onsubmit, call the post API to post the data on Database and save the API count to local storage.
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(postCount);
    saveData("postCount", postCount);
    dispatch(postData(user));
    history.push("/");
  };

  return (
    <Paper
      elevation={3}
      style={{ maxWidth: "300px", margin: "auto", padding: "50px" }}
    >
      <div style={{ textAlign: "center" }}>
        <form onSubmit={handleSubmit}>
          <TextField
            value={user.name}
            name="name"
            onChange={handleChange}
            label="Enter name"
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            value={user.age}
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
              value={user.gender}
              onChange={handleChange}
            >
              <FormControlLabel value="Male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="Female"
                control={<Radio />}
                label="Female"
              />
              {/* <FormControlLabel
                  value="others"
                  control={<Radio />}
                  label="Others"
                /> */}
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
      <Divider />
    </Paper>
  );
};
