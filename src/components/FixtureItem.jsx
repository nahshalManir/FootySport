import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { grey } from '@mui/material/colors';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Link } from 'react-router-dom';


function isMatchLive(eps) {
  return (eps !== 'NS' && eps !== 'FT' && eps !== 'AP' && eps !== 'Postp.')
}

const FixtureItem = (props) => {
  const theme = useTheme();
  const downSm = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ display: 'flex', flexBasis: '100%', justifyContent: 'center', flexGrow: '1', paddingY: 1, borderBottom: 2, borderColor: 'lightgrey' }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', flex: '1' }}>
      <Typography sx={{ fontSize: '0.7rem', display: 'flex', alignItems: 'center', color: (isMatchLive(props.data.Eps)) ? 'red' : grey[700], marginLeft: { xs: '4px', md: '8px' }, marginRight: 'auto', animation: (isMatchLive(props.data.Eps)) && 'pulsate-transparent 1.5s ease-out infinite' }}>
        {(props.data.Eps === "NS" && `${(props.data.Esd).toString().slice(8, 12)}`) || ((isMatchLive(props.data.Eps)) && `Live ${props.data.Eps}`) || (props.data.Eps)}
      </Typography>
        <Typography sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginRight: '4px', fontSize: { xs: '0.7rem', md: '1rem' } }} >
          {downSm ? props.data.T1[0].Nm.slice(0, 12) : props.data.T1[0].Nm}
        </Typography>
        <Box sx={{ width: { xs: '24px', md: '32px' } }}>
          <img src={`https://lsm-static-prod.livescore.com/medium/${props.data.T1[0].Img}`} width={'100%'} alt="" />
        </Box>
      </Box>
      <Typography sx={{ bgcolor: grey[400], paddingX: { xs: 1.5, md: 2 }, marginX: { xs: '8px', md: 2 }, borderRadius: { xs: 3.5, md: 4 }, display: 'flex', alignItems: 'center', fontSize: { xs: '0.75rem', md: '1rem' } }}>
        {(props.data.Eps === "NS" || props.data.Eps === 'Postp.')  ? ('vs') : (`${props.data.Tr1} : ${props.data.Tr2}`)}
      </Typography>
      <Box sx={{ display: 'flex', flex: '1', justifyContent: 'flex-start' }}>
        <Box sx={{ width: { xs: '24px', md: '32px' } }}>
          <img src={`https://lsm-static-prod.livescore.com/medium/${props.data.T2[0].Img}`} width={'100%'} alt="" />
        </Box>
        <Typography sx={{ display: 'flex', alignItems: 'center', marginLeft: '4px', fontSize: { xs: '0.7rem', md: '1rem' } }}>
          {downSm ? props.data.T2[0].Nm.slice(0, 12) : props.data.T2[0].Nm}
        </Typography>
      <Box sx={{ marginX: '4px', display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
        {(props.data.Eps !== "NS" && props.data.Eps !== 'Postp.') ?
          <Link to={`/${props.data.Eid}`}>
            <ArrowCircleRightOutlinedIcon sx={{ color: grey[700], fontSize: { xs: '1.25rem', md: '1.5rem' } }} />
          </Link> : <AccessTimeIcon sx={{ color: grey[700], fontSize: { xs: '1.25rem', md: '1.5rem' } }} />}
      </Box>
      </Box>
    </Box>
  )
}

export default FixtureItem