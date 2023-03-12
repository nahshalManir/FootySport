import React from 'react';
import { Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import FixtureItem from './FixtureItem';

const Playoffs = (props) => {

  return (
    <Box sx={{ boxShadow: 1, marginY: {xs: '20px', md: '0px'}, marginBottom: {xs: '0px', md: '40px'}, borderRadius: '8px' }}>
      <Typography sx={{ fontSize: { xs: '1rem', md: '1.5rem' }, paddingY: { xs: '10px', md: '16px' }, paddingX: { xs: '8px', md: '16px' } }}>
        Playoffs
      </Typography>
      {props.playoffs.map(round => (<Box key={round.Sid} sx={{ width: '100%', '&:last-child div': { border: 0 } }}>
        <Box sx={{ bgcolor: grey[100] }}>
          <Typography sx={{ fontSize: { xs: '0.9rem', md: '1.2rem' }, paddingY: { xs: '6px', md: '10px' }, paddingX: { xs: '4px', md: '8px' } }}>
            {round.Snm}
          </Typography>
        </Box>
        {round.Events.map(match => (
          <Box key={match.Eid}>
            <FixtureItem data={match} />
          </Box>
        ))}
      </Box >))}
    </Box>
  )
}

export default Playoffs