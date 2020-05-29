import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import 'typeface-roboto';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: '10px',
    textTransform: 'None',
    fontFamily: 'Montserrat',
  },
  button: {
    margin: '20px 20px 10px 60px;',
  },
}));

const type = {
  textoverflow: 'elipsis',
  fontWeight: 'bolder',
  fontFamily: 'Montserrat',
};
const colortheme = createMuiTheme({
  palette: {
    primary: { main: '#69C6A8' },
    secondary: { main: '#03a9f4' },
  },
});

const ExamCards = () => {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={colortheme}>
      <div className={classes.root}>
        <Grid container spacing={6}>
          <Grid item xs={3} sm={3}>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="subtitle1" style={type}>
                Inverse Proportion
              </Typography>
              <Divider variant="inset" bordertop="1px solid #69C6A8" />
              <Typography
                variant="caption"
                display="block"
                color="primary"
                gutterBottom
              >
                Type:Jee Mains
              </Typography>
              <Typography
                variant="caption"
                display="block"
                style={type}
                gutterBottom
              >
                Available from :01:05:2019
              </Typography>
              <Typography variant="caption" display="block" gutterBottom>
                Ends On :01:05:2020
              </Typography>
              <Typography variant="caption" display="block" gutterBottom>
                Paper:1
              </Typography>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Start
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="subtitle1" style={type}>
                Representing Square roots of a number
              </Typography>
              <Divider variant="inset" bordertop="1px solid #69C6A8" />
              <Typography
                variant="caption"
                display="block"
                color="primary"
                gutterBottom
              >
                Type:Jee Mains
              </Typography>
              <Typography variant="caption" display="block" gutterBottom>
                Available from :01:05:2019
              </Typography>
              <Typography variant="caption" display="block" gutterBottom>
                Ends On :01:05:2020
              </Typography>
              <Typography variant="caption" display="block" gutterBottom>
                Paper:1
              </Typography>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Start
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="subtitle1" style={type}>
                Representing square roots Of Decimal Number
              </Typography>
              <Divider variant="inset" bordertop="1px solid #69C6A8" />
              <Typography
                variant="caption"
                display="block"
                color="primary"
                gutterBottom
              >
                Type:Jee Mains
              </Typography>
              <Typography variant="caption" display="block" gutterBottom>
                Available from :01:05:2019
              </Typography>
              <Typography variant="caption" display="block" gutterBottom>
                Ends On :01:05:2020
              </Typography>
              <Typography variant="caption" display="block" gutterBottom>
                Paper:1
              </Typography>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Start
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper elevation={3} className={classes.paper}>
              <Typography
                variant="subtitle1"
                textoverflow="ellipsis"
                fontWeight="fontWeightBold"
              >
                Representing square roots Of Decimal Number
              </Typography>
              <Divider variant="inset" bordertop="1px solid #69C6A8" />
              <Typography
                variant="caption"
                display="block"
                color="primary"
                gutterBottom
              >
                Type:Jee Mains
              </Typography>
              <Typography variant="caption" display="block" gutterBottom>
                Available from :01:05:2019
              </Typography>
              <Typography variant="caption" display="block" gutterBottom>
                Ends On :01:05:2020
              </Typography>
              <Typography variant="caption" display="block" gutterBottom>
                Paper:1
              </Typography>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Start
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="subtitle1" fontWeight="fontWeightBold">
                Representing square roots Of Decimal Number
              </Typography>
              <Divider variant="inset" bordertop="1px solid #69C6A8" />
              <Typography
                variant="caption"
                display="block"
                color="primary"
                gutterBottom
              >
                Type:Jee Mains
              </Typography>
              <Typography variant="caption" display="block" gutterBottom>
                Available from :01:05:2019
              </Typography>
              <Typography variant="caption" display="block" gutterBottom>
                Ends On :01:05:2020
              </Typography>
              <Typography variant="caption" display="block" gutterBottom>
                Paper:1
              </Typography>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Start
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="subtitle1" fontWeight="fontWeightBold">
                Representing square roots Of Decimal Number
              </Typography>
              <Divider variant="inset" bordertop="1px solid #69C6A8" />
              <Typography
                variant="caption"
                display="block"
                color="primary"
                gutterBottom
              >
                Type:Jee Mains
              </Typography>
              <Typography variant="caption" display="block" gutterBottom>
                Available from :01:05:2019
              </Typography>
              <Typography variant="caption" display="block" gutterBottom>
                Ends On :01:05:2020
              </Typography>
              <Typography variant="caption" display="block" gutterBottom>
                Paper:1
              </Typography>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Start
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </MuiThemeProvider>
  );
};

export default ExamCards;
