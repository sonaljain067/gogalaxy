import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Main.css';
import Routes from './Routes';
import { useHistory } from 'react-router-dom';

function GetDetailsPage(id){
  <Routes id={id} />
}
 

function DataTable({launches}) {
  const history = useHistory();
  const [id, setId] = useState(0);
  GetDetailsPage(id);
  return (
    <Paper>
      <TableContainer component={Paper} elevation={3}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow className="Header">
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Details</TableCell>
            <TableCell align="center">Launchpad</TableCell>
            <TableCell align="center">Window</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {launches.map((row) => (
            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} className="table-row"
            
            onClick={() => {setId(row.id); history.push(`/${row.id}`);}}
            >
              <TableCell component="th" scope="row">{row.id}</TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.details}</TableCell>
              <TableCell align="center">{row.launchpad}</TableCell>
              <TableCell align="center">{row.window}</TableCell>
              
              </TableRow>
          ))}
          
        </TableBody>
      </Table>
    </TableContainer>
    </Paper>
   
  );
}

export default DataTable;