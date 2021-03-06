import React, { useState, useEffect } from "react";
import { AppBar, Typography, Toolbar, Avatar, Button } from "@material-ui/core";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";

import memoriesLogo from "../../images/memoriesLogo.png";
import memoriesText from "../../images/memoriesText.png";
import * as actionType from "../../constants/actionTypes";
import useStyles from "./styles";
import NavImg from "./navImg.svg";
import "./Navbar.css";

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push("/");

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className="Title_in">
        <h2 className="Title_h2">
          <Link style={{ textDecoration: "none" }} className="Title_h2" to="/">
            Sharma-Ji-Ka-BetaW
            {/* <img className="Title_img" src={NavImg} alt="" /> */}
          </Link>
        </h2>
        <p className="hava">
          Organize and Achieve goals like a SuperMan( ͡° ͜ʖ ͡°)
        </p>
      </div>
      <Link to="/" className={classes.brandContainer}>
        {/* <img
          component={Link}
          to="/"
          src={memoriesText}
          alt="icon"
          height="45px"
        /> */}
      </Link>
      <Toolbar className={classes.toolbar}>
        {user && user?.result ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user?.result.name}
              src={`https://avatars.dicebear.com/api/micah/:${user.result.name.toString()}.svg`}
            >
              {user?.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user?.result.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
              onClick={logout}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
