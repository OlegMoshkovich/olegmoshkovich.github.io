import * as React from 'react';
import { Stack, useMediaQuery, useTheme } from '@mui/material';


const LeftSide = ({ onGoToLocation }) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={1}
      sx={{position:'absolute', top:'10px', left:'20px'}}
    >
        <img
        onClick={()=>window.open("https://www.youtube.com/channel/UCK0LS82kZMwKIRTH4ILa8nA")}
        alt='avatar'
        src={`${process.env.PUBLIC_URL}/images/16.png`}
        style = {{
          width:isMobile? '15%' :'7%',
          height:isMobile? '15%' :'7%',
          borderRadius: '50%',
          cursor:'pointer'
        }}/>
    </Stack>
  );
};

export default LeftSide;
