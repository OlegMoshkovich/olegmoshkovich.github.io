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
I am building <a href="https://waitlist.cadence.day/" target="_blank" rel="noopener noreferrer">Cadence</a> to help me design processes that enable teams to achieve cohesion and momentum. 
I started Cadence in September of 2024, assembled the team and we released the MVP by May of 2025.<br/>
My previous company <a href="https://bldrs.ai" target="_blank" rel="noopener noreferrer">bldrs.ai</a>, focused on integrating advanced Git-based workflows into the architecture industry. 
<br/>
The bldrs team was awesome, but the process never quite worked, we were not able to achieve cohesion and velocity.<br/>
All the lessons from bldrs were applied to Cadence.<br/>
The most complex team I have ever operated was on the Grand Central Project in NYC. It was very rewarding experience, we were able to digitize the process of collaboration and execution on one of the most complex infrastructure projects in the world—with a team of four.<br/>
To gain insights and satisfy curiousty, I have also contributed to various teams and startups as an engineer, product designer, and product manager.<br/>
I have worked in different industries and lived in different cultures. <br/>
I am able to adapt and bring value by relying on my diverse experience—while recognizing that every team is unique, and therefore the process must be tailored to the context.

            
            
          </Typography>
          </Stack>
        </Paper>
  );
}

export default Summarized;
