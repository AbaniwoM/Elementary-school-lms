import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core";
import stuImg from "../Images/studentImg.jpg";
import SchoolIcon from '@material-ui/icons/School';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

const useStyles = makeStyles((theme) => ({
  cover: {
    backgroundColor: "#E3DAC9",
    height: "100vh",
  },
  coverImg: {
    width: "66%",
    height: "98vh",
    marginLeft: "6px",
    marginTop: "6px"
  },
  overlay: {
    backgroundColor: "#bebaa7",
    width: "66%",
    height: "98vh",
    marginTop: "-616px",
    marginLeft: "6px",
    position: "relative",
    opacity: 0.3
  },
  imgText: {
    fontWeight: "bold",
    fontFamily: "Merriweather",
    color: "white",
    marginTop: "-400px",
    marginLeft: "60px",
    fontSize: "3.8rem",
    opacity: 0.9
  },
  schoolIcon: {
    top: "-330px",
    left: "63px",
    position: "relative",
    color: "white",
    fontSize: "2rem",
  },
  loginContent: {
    marginLeft: "980px",
    marginTop: "-300px"
  },
  form: {
    marginTop: "10px"
  },
  name: {
    width: "80%",
  },
  email: {
    width: "80%",
    marginTop: "15px"
  },
  password: {
    width: "80%",
    marginTop: "15px"
  },
  login: {
    fontFamily: "Roboto",
    fontWeight: 600,
    fontSize: "1.2rem"
  },
  loginButton: {
    width: "80%",
    height: "8vh",
    fontFamily: "Roboto",
    marginTop: "30px"
  }
}));

const Login = () => {
  const classes:any = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e:any) => {
    e.preventDefault();

    dispatch(
      login({
        name: name,
        email: email,
        password: password,
        loggedIn: true,
      })
    );
  };

  return (
    <div className={classes.cover}>
        <div>
          <img src={stuImg} alt="student-image" className={classes.coverImg}/>
          <div className={classes.overlay}></div>
        </div>
        <div className={classes.imgText}>
          <div>Elementary</div>
          <div>School LMS</div>
        </div> 
        <SchoolIcon className={classes.schoolIcon}/>
        <div className={classes.loginContent}>
          <div className={classes.login}>Login</div>
          <form className={classes.form} onSubmit={(e) => handleSubmit(e)}>
            <TextField id="outlined-basic" label="Name" variant="outlined" className={classes.name} value={name} onChange={(e) => setName(e.target.value)} />
            <TextField id="outlined-basic" label="Email" variant="outlined" className={classes.email} value={email} onChange={(e) => setEmail(e.target.value)} />
            <TextField id="outlined-basic" label="Password" variant="outlined" className={classes.password} value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button variant="contained" color="secondary" className={classes.loginButton} type="submit">
              Login
            </Button>
          </form>
        </div>
    </div>
  )
}

export default Login