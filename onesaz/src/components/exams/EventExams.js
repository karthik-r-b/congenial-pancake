import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
const EventExams = () => {
  const useStyles = makeStyles((theme) => ({
    space: {
      borderRadius: 25,
      margin: '10px',
    },
  }));
  const styles = useStyles();
  return (
    <div>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        p={1}
        m={1}
      >
        <Box component="span" className={styles.space}>
          9 All Exams
        </Box>
        <Box component="span" className={styles.space}>
          3 Previous Exams
        </Box>
        <Box component="span" className={styles.space}>
          1 Current Exams
        </Box>
        <Box component="span" className={styles.space}>
          5 Upcoming Exams
        </Box>
      </Box>
    </div>
  );
};

export default EventExams;
