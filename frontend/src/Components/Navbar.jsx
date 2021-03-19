import React from "react";
import { AppBar, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <AppBar position="fixed" color="secondary">
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            padding: "20px",
          }}
        >
          <NavLink
            to="/"
            activeStyle={{ color: "black" }}
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "18px",
            }}
          >
            <Typography>Dashboard</Typography>
          </NavLink>
          <NavLink
            to="/form"
            activeStyle={{ color: "black" }}
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "18px",
            }}
          >
            <Typography>Form</Typography>
          </NavLink>
        </div>
      </AppBar>
    </div>
  );
};
