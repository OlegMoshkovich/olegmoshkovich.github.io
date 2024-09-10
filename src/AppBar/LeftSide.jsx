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
        <img
          src={`${process.env.PUBLIC_URL}/images/12.png`}
          alt={'image_hero'}
          loading="lazy"
          style={{width:50}}
        />
    </Stack>
    )
  }

  export default LeftSide
