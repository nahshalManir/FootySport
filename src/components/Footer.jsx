import React from 'react';
import logo from '../img/footysport-high-resolution-color-logo-1.png';
import { Box, Typography } from '@mui/material';
import { indigo } from '@mui/material/colors';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: indigo[900], display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', paddingY: {xs: '8px', md: '12px'} }}>
      <Box sx={{ height: { xs: '40px', md: '64px' }, marginX: { xs: '24px', lg: '44px' } }}>
        <img src={logo} alt="" height={'100%'} />
      </Box>
      <Typography sx={{color: 'white', fontSize: {xs: '0.65rem', md: '0.9rem'}}}>
        Latest Football News, Fixtures and Match Data
      </Typography>
      <Typography sx={{color: 'white', marginTop: {xs: '10px', md: '16px'}, fontSize: {xs: '0.5rem', md: '0.75rem', display: 'flex', alignItems: 'center'}}}>
        <CopyrightIcon sx={{width: {xs: '10px', md: '16px'}, marginX: {xs: '2px', md: '4px'}}}/> {`${(new Date()).getFullYear()}`} All rights reserved
      </Typography>
    </Box>
  )
}

export default Footer