import * as React from 'react';
import {
  Stack,
} from '@mui/material';

const LeftSide = ({onGoToLocation}) => {
  return(
    <Stack
    direction='row'
    alignItems="center"
    spacing={1}
    >
      <a href="https://www.youtube.com/channel/UCK0LS82kZMwKIRTH4ILa8nA" target="_blank" rel="noopener noreferrer">
        <img
          src={`${process.env.PUBLIC_URL}/images/12.png`}
          alt={'image_hero'}
          loading="lazy"
          style={{width:50}}
        />
      </a>
    </Stack>
    )
  }

  export default LeftSide
