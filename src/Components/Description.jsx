import React from 'react'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


function Description() {
  const isMobile = useMediaQuery('(max-width:600px)');
   const theme = useTheme()

  return (
        <Paper
        elevation={1}
        sx={{
          zIndex:3,
          backgroundColor: theme.palette.background.default,
          color: theme.palette.primary.main,
          padding: '0px 10px'
        }}
        >
          <Stack justifyContent={'center'}  spacing={1} sx={{padding:'30px 10px', width:isMobile ? 320 : 500}}>
            <Typography  variant='body2' sx={{fontWeight:'bold'}}>
            Hello.
            </Typography>
            <Typography  variant='body2' sx={{fontWeight:'bold'}}>
            I am a builder working at the intersection of AEC and technology.
            </Typography>
            <Typography  variant='body2'>
            I have a deep appreciation for constructed spaces and the systems that operate on a mega scale.
            My experience spans construction sites, engineering and design offices, and startups.
            </Typography>
            <Typography variant='body2'>
            Most recently, I co-founded Bldrs.ai, a company aimed at introducing tech tooling into AEC workflows. We developed and open-sourced Conway,
            the fastest and most complete engine for processing IFC models, and a web application called Share, built on top of the Conway engine, which provides integration
            with GitHub for versioning and issue tracking.
            </Typography>
            <Typography variant='body2' sx={{fontWeight:'bold'}}>
              Let's build together!
            </Typography>
          </Stack>
        </Paper>
  );
}

export default Description;
