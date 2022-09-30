import React from 'react';
import { Box } from '@mui/material';
import BodyPart from './BodyPart';

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <div>
      {data.map((i) => (
        <Box key={i.id || i} itemId={i.id || i} title={i.id || i} m='0 40px'>
          <BodyPart item={i} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </Box>
      ))}
    </div>
  );
};

export default HorizontalScrollbar;
