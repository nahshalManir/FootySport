import React, { useState, useEffect } from 'react';
import BigNewsItem from './BigNewsItem';
import SmallNewsItem from './SmallNewsItem';
import { Box, Typography } from '@mui/material';
import newsDataimp from './newData.json';
import { grey } from '@mui/material/colors';

const NewsComp = (props) => {
  const [newsData, setNewsData] = useState(newsDataimp.data);
  const [loading, setLoading] = useState(true);

  const updateNews = async () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': props.apiKey,
        'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
      }
    };

    const url = `https://livescore6.p.rapidapi.com/news/v2/list-by-sport?category=${props.categoryId}&page=1'`;
    setLoading(true);
    let response = await fetch(url, options);
    let data = await response.json();
    setNewsData(data.data);
    setLoading(false);
  }

  useEffect(() => {
    updateNews();
  }, [])

  return (
    <>
      {loading ? <></> :
        <Box sx={{ display: 'flex', flexDirection: 'column', marginY: { xs: '20px', lg: '60px' } }}>
          <Typography sx={{ fontSize: { xs: '2rem', lg: '3rem' }, borderBottom: 2, borderBottomColor: grey[300] }}>
            {props.title}
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateAreas: { xl: `'item-1 item-1 item-2 item-3' 'item-1 item-1 item-4 item-5' 'item-6 item-7 item-8 item-9'`, sm: `'item-1 item-2' 'item-3 item-4' 'item-5 item-6' 'item-7 item-8' 'item-9 item-null'`, md: `'item-1 item-2 item-3' 'item-4 item-5 item-6' 'item-7 item-8 item-9'`, xs: `'item-1' 'item-2' 'item-3' 'item-4' 'item-5' 'item-6' 'item-7' 'item-8' 'item-9'` }, marginX: 'auto', gap: { xs: '12px', lg: '28px' }, marginTop: '40px' }}>
            {newsData.filter((item, index) => index <= 8).map((item, index) => {
              if (index === 0) return (<Box key={item.id} sx={{ gridArea: 'item-1', "&:hover": { scale: { xs: '1.03', lg: '1.03' } }, transition: 'all 0.2s ease-out' }}>
                <BigNewsItem key={item.id} title={item.title} thumbnail={item.image.data.urls.uploaded.thumbnail} date={item.created_at} author={item.created_by.full_name} body={item.body} />
              </Box>)
              else return (<Box key={item.id} sx={{ gridArea: `item-${index + 1}`, "&:hover": { scale: { xs: '1.03', lg: '1.05' } }, transition: 'all 0.2s ease-out' }}>
                <SmallNewsItem key={item.id} title={item.title} thumbnail={item.image.data.urls.uploaded.thumbnail} date={item.created_at} author={item.created_by.full_name} body={item.body} />
              </Box>)
            })}
          </Box>
        </Box>}
    </>
  )
}

export default NewsComp