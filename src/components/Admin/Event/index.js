import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  container: {
  },
  titleContainer: {
    height: "100px",
    padding: "39px 20px",
  },
  title: {
    color: "#03045E",
    fontSize: "1.2em",
  },
  content: {
    marginLeft: "20px",
    border: '1px solid #00B4D8',
    borderRadius: "20px",
    width: "1200px",
    height: "600px",
  },

}));

const Event = () => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h3 className={styles.title}>SỰ KIỆN</h3>
      </div>
      <div className={styles.content}>  
        This feature will be updated soon.
      </div>
    </div>
  );
};

export default Event;