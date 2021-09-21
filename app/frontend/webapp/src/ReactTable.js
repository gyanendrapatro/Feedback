import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Dropdown from './dropdown.js';
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import {Form, Button, Container} from "react-bootstrap";
import { useHistory } from 'react-router-dom';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}


export default function BasicTable() {
  const history = useHistory();
    const [rowsdata, setRowsData] = useState([])
    const [count, setCount] = useState(1)
    const addRows = ()=>{
    setRowsData(oldarray => [...oldarray,createData(count, 0, 0, 0, 0)])
    setCount(count+1)
    }
        console.log(rowsdata)
    const delRows = (pos)=>{
        console.log(pos.name)
const filterdata = rowsdata.filter(ft => ft.name !== pos.name)
setRowsData(filterdata)
    }
  return (
      <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Sl No.</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Rating</TableCell>
            <TableCell align="right" onClick={addRows}><AddCircleOutlineIcon/></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsdata.map((row, index) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index+1}
              </TableCell>
              <TableCell align="right"><Dropdown/></TableCell>
              <TableCell align="right"> <TextField
          id="outlined-textarea"
          label="Description"
          placeholder="Placeholder"
          multiline
        /></TableCell>
              <TableCell align="right"><Rating name="half-rating" defaultValue={0} precision={0.2} /></TableCell>
              <TableCell align="right" onClick={()=> delRows(row)}><DeleteIcon/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <div class="d-flex justify-content-center mt-2">
                    <Button  onClick={()=>{
                        history.push('/feedback')}} variant="secondary">
                        Submit
                    </Button>
    </div>

    </>
  );
}