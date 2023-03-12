import React from 'react';
import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import LeagueTable from './LeagueTable';
import EuropeLeagueTable from './EuropeLeagueTable';
import Loader from './Loader';

const League = () => {
  const [leagueData, setLeagueData] = useState({});
  const [europeTables, setEuropeTables] = useState({});
  const [europePlayoffs, setEuropePlayoffs] = useState({});
  const [loading, setLoading] = useState(true);
  const { country } = useParams();
  const { league } = useParams();

  const updateNormalLeague = async () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY_7,
        'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
      }
    };

    const url = `https://livescore6.p.rapidapi.com/leagues/v2/get-table?Category=soccer&Ccd=${country}&Scd=${league}`;
    setLoading(true);
    let response = await fetch(url, options);
    let data = await response.json();
    setLeagueData(data);
    setLoading(false);
  }

  const updateEuropeLeague = async () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY_7,
        'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
      }
    };

    setLoading(true);
    const data = await Promise.all([
      fetch(`https://livescore6.p.rapidapi.com/competitions/get-table?CompId=${league === 'uefa-champions-league' ? 60 : 36}`, options).then(response => response.json()),
      fetch(`https://livescore6.p.rapidapi.com/matches/v2/list-by-league?Category=soccer&Ccd=${league.replace(/uefa-/, '')}&Timezone=5.5`, options).then(response => response.json())
    ])

    setEuropeTables(data[0]);
    setEuropePlayoffs(data[1]);
    setLoading(false);
  }
  
  const location = useLocation();
  useEffect(() => {
    country === 'europe' ? updateEuropeLeague() : updateNormalLeague();
  }, [location.pathname]) // eslint-disable-line react-hooks/exhaustive-deps


  return (
    <>
    {loading ? <Loader sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '700px'}}/> : 
      <Box sx={{ width: { xs: '95%' }, maxWidth: { xl: '1250px', lg: '1000px', md: '800px', xs: '575px' }, marginX: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', '& > div': { borderRadius: '8px' } }}>
        {country === 'europe' ? <EuropeLeagueTable country={country} league={league} tables={europeTables} playoffs={europePlayoffs.Stages.filter(stage => stage.Snm.slice(0, 13) !== 'Qualification' && stage.Snm.slice(0, 5) !== 'Group')} /> : <LeagueTable country={leagueData.Cnm} league={leagueData.CompN} table={leagueData.LeagueTable.L[0].Tables[0]} />}
      </Box>}
    </>
  )
}

export default League