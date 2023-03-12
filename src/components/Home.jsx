import React, { useEffect } from 'react';
import { Box} from '@mui/material'
import MatchesComp from './MatchesComp'
import HomeNews from './HomeNews.jsx';
import NewsComp from './NewsComp';

const Home = () => {

  useEffect(() => {
    document.title = 'FootySport';
  }, [])
  
  return (
    <Box sx={{width: {xs: '95%'}, maxWidth: {xl: '1250px', lg: '1000px', md: '800px', xs: '575px'}, display: 'flex', justifyContent: 'center', marginX: 'auto', marginY: {xs: '20px', lg: '40px'}, flexDirection: 'column'}}>
      <Box sx={{display: 'flex', flexDirection: {xs: 'column', lg: 'row' , justifyContent: 'space-between'}}}>
        <MatchesComp/>
        <HomeNews/>
      </Box>
      <NewsComp title={'Match Reports'} categoryId={	
"2022081113203185684"} apiKey={process.env.REACT_APP_API_KEY_2}/>
      <NewsComp title={'Predictions'} categoryId={"2022062716001253418"} apiKey={process.env.REACT_APP_API_KEY_3}/>
      <NewsComp title={'Champions League'} categoryId={	
"2021082315501532387"} apiKey={process.env.REACT_APP_API_KEY_4}/>
      <NewsComp title={'Transfer News'} categoryId={"2022010516022274132"} apiKey={process.env.REACT_APP_API_KEY_5}/>
    </Box>
  )
}

export default Home