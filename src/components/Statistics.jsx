import React from "react";
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import { indigo } from "@mui/material/colors";

const Statistics = ((props) => {
  const statMap = {
    Fls: 'Fouls',
    Ths: 'Throw ins',
    Ofs: 'Offsides',
    Pss: 'Possession (%)',
    Crs: 'Crosses',
    Cos: 'Corner kicks',
    Ycs: 'Yellow cards',
    Rcs: 'Red cards',
    Shon: 'Shots on target',
    Shof: 'Shots off target',
    Shbl: 'Shots blocked',
    Att: 'Counter attacks',
    Gks: 'Goalkeepeer saves',
    Goa: 'Goal kicks',
  };

  return (
    <TableContainer>
      <Table size="small" aria-label="simple table">
        <TableHead>
          <TableRow sx={{ "& th.MuiTableCell-root": { fontSize: { xs: '1rem', md: '1.2rem' }, paddingY: '16px' } }}>
            <TableCell sx={{ width: '30%' }}>{props.homeName}</TableCell>
            <TableCell sx={{ width: '40%' }} align="center">Statistic</TableCell>
            <TableCell sx={{ width: '30%' }} align="right">{props.awayName}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(props.stats.Stat[0]).filter((val => (val[1] > 0 || props.stats.Stat[1][val[0]] > 0) && (val[0] in statMap))).map(row => (
            <TableRow
              key={row[0]}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, '& p.MuiTypography-root': { fontSize: { xs: '0.75rem', md: '1rem' } }, '& td.MuiTableCell-root': { paddingX: { xs: '8px', md: '16px' } } }}
            >
              <TableCell scope="row">
                <Typography sx={{ width: 'fit-content', paddingY: '2px', paddingX: '6px', borderRadius: '8px', bgcolor: row[1] > props.stats.Stat[1][row[0]] && indigo[900], color: row[1] > props.stats.Stat[1][row[0]] && 'white' }}>
                  {row[1]}
                </Typography>
              </TableCell>
              <TableCell align="center">{(row[0] in statMap) && statMap[row[0]]}</TableCell>
              <TableCell align="right">
                <Typography sx={{ width: 'fit-content', marginLeft: 'auto', paddingY: '2px', paddingX: '6px', borderRadius: '8px', bgcolor: row[1] < props.stats.Stat[1][row[0]] && indigo[900], color: row[1] < props.stats.Stat[1][row[0]] && 'white' }}>
                  {props.stats.Stat[1][row[0]]}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
})

export default Statistics;