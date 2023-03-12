import * as React from 'react';
import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { Link, useLocation } from 'react-router-dom';
import Hamburger from './Hamburger';
import { useMediaQuery, useTheme } from '@mui/material';
import { indigo } from '@mui/material/colors';
import logo from '../img/footysport-high-resolution-color-logo-1.png';

export default function ButtonAppBar() {
  const [value, setValue] = useState(0);
  const [path, setPath] = useState("/");
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('lg'));

  const location = useLocation();
  useEffect(() => {
    setPath(location.pathname);
    if (path === '/') setValue(0);
    else if (path === '/europe/uefa-champions-league') setValue(1);
    else if (path === '/europe/uefa-europa-league') setValue(2);
    else if (path === '/england/premier-league') setValue(3);
    else if (path === '/spain/laliga-santander') setValue(4);
    else if (path === '/germany/bundesliga') setValue(5);
    else if (path === '/france/ligue-1') setValue(6);
    else if (path === '/italy/serie-a') setValue(7);
  }, [path])



  return (
    <Box sx={{ flexGrow: 1, width: '100%' }}>
      <AppBar position="static" sx={{ bgcolor: indigo[900], display: 'flex', flexDirection: 'row', justifyContent: isMatch ? 'space-between' : 'center', alignItems: 'center' }}>
        <Box sx={{ height: { xs: '32px', md: '48px' }, marginX: { xs: '20px', lg: '40px' } }}>
          <Link to='/'>
            <img src={logo} alt="" height={'100%'} />
          </Link>
        </Box>
        <Box sx={{ marginX: { xs: '0px', lg: '24px' } }}>
          <Toolbar>
            {isMatch === true ?
              <Hamburger /> :
              <Tabs sx={{ margin: 'auto', textTransform: 'none' }} textColor='inherit' value={value} onChange={(e, value) => setValue(value)}>
                <Tab sx={{ textTransform: 'none' }} disableRipple={true} label='Home' to='/' component={Link} />
                <Tab sx={{ textTransform: 'none' }} disableRipple={true} label='UCL' to='/europe/uefa-champions-league' component={Link} />
                <Tab sx={{ textTransform: 'none' }} disableRipple={true} label='UEL' to='/europe/uefa-europa-league' component={Link} />
                <Tab sx={{ textTransform: 'none' }} disableRipple={true} label='Premier League' to='/england/premier-league' component={Link} />
                <Tab sx={{ textTransform: 'none' }} disableRipple={true} label='Laliga' to='spain/laliga-santander' component={Link} />
                <Tab sx={{ textTransform: 'none' }} disableRipple={true} label='Bundesliga' to='/germany/bundesliga' component={Link} />
                <Tab sx={{ textTransform: 'none' }} disableRipple={true} label='Ligue 1' to='/france/ligue-1' component={Link} />
                <Tab sx={{ textTransform: 'none' }} disableRipple={true} label='Serie A' to='/italy/serie-a' component={Link} />
              </Tabs>
            }
          </Toolbar>
        </Box>
      </AppBar>
    </Box>
  );
}
