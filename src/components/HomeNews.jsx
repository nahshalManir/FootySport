import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import HomeNewsItem from './HomeNewsItem.jsx';

const HomeNews = () => {
  const [newsData, setNewsData] = useState({});
  const [loading, setLoading] = useState(true);

  const updateNews = async () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY_1,
        'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
      }
    };

    const url = `https://livescore6.p.rapidapi.com/news/v2/list-by-sport?category=2021020913320920836&page=1'`;
    setLoading(true);
    let response = await fetch(url, options);
    let data = await response.json();
    setNewsData(data);
    setLoading(false);
  }

  useEffect(() => {
    updateNews();
  }, [])


  return (
    <>
    {loading ? <></> : 
      <Box sx={{ width: { xs: '100%', lg: '30%' }, marginY: { xs: '10px', lg: 0 } }}>
        <Box sx={{ height: '600px', boxShadow: 2, border: 0, borderTopLeftRadius: '8px', borderTopRightRadius: '8px', display: 'flex', flexDirection: 'column', marginY: { xs: '20px', sm: '40px', lg: 0 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', borderBottom: '2px solid lightgrey', paddingY: { xs: '4px' } }}>
            <Typography sx={{ fontSize: { xs: '1.25rem', md: '2rem' }, marginX: { xs: '10px', sm: '20px' } }}>
              Top Stories
            </Typography>
          </Box>
          <Box sx={{ overflowY: 'scroll' }}>
            {newsData.data.filter((item, index) => item.category.title === 'Football').filter((item, index) => index <= 8).map((item, index) => {
              return <HomeNewsItem key={item.id} title={item.title} thumbnail={item.image.data.urls.uploaded.thumbnail} date={item.created_at} author={item.created_by.full_name} body={item.body} />
            })}
          </Box>
        </Box>
      </Box>}
    </>
  )
}

export default HomeNews