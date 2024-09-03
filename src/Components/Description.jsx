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
          <Typography variant='body2' sx={{ fontWeight: 'bold' }}>
            Hello.
          </Typography>
          <Typography variant='body2' sx={{ fontWeight: 'bold' }}>
            I am a product engineer and product manager with BIM expertise, working at the intersection of AEC and technology.
          </Typography>
          <Typography variant='body2'>
            I have worked in design and engineering offices, on construction sites, and in startups.
            These experiences have equipped me with the ability to adapt to different organizational structures and cultures,
            allowing me to contribute effectively in both engineering and product roles.
          </Typography>
          <Typography variant='body2'>
            Most recently, I co-founded Bldrs.ai, a company focused on introducing tech tools into AEC workflows.
          </Typography>
          <Typography variant='body2'>
            I hope to use my knowledge and experience to contribute to the Rebuild Ukraine effort.
          </Typography>
          </Stack>
        </Paper>
  );
}

export default Description;
