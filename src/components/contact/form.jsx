import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import PriceSlider from "../contact/priceSlider";
import TimeSlider from "../contact/timeSlider";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import AccountCircle from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export const Form = (props) => {
  const classes = useStyles();

  const {
    values: {
      investmentAddress,
      questions,
      name,
      email,
      This, // Phone verification package does now allow custom error messages
    },
    errors,
    touched,
    handleChange,
    isValid,
    setFieldTouched,
    handleSubmit,
    handlePriceDrag, // Having a hard time passing non standard props..
    handleTimeDrag,
  } = props;

  const change = (name, event) => {
    event.persist();
    handleChange(event);
    setFieldTouched(name, true, false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={classes.root}>
        <Container maxWidth="sm">
          <Grid container justify="center" spacing={3}>
            <Grid item xs={12} />
            <Grid item xs={12}>
              <Typography>
                If you have any questions regarding lava zones or real estate,
                please leave your questions and contact information, and we will
                reach out to you as soon as possible.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="investmentAddress"
                name="investmentAddress"
                helperText={
                  touched.investmentAddress ? errors.investmentAddress : ""
                }
                error={
                  touched.investmentAddress && Boolean(errors.investmentAddress)
                }
                label="Investment Property Address"
                value={investmentAddress}
                onChange={change.bind(null, "investmentAddress")}
                autoFocus
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="questions"
                name="questions"
                multiline
                helperText={touched.questions ? errors.questions : ""}
                error={touched.questions && Boolean(errors.questions)}
                label="Questions"
                value={questions}
                onChange={change.bind(null, "questions")}
                required
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <PriceSlider
                handlePriceDrag={handlePriceDrag} // Props arent passing correctly
              />
            </Grid>
            <Grid item xs={12}>
              <TimeSlider handleTimeDrag={handleTimeDrag} />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="name"
                name="name"
                helperText={touched.name ? errors.name : ""}
                error={touched.name && Boolean(errors.name)}
                label="Name"
                value={name}
                onChange={change.bind(null, "name")}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="email"
                name="email"
                helperText={touched.email ? errors.email : ""}
                error={touched.email && Boolean(errors.email)}
                label="Email"
                value={email}
                onChange={change.bind(null, "email")}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="This"
                name="This"
                helperText={touched.This ? errors.This : ""}
                error={touched.This && Boolean(errors.This)}
                label="Phone"
                value={This}
                onChange={change.bind(null, "This")}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} />
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={!isValid}
                fullWidth
              >
                Talk to An Expert
              </Button>
            </Grid>
          </Grid>
        </Container>
      </div>
    </form>
  );
};
