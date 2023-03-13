import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable(props) {
  return (
    <TableContainer
      component={Paper}
      data-testid={'TableContainer ' + props.id}
    >
      <Table
        data-testid={'Table ' + props.id}
        sx={{ minWidth: 650 }}
        aria-label="simple table"
      >
        <TableHead data-testid={'TableHead ' + props.id}>
          <TableRow data-testid={'TableHRow ' + props.id}>
            <TableCell data-testid={'TableHCell ' + props.id}>
              Dessert (100g serving)
            </TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody data-testid={'TableBody ' + props.id}>
          {rows.map((row) => (
            <TableRow
              data-testid={'TableDRow ' + props.id + '-key-' + row.name}
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                data-testid={'TableDCell ' + props.id + '_name'}
              >
                {row.name}
              </TableCell>
              <TableCell
                align="right"
                data-testid={'TableDCell ' + props.id + '_calories'}
              >
                {row.calories}
              </TableCell>
              <TableCell
                align="right"
                data-testid={'TableDCell ' + props.id + '_fat'}
              >
                {row.fat}
              </TableCell>
              <TableCell
                align="right"
                data-testid={'TableDCell ' + props.id + '_carbs'}
              >
                {row.carbs}
              </TableCell>
              <TableCell
                align="right"
                data-testid={'TableDCell ' + props.id + '_protein'}
              >
                {row.protein}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
