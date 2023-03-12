import { Table, TableBody, TableRow, useTheme, useMediaQuery } from '@mui/material';
import React from 'react';
import TimelineItem from './TimelineItem';

const Timeline = (props) => {
  const theme = useTheme();
  const downSm = useMediaQuery(theme.breakpoints.down('sm'));

  const incidentMap = {
    36: 'Goal',
    37: 'Penalty scored',
    41: 'Penalty scored',
    40: 'Penalty missed',
    43: 'Yellow card',
    44: '2nd Yellow card',
    45: 'Red card',
    47: 'Goal'
  }

  return (
    <>
      <Table size='small' aria-label='simple table'>
        <TableBody>
          {
            Object.entries(props.timeline.Incs).map(val =>
              val[1].map(row =>  (
                <TableRow key={row?.ID || row.Incs[0].ID+row.Incs[0].Min}>
                 <TimelineItem time={row.Min} incident_type={row?.IT !== undefined ? (incidentMap[row.IT]) : (incidentMap[row.Incs[0].IT])} player_team={row.Nm} playerOneName={row?.Pn || row.Incs[0].Pn} secondary={row?.Incs && row.Incs[1].Pn} score={row.Sc} />
                </TableRow>
              ))
            )
          }
        </TableBody>
      </Table>
    </>
  )
}

export default Timeline