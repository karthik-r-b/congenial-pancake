import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const flexContainer = {
  display: 'flex',
  flexDirection: 'row',
  padding: 0,
  justifyContent: 'center',
  margin: '20px',
};
const useStyles = makeStyles((theme) => ({
  root: flexContainer,
  space: {
    borderRadius: 25,
    margin: '10px',
  },
}));
const TypeExams = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button variant="outlined" color="primary" className={classes.space}>
        JEE mains
      </Button>
      <Button variant="outlined" color="primary" className={classes.space}>
        JEE Advanced
      </Button>
      <Button variant="outlined" color="primary" className={classes.space}>
        Custom
      </Button>
      <Button variant="outlined" color="primary" className={classes.space}>
        Neet
      </Button>
    </div>
  );
};
export default TypeExams;
