import React from 'react';
import { useState, useEffect } from 'react';
import { Box, TextField, Typography } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { grey } from "@mui/material/colors";
import LeagueHeading from './LeagueHeading';
import FixtureItem from './FixtureItem';
import Loader from './Loader';


const compIds = ["75", "77", "68", "65", "67", '60', '36'];

export default function MatchesComp() {
  const [dateValue, setDateValue] = useState(new Date());
  const [match, setMatch] = useState({});
  const [loading, setLoading] = useState(true);

  const updateMatches = async (date)=> {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY_1,
        'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
      }
    };

    const url = `https://livescore6.p.rapidapi.com/matches/v2/list-by-date?Category=soccer&Date=${date}&Timezone=5.5`;
    setLoading(true);
    let response = await fetch(url, options);
    let data = await response.json();
    setMatch(data);
    setLoading(false);
}

  useEffect(() => {
    const d = dateValue.toISOString().substring(0, 10).replace(/-/g, '');
    updateMatches(d);
  }, [dateValue])

  return (
    <>
    {loading ? <Loader sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: { xs: '100%', lg: '65%' }}}/> : 
    <Box sx={{ width: { xs: '100%', lg: '65%' }, height: '600px', boxShadow: 2, border: 0, borderTopLeftRadius: 14, borderTopRightRadius: 14, display: 'flex', flexDirection: 'column', marginY: { xs: '10px', lg: 0 } }}>
      <Box sx={{ display: 'flex', alignItems: 'center', borderBottom: '2px solid lightgrey', "& div.MuiToolbar-root": { paddingX: 1, paddingY: 1 } }}>
        <Typography sx={{ fontSize: { xs: '1.25rem', md: '2rem' }, marginX: { xs: '10px', sm: '20px' } }}>
          Matches
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs} >
          <DatePicker
            desktopModeMediaQuery='@media (min-width: 900px)'
            inputFormat='DD/MM/YYYY'
            label=""
            value={dateValue}
            onChange={(newValue) => {
              setDateValue(newValue);
            }}
            renderInput={(params) => <TextField size='small' sx={{ paddingY: { xs: '4px', md: '8px' }, marginY: { xs: 0, md: '8px' }, marginLeft: 'auto', marginRight: 2, width: '150px', borderRadius: 2 }} {...params} />}
          />
        </LocalizationProvider>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', overflowY: 'scroll' }}>
        {match.Stages.length === 0 &&
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginY: 'auto', height: '600px', width: '100%', bgcolor: grey[50] }}>
            <Typography sx={{ textShadow: '4px 4px 12px #9e9e9e', color: grey[700], fontSize: { xs: '1.25rem', md: '2.5rem' } }}>
              No matches today
            </Typography>
          </Box>}
        <Box>
          {match.Stages.filter(country => compIds.includes(country.CompId)).map(country => (
            <Box key={country.Sid}>
              <LeagueHeading leagueName={country.Snm} leagueCountry={country.Cnm} leagueSlug={country.CompD === 'UEFA' ? country.Ccd : country.Scd} countrySlug={country.Ccd} logo={country.CompD === 'UEFA' ? `https://tipsscore.com/resb/league/europe-uefa-${country.Ccd}.png` : `https://tipsscore.com/resb/league/${country.Ccd}-${country.Scd === 'laliga-santander' ? 'laliga' : country.Scd}.png`} />
              {country.Events.map(match => (
                <Box key={match.Eid}>
                  <FixtureItem data={match} />
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>}
    </>
  );
}