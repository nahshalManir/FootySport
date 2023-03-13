import React from 'react';
import { useParams} from 'react-router-dom';
import { Box } from '@mui/material';
import LeagueTable from './LeagueTable';
import EuropeLeagueTable from './EuropeLeagueTable';

const League = () => {
  const { country } = useParams();
  const { league } = useParams();


  return (
    <Box sx={{ width: { xs: '95%' }, maxWidth: { xl: '1250px', lg: '1000px', md: '800px', xs: '575px' }, marginX: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', '& > div': { borderRadius: '8px' } }}>
      {country === 'europe' ? <EuropeLeagueTable country={country} league={league} /> : <LeagueTable country={country} league={league} />}
    </Box>
  )
}

export default League