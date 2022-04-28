import React from 'react'
import { Button } from '@mui/material';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  table: {  
    width:700
   
  },
});

function Pages() {
  const classes = useStyles();
  let history = useHistory();

  function handleClick() {
    history.push("/page");
  }
  function handleClicks() {
    history.push("/pagess");
  }
  var x = localStorage.getItem("firstname");
  var y = localStorage.getItem("lastname");
  var z = localStorage.getItem("email");
  console.log(x);
  console.log(y);
  console.log(z);
  return (
    <>
    <div className="App" style={{margin:"30px 190px",padding:"40px"}}>
      
      <h1>Application Information</h1>
      <h4>Personal details and application </h4>
      <div className='table-container'>
      <Table  className={classes.table} >      
          <TableRow  className='row-style'>
              <TableCell variant="head">Full Name</TableCell>
              <TableCell>{x+y}</TableCell>
              
          </TableRow>     
          <TableRow  className='row-style'>
              <TableCell variant="head">Application for</TableCell>
              <TableCell>Backend Developer</TableCell>
              
          </TableRow>       
          <TableRow  className='row-style'>
              <TableCell variant="head">Email address</TableCell>
              <TableCell>{z}</TableCell>
              
          </TableRow>       
          <TableRow  className='row-style'>
              <TableCell variant="head">Salary expectation</TableCell>
              <TableCell>$120,000</TableCell>
              
          </TableRow>       
          <TableRow  className='row-style'>
              <TableCell variant="head">About</TableCell>
              <TableCell>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aliquid, atque culpa quisquam excepturi,<br/> suscipit alias velit unde architecto quam sequi molestias<br/> sit quidem rerum recusandae eveniet? Numquam, maxime facere.</TableCell>
              
          </TableRow>       
      </Table>
      <div className="dad">

      <Button variant="contained" className='baba'  type="button" onClick={handleClick}  style={{margin:"0 10px"}}> Back </Button>
      <Button variant="contained" className='baba1'  type="button" onClick={handleClicks}> finish </Button>
      </div>
      </div>
    </div>
    </>
  )
}

export default Pages