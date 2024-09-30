import React from 'react'
import './App.css';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import AppBar from './AppBar/AppBar'
import { useTheme } from '@mui/material/styles';
import Description from './Components/Description'
import Summarized from './Components/Summarized'
import Palette from './Components/Palette'
import Social from './Components/Social'
import Qr from './Components/Qr'


function Share() {
   const theme = useTheme()

  return (
    <>
    <AppBar/>
    <Stack
      direction='row'
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{
        position:'fixed',
        width:'100%',
        height:'100%',
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Summarized/>
    </Stack>
    <Box sx={{position: 'absolute', bottom: 14, right: 20}}>
      <Social/>
    </Box>
    <Box sx={{position: 'absolute', bottom: 14, left: 20}}>
      <Qr/>
    </Box>
    </>
  );
}

export default Share;
