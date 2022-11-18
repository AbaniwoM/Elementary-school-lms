import React from 'react';
import { makeStyles } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from '../features/userSlice';
import SchoolIcon from '@material-ui/icons/School';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  homeCover: {
    backgroundColor: "#E3DAC9",
    height: "100vh",
  },
  headerElements: {
    display: "flex",
    gap: "250px",
    justifyContent: "space-around",
    marginLeft: "300px",
    marginTop: "-595px"
  },
  sidebar: {
    backgroundColor: "#3F301D",
    height: "100vh",
    width: "20%",
  },
  userText: {
    fontFamily: "Merriweather",
    marginTop: "8px",
  },
  logout: {
  
  },
  schoolImg: {
    left: "110px",
    top: "28px",
    position: "relative",
    color: "white",
    fontSize: "2rem",
  },
  dashboard: {
    color: "white",
    marginTop: "98px",
    marginLeft: "86px",
  },
  root: {
    flexGrow: 1,
    width: "68%",
    marginLeft: "370px",
    marginTop: "100px",
  },
  paper: {
    padding: theme.spacing(12),
    textAlign: 'center',
    minHeight: "30vh",
    cursor: "pointer",
    color: theme.palette.text.secondary,
  },
}));

const HomePage = () => {
const classes:any = useStyles();

const user = useSelector(selectUser);

const dispatch = useDispatch();

const handleLogout = (e:any) => {
  e.preventDefault();
  
  dispatch(logout());
};

  return (
    <div className={classes.homeCover}>
      <div className={classes.sidebar}>
        <SchoolIcon className={classes.schoolImg}/>
        <div className={classes.dashboard}>Dashboard</div>
      </div>
      <div className={classes.headerElements}>
        <div className={classes.userText}>Welcome <span className={classes.user}>{user.name}</span></div>
        <Button variant="contained" color="secondary" className={classes.logout} onClick={(e) => handleLogout(e)}>
            Logout
        </Button>
      </div>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Link to="/maths">
            <Grid item xs>
              <Paper className={classes.paper}>Maths</Paper>
            </Grid>
          </Link>
          <Link to="/english">
            <Grid item xs>
              <Paper className={classes.paper}>English</Paper>
            </Grid>
          </Link>
          <Link to="/science">
            <Grid item xs>
              <Paper className={classes.paper}>Elementary Science</Paper>
            </Grid>
          </Link>
        </Grid>
      </div>
    </div>
  )
}

export default HomePage;