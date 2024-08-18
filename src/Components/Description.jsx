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
          <Stack justifyContent={'center'}  spacing={1} sx={{padding:'30px 10px', width:isMobile ? 320 : 600}}>
            <Typography  variant='body2' sx={{fontWeight:'bold'}}>
            Hello.
            </Typography>
            <Typography  variant='body2' sx={{fontWeight:'bold'}}>
            I am a product manager operating at the intersection of AEC and technology.
            </Typography>
            <Typography  variant='body2'>
            I have a deep appreciation for the built environment and strive to make a difference in the world through my work.
            Over the years, I have worked in construction, mechanical and structural engineering, and design offices. In the last six years, I have been involved in various startups.
            </Typography>
            <Typography variant='body2'>
             Most recently, I co-founded Bldrs.ai, a company aimed at introducing tech tooling into the AEC workflows.
             We are developing the fastest and the most accurate engine to process IFC files. Our webapp Share provides tight integration with Github, for versioning and issue tracking.
             <br/>
             It is Awesome.
            </Typography>
            <Typography variant='body2' sx={{fontWeight:'bold'}}>
            Let's collaborate
            </Typography>
          </Stack>
        </Paper>
  );
}

export default Description;
