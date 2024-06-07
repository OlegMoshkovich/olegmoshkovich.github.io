import React from 'react'
import './App.css';
import useStore from './Store';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AppBar from './AppBar/AppBar'
import Paper from '@mui/material/Paper';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';



const iframeString = `
  <iframe src="https://bldrs.ai" />
`;


function Share() {
  const isMobile = useMediaQuery('(max-width:600px)');
  const {
    showBldrs,
   } = useStore();
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
      {showBldrs &&
        <iframe style={{width:isMobile?'90%':'60%', height:'80%', borderRadius:'20px', marginTop:'30px'}}
        title='model'
        src="https://deploy-preview-1210--bldrs-share.netlify.app" width="100%"  frameborder="0">
            Your browser does not support iframes.
        </iframe>
      }
        {!showBldrs &&
        <Paper
        sx={{
          zIndex:3,
          backgroundColor: theme.palette.background.default,
          color:theme.palette.primary.main
        }}
        >
          <Stack justifyContent={'center'} alignItems={'center'} spacing={2} sx={{padding:'30px 10px', width:300}}>
            <Typography sx={{textAlign:'center', padding:'0px 30px', lineHeight:'2em', fontWeight: 'bold' }} variant='overline'>
            Our first Product Share is a 3D viewer built on top of custom bldrs engine and Github.
            </Typography>
            <Typography sx={{textAlign:'center', padding:'0px 30px', lineHeight:'2em', }} variant='overline'>
            It opens IFC and STEP digital twins and includes tools for collaboration.
            </Typography>
            <Typography sx={{textAlign:'center', padding:'0px 30px',lineHeight:'2em'}} variant='overline'>
              Share can be integrated into other websites using an iframe.
            </Typography>
            <Typography sx={{fontWeight:'bold'}}>
              {iframeString}
            </Typography>
          </Stack>
        </Paper>

        }
    </Stack>
    </>
  );
}

export default Share;
