import React from 'react';
import { Box } from '@mui/material';
import { fetchData } from '../utils/fetchData';

const HorizontalScrollbar = ({ data }) => {
  return (
    <div>
      {data.map((i) => (
        <Box key={i.id || i} itemId={i.id || i} title={i.id || i} m='0 40px'>
          {i}
        </Box>
      ))}
    </div>
  );
};

export default HorizontalScrollbar;
