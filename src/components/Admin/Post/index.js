import React from 'react';
import { makeStyles } from '@mui/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
    height: "500px",
    width: "950px",
    marginLeft: "20px",
    padding: "10px",
    border: '1px solid #00B4D8',
    borderRadius: "20px",
  },

}));
const createData = (postName, author, latestEditTime) => {
  return {postName, author, latestEditTime}
};
const Member = () => {
  const styles = useStyles();
  const rows = [
    createData("Chuyến phiêu lưu vào lòng đất", "Nguyễn Nhật Anh", "1 giây trước"),
    createData("Chuyến phiêu lưu vào lòng đất", "Nguyễn Nhật Anh", "1 giây trước"),
    createData("Chuyến phiêu lưu vào lòng đất", "Nguyễn Nhật Anh", "1 giây trước"),
    createData("Chuyến phiêu lưu vào lòng đất", "Nguyễn Nhật Anh", "1 giây trước"),
    createData("Chuyến phiêu lưu vào lòng đất", "Nguyễn Nhật Anh", "1 giây trước"),
    createData("Chuyến phiêu lưu vào lòng đất", "Nguyễn Nhật Anh", "1 giây trước"),
    createData("Chuyến phiêu lưu vào lòng đất", "Nguyễn Nhật Anh", "1 giây trước"), 
  ]

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h3 className={styles.title}>BÀI VIẾT</h3>
      </div>
      <div className={styles.content}>  
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead sx={{backgroundColor: "#90E0EF"}}>
              <TableRow>
                <TableCell style={{width:"40%"}}>Tên</TableCell>
                <TableCell align="left">Tác giả</TableCell>
                <TableCell align="left">Chỉnh sửa gần nhất</TableCell>
                <TableCell align="left">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow sx={{width:"50%"}} key={row.postName}>
                  {/* <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell> */}
                  <TableCell align="left">{row.postName}</TableCell>
                  <TableCell align="left">{row.author}</TableCell>
                  <TableCell align="left">{row.latestEditTime}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Member;