import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import PriceSlider from "./priceSlider";
import TimeSlider from "./timeSlider";


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn(props) {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Questions?
        </Typography>
        <form className={classes.form} onSubmit={props.handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            name="investmentAddress"
            onChange={props.handleChange}
            label="Investment Property Address"
            fullWidth
          />
          <TextField
            variant="outlined"
            margin="normal"
            name="questions"
            required
            onChange={props.handleChange}
            fullWidth
            id="question"
            label="Questions"
          />
          <PriceSlider handlePriceDrag={props.handlePriceDrag} />
          <TimeSlider handleTimeDrag={props.handleTimeDrag} />
          <TextField
            variant="outlined"
            margin="normal"
            name="name"
            onChange={props.handleChange}
            required
            fullWidth
            id="name"
            label="Name"
            autoComplete="name"
          />
          <TextField
            variant="outlined"
            margin="normal"
            name="phoneNumber"
            onChange={props.handleChange}
            required
            fullWidth
            id="tel"
            type="number"
            label="Phone Number"
            autoComplete="tel"
          />
          <TextField
            variant="outlined"
            margin="normal"
            name="emailAddress"
            onChange={props.handleChange}
            required
            fullWidth
            id="email"
        
            label="Email Address"
            autoComplete="email"
         
            
          />
          {/* Disable this button until form is completed */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onSubmit={() => console.log("submitted")} // make this run handle submit
          >
            Talk to an expert
          </Button>
        </form>
      </div>
    </Container>
  );
}
