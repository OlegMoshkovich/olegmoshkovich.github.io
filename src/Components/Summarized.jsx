import React from 'react'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


function Summarized() {
  const isMobile = useMediaQuery('(max-width:600px)');
   const theme = useTheme()

  return (
        <Paper
        elevation={1}
        sx={{
          zIndex:3,
          backgroundColor: theme.palette.background.default,
          color: theme.palette.primary.main,
          padding: '0px 10px',
          // height:  isMobile ? '460px' : '580px',
          overflow:'scroll',
        }}
        >
          <Stack justifyContent={'center'}  spacing={1}
          sx={{
          padding:'20px 10px',
          width:isMobile ? 320 : 460,
          }}>
          <Typography
          variant={isMobile?'caption':'body2'}
          sx={{
            lineHeight:isMobile?'1.2em':'auto',
            fontWeight:isMobile?'auto':'500',
            fontFamily: 'Inter',
          }}

          >
Oleg Moshkovich
<br/>
<br/>
I'm building <a href="https://waitlist.cadence.day">Cadence</a> to design processes that help teams achieve cohesion and momentum. I started the project in September 2024, assembled the team, and we released our MVP by May 2025.
<br/>
<br/>
Before that, I co-founded <a href="https://bldrs.ai">bldrs.ai</a>, which focused on bringing advanced Git-based workflows into the architecture industry. The team was great, but our processes didn't quite work, we struggled to build momentum. The lessons from that experience have shaped everything we're doing at Cadence.
<br/>
One of the most complex teams I’ve led was during the Grand Central Project in NYC. With a team of just four, we digitized collaboration and visual communication on one of the world’s most complex infrastructure projects. It was a challenging and deeply meaningful.
<br/>
To satisfy my curiosity and gain broader insights, 
I’ve worked as an engineer, product manager and operator. 
<br/>
I’ve experienced different industries and cultures, and learned to adapt since effective processes are always tailored to the context.
            
          </Typography>
          </Stack>
        </Paper>
  );
}

export default Summarized;
