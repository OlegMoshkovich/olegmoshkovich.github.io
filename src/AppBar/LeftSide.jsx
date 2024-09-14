import * as React from 'react';
import { Stack } from '@mui/material';

const LeftSide = ({ onGoToLocation }) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={1}
      sx={{position:'absolute', top:'10px', left:'20px'}}
    >
      <a
        href="https://www.youtube.com/channel/UCK0LS82kZMwKIRTH4ILa8nA"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={`${process.env.PUBLIC_URL}/images/13.png`} style = {{width:'50px', borderRadius: '50%'}}/>
      </a>
    </Stack>
  );
};

export default LeftSide;
