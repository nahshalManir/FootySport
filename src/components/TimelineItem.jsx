import React from 'react';
import { Box, Typography, TableCell } from '@mui/material';
import { grey, indigo, yellow, red } from '@mui/material/colors';
import RectangleRoundedIcon from '@mui/icons-material/RectangleRounded';
import SportsSoccerTwoToneIcon from '@mui/icons-material/SportsSoccerTwoTone';
import ClearIcon from '@mui/icons-material/Clear';

const TimelineItem = (props) => {
  function getIcon(incident_type) {

    if (incident_type === 'Goal' || incident_type === 'Penalty scored') return <SportsSoccerTwoToneIcon sx={{ fontSize: { xs: '1rem', md: '1.5rem' }, marginX: { xs: '2px', md: '4px' }, order: props.player_team === 2 ? 6 : 0 }} />
    if (incident_type === 'Yellow card') return <RectangleRoundedIcon sx={{ fontSize: { xs: '1rem', md: '1.5rem' }, marginX: { xs: '2px', md: '4px' }, color: yellow[300], transform: 'rotate(90deg)', order: props.player_team === 2 ? 6 : 0 }} />
    if (incident_type === '2nd Yellow card') return <Box>
      <RectangleRoundedIcon sx={{ fontSize: { xs: '1rem', md: '1.5rem' }, marginX: { xs: '1px', md: '1px' }, color: yellow[300], transform: 'rotate(90deg)', order: props.player_team === 2 ? 6 : 0 }} />
      <RectangleRoundedIcon sx={{ fontSize: { xs: '1rem', md: '1.5rem' }, marginX: { xs: '1px', md: '2px' }, color: red[500], transform: 'rotate(90deg)', order: props.player_team === 2 ? 6 : 0 }} />
      </Box>
    if (incident_type === 'Red card') return <RectangleRoundedIcon sx={{ fontSize: { xs: '1rem', md: '1.5rem' }, marginX: { xs: '2px', md: '4px' }, color: red[500], transform: 'rotate(90deg)', order: props.player_team === 2 ? 6 : 0 }} />
    if (incident_type === 'Penalty missed') return <ClearIcon sx={{ color: red[500], fontSize: { xs: '1rem', md: '1.5rem' }, marginX: { xs: '2px', md: '4px' }, order: props.player_team === 2 ? 6 : 0 }} />
  }


  return (
    <TableCell sx={{ bgcolor: (props.incident_type === "Goal" || props.incident_type === "Penalty scored") && indigo[900], color: (props.incident_type === "Goal" || props.incident_type === "Penalty scored") && 'white', paddingX: { xs: '8px', md: '16px' } }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: props.player_team === 1 ? 'flex-start' : 'flex-end' }}>
        <Typography sx={{ marginX: { xs: '2px', md: '4px' }, color: (props.incident_type === "Goal" || props.incident_type === "Penalty scored") ? grey[300] : grey[700], order: props.player_team === 2 ? 7 : 0, fontSize: { xs: '0.75rem', md: '1rem' } }}>
          {props.time}'
        </Typography>
        {getIcon(props.incident_type)}
        <Typography sx={{ display: 'flex', alignItems: 'center', marginX: '2px', order: props.player_team === 2 ? 5 : 0, fontSize: { xs: '0.75rem', md: '1rem' } }}>{(props.incident_type)}</Typography>
        <Typography sx={{ order: props.player_team === 2 ? 4 : 0, marginX: '2px' }}>-</Typography>
        <Typography sx={{ order: props.player_team === 2 ? 3 : 0, marginX: '4px', fontSize: { xs: '0.75rem', md: '1rem' } }}>
          {props.playerOneName}
        </Typography>
        {props.secondary && <Typography sx={{ color: (props.incident_type === "Goal" || props.incident_type === "Penalty scored") ? grey[300] : grey[700], fontSize: { xs: '0.7rem', md: '0.9rem' }, display: 'flex', alignItems: 'center', marginX: '4px', order: props.player_team === 2 ? 2 : 0 }}>
          {props.secondary}
        </Typography>}
        {
          props.score && <Typography sx={{ color: (props.incident_type === "Goal" || props.incident_type === "Penalty scored") ? grey[300] : grey[700], fontSize: { xs: '0.7rem', md: '0.9rem' }, display: 'flex', alignItems: 'center', marginX: '4px', order: props.player_team === 2 ? 1 : 0 }}>
            {props.score[0]} - {props.score[1]}
          </Typography>
        }
      </Box>
    </TableCell>
  )
}

export default TimelineItem