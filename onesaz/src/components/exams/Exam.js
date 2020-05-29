import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TypeExams from './TypeExams';
import EventExams from './EventExams';
import Divider from '@material-ui/core/Divider';
import ExamCards from './ExamCards';

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.button,
    backgroundColor: '#F0F3F5',
    padding: theme.spacing(1),
  },
}));

const Exam = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h5" align="center">
        What do you want to learn Today
      </Typography>
      <br />
      <Typography variant="caption" align="center" display="block">
        Select course to continue
      </Typography>
      <br />
      <TypeExams />
      <br />
      <EventExams />
      <Divider variant="inset" />
      <br />
      <ExamCards />
    </div>
  );
};

export default Exam;
