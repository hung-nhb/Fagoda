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
    width: "950px",
    height: "500px",
  },

}));

const Survey = () => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h3 className={styles.title}>KHẢO SÁT</h3>
      </div>
      <div className={styles.content}>  
        This feature will be updated soon.
      </div>
    </div>
  );
};

export default Survey;