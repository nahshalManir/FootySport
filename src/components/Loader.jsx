import React from 'react';
import { Box } from '@mui/material';

const Loader = (props) => {

  return (
    <Box sx={props.sx}>
      <div className="wrapper">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
      </div>
    </Box>
  )
}

export default Loader;