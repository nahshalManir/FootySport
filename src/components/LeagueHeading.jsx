import React from 'react';
import { Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';


const LeagueHeading = (props) => {

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', paddingY: 1, paddingX: {xs: '4px', md: '8px'}, borderBottom: 2, borderColor: 'lightgrey', bgcolor: grey[100], position: 'sticky', top: 0 }}>
      <Box sx={{width: {xs: '36px', md: '44px'}}}>
        <img crossOrigin='anonymous' src={props.logo} width={'100%'} alt="" />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', marginX: '4px' }}>
        <Typography sx={{ display: 'flex', alignItems: 'center', marginX: '4px', fontSize: {xs: '0.8rem', md: '1rem'}}}>
         {props.leagueName}
        </Typography>
        <Typography sx={{ display: 'flex', alignItems: 'center', marginX: '4px', color: '#808080', fontSize: {xs: '0.6rem', md: '0.8rem'} }} variant='body2'>
          {props.leagueCountry}
        </Typography>
      </Box>
    </Box>
  )
}


export default LeagueHeading