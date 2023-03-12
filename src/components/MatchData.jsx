import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Tabs, Tab, Toolbar, AppBar, Grow, useTheme, useMediaQuery } from '@mui/material';
import { amber, indigo, grey } from '@mui/material/colors';
import stadium from '../img/iso_stadium.png';
import Statistics from './Statistics';
import Lineups from './Lineups';
import Timeline from './Timeline';
import Loader from './Loader';

const MatchData = () => {
  const { matchId } = useParams();
  
  const [matchData, setMatchData] = useState({});
  const [otherDetails, setOtherDetails] = useState({});
  const [tabValue, setTabValue] = useState(0);
  const [statData, setStatData] = useState({});
  const [lineupData, setLineupData] = useState({});
  const [timelineData, setTimelineData] = useState({});
  const [loading, setLoading] = useState(true);

  const theme = useTheme();
  const downSm = useMediaQuery(theme.breakpoints.down('sm'));
  const downMd = useMediaQuery(theme.breakpoints.down('md'));

  function optionsWithKey(key) {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': key,
        'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
      }
    };

    return options;
  }

  const updateMatchDetails = async () => {
    setLoading(true);
    const data = await Promise.all([
      fetch(`https://livescore6.p.rapidapi.com/matches/v2/get-scoreboard?Eid=${matchId}&Category=soccer`, optionsWithKey(process.env.REACT_APP_API_KEY_2)).then(response => response.json()),
      fetch(`https://livescore6.p.rapidapi.com/matches/v2/get-info?Category=soccer&Eid=${matchId}`, optionsWithKey(process.env.REACT_APP_API_KEY_3)).then(response => response.json()),
      fetch(`https://livescore6.p.rapidapi.com/matches/v2/get-statistics?Category=soccer&Eid=${matchId}`, optionsWithKey(process.env.REACT_APP_API_KEY_4)).then(response => response.json()),
      fetch(`https://livescore6.p.rapidapi.com/matches/v2/get-lineups?Eid=${matchId}&Category=soccer`, optionsWithKey(process.env.REACT_APP_API_KEY_5)).then(response => response.json()),
      fetch(`https://livescore6.p.rapidapi.com/matches/v2/get-incidents?Eid=${matchId}&Category=soccer`, optionsWithKey(process.env.REACT_APP_API_KEY_6)).then(response => response.json())
    ])

    setMatchData(data[0]);
    setOtherDetails(data[1]);
    setStatData(data[2]);
    setLineupData(data[3]);
    setTimelineData(data[4]);
    setLoading(false);
  }

  useEffect(() => {
    updateMatchDetails();
  }, []) // eslint-disable-line react-hooks/exhaustive-deps


  return (
    <>
    {loading ? <Loader sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '700px'}}/> :
    <Box sx={{ width: { xs: '95%' }, maxWidth: { xl: '1250px', lg: '1000px', md: '800px', xs: '575px' }, alignItems: 'center', boxShadow: 2, justifyContent: 'center', marginY: 4, marginX: 'auto' }} >
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography sx={{ animation: matchData.Eps !== 'FT' && 'pulsate-transparent 1.5s ease-out infinite', fontSize: { xs: '1rem', md: '1.25rem' }, marginTop: {xs: '4px', md: '8px'} }}>
           {matchData.Eps !== 'FT' && 'Live'} {matchData.Eps}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }} >
        <Box sx={{ border: 4, borderColor: amber[100], borderRadius: '50%', bgcolor: amber[50], display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', right: '-12px', height: { xs: 60, md: 80 }, minWidth: { xs: 60, md: 80 } }}>
          <img style={{ width: '70%', height: '70%' }} src={`https://lsm-static-prod.livescore.com/medium/${matchData.T1[0].Img}`} alt="" />
        </Box>
        <Box sx={{ border: 2, borderColor: amber[100], paddingLeft: { xs: '12px', sm: '16px' }, bgcolor: amber[100], display: 'flex', alignItems: 'center', justifyContent: 'flex-start', height: { xs: 44, md: 56 }, width: { xs: '20%', sm: '30%' } }}>
          <Typography sx={{ fontSize: { xs: '1rem', md: '1.3rem' }, fontWeight: 'regular', fontFamily: 'Roboto' }} >
            {(!downMd && !downSm && matchData.T1[0].Nm) || (downMd && !downSm && matchData.T1[0].Nm.slice(0, 12)) || (downMd && downSm && matchData.T1[0].Abr)}
          </Typography>
        </Box>
        <Box sx={{ border: 2, borderColor: indigo[900], bgcolor: indigo[900], display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: { xs: 44, md: 56 }, width: '100px' }}>
          <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: { xs: '1.5rem', md: '2rem' }, color: 'white' }}>
            {matchData.Tr1} : {matchData.Tr2}
          </Typography>
          <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: { xs: '0.55rem', md: '0.75rem' }, color: 'white' }}>
            {matchData?.Trp1 === undefined ? "" : (`(${matchData.Trp1}) penalties (${matchData.Trp2})`)}
          </Typography>
        </Box>
        <Box sx={{ border: 2, borderColor: amber[100], paddingRight: { xs: '12px', sm: '16px' }, bgcolor: amber[100], display: 'flex', alignItems: 'center', justifyContent: 'flex-end', height: { xs: 44, md: 56 }, width: { xs: '20%', sm: '30%' } }}>
          <Typography sx={{ fontSize: { xs: '1rem', md: '1.3rem' }, fontWeight: 'regular', fontFamily: 'Roboto' }} >
            {(!downMd && !downSm && matchData.T2[0].Nm) || (downMd && !downSm && matchData.T2[0].Nm.slice(0, 12)) || (downMd && downSm && matchData.T2[0].Abr)}
          </Typography>
        </Box>
        <Box sx={{ border: 4, borderColor: amber[100], borderRadius: '50%', bgcolor: amber[50], display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', right: '12px', height: { xs: 60, md: 80 }, minWidth: { xs: 60, md: 80 } }}>
          <img style={{ width: '70%', height: '70%' }} src={`https://lsm-static-prod.livescore.com/medium/${matchData.T2[0].Img}`} alt="" />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-evenly', alignItems: { xs: 'flex-start', sm: 'center' }, marginY: 2, marginX: { xs: '12px' } }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ width: { xs: '72px', md: '96px' } }}>
            <img width='100%' src={stadium} alt="" />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', marginX: 1, "& p.MuiTypography-root": { fontSize: { xs: '0.75rem', md: '1rem' } } }}>
            <Box sx={{ display: 'flex' }}>
              <Typography sx={{ color: 'gray' }}>
                Referee :
              </Typography>
              <Typography>
                &nbsp;{otherDetails.Refs[0].Nm || 'N/A'}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex' }}>
              <Typography sx={{ color: 'gray' }}>
                Venue :
              </Typography>
              <Typography>
                &nbsp;{otherDetails.Vnm || 'N/A'}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex' }}>
              <Typography sx={{ color: 'gray' }}>
                Attendance :
              </Typography>
              <Typography>
                &nbsp;{otherDetails.Vsp || 'N/A'}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography sx={{ display: 'flex', alignItems: 'center', marginX: '8px', fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
                {matchData.Stg.CompN}
              </Typography>
              <Typography sx={{ display: 'flex', justifyContent: 'center', color: 'gray', fontSize: { xs: '0.9rem', md: '1.2rem' } }}>
                {matchData.Stg.CompD === 'UEFA' ? matchData.Stg.Snm : `Matchday ${matchData.ErnInf}`}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ flexGrow: 1, width: '100%' }}>
        <AppBar position="static" sx={{ bgcolor: grey[200], boxShadow: 'none', paddingTop: '4px' }}>
          <Toolbar className='event-data-bar'>
            <Tabs TabIndicatorProps={{ sx: { display: 'none' } }} sx={{ textTransform: 'none', "& button": { bgcolor: grey[200], transition: 'background-color 0.3s' }, "& button.Mui-selected": { backgroundColor: 'white', color: 'black', borderWidth: '1px 1px 0 1px', borderStyle: 'solid', borderColor: grey[400] } }} value={tabValue} onChange={(e, tabValue) => setTabValue(tabValue)}>
              <Tab sx={{ textTransform: 'none' }} disableRipple={true} label='Stats' />
              <Tab sx={{ textTransform: 'none' }} disableRipple={true} label='Lineups' />
              <Tab sx={{ textTransform: 'none' }} disableRipple={true} label='Timeline' />
            </Tabs>
          </Toolbar>
        </AppBar>
      </Box>
      {
        tabValue === 0 &&
        <Grow in={tabValue === 0} timeout={300}>
          <Box>
            <Statistics homeName={(!downMd && !downSm && matchData.T1[0].Nm) || (downMd && !downSm && matchData.T1[0].Nm.slice(0, 12)) || (downMd && downSm && matchData.T1[0].Abr)} awayName={(!downMd && !downSm && matchData.T2[0].Nm) || (downMd && !downSm && matchData.T2[0].Nm.slice(0, 12)) || (downMd && downSm && matchData.T2[0].Abr)} stats={statData} />
          </Box>
        </Grow>
      }
      {
        tabValue === 1 &&
        <Grow in={tabValue === 1} timeout={300}>
          <Box>
            <Lineups homeName={(!downMd && !downSm && matchData.T1[0].Nm) || (downMd && !downSm && matchData.T1[0].Nm.slice(0, 12)) || (downMd && downSm && matchData.T1[0].Abr)} awayName={(!downMd && !downSm && matchData.T2[0].Nm) || (downMd && !downSm && matchData.T2[0].Nm.slice(0, 12)) || (downMd && downSm && matchData.T2[0].Abr)} lineups={lineupData} />
          </Box>
        </Grow>
      }
      {
        tabValue === 2 &&
        <Grow in={tabValue === 2} timeout={300}>
          <Box>
            <Timeline homeName={(!downMd && !downSm && matchData.T1[0].Nm) || (downMd && !downSm && matchData.T1[0].Nm.slice(0, 12)) || (downMd && downSm && matchData.T1[0].Abr)} awayName={(!downMd && !downSm && matchData.T2[0].Nm) || (downMd && !downSm && matchData.T2[0].Nm.slice(0, 12)) || (downMd && downSm && matchData.T2[0].Abr)} timeline={timelineData} />
          </Box>
        </Grow>
      }
    </Box>}
    </>
  )
}

export default MatchData