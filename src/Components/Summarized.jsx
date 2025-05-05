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
I am building <a href="https://waitlist.cadence.day/" target="_blank" rel="noopener noreferrer">Cadence</a> to help me craft processes that enable teams to achieve cohesion and momentum. With cadence I started from a blank page, assembled the team and brought the idea to a product within two quarters.<br/>
My previous project, <a href="https://github.com/bldrs-ai/conway" target="_blank" rel="noopener noreferrer">bldrs.ai</a>, focused on integrating advanced Git-based workflows into the architecture industry and creating a high-performance <a href="https://bldrs.ai" target="_blank" rel="noopener noreferrer">geometry engine</a>. 
<br/>
The bldrs team was awesome, but the process never quite worked, we were not able to achieve cohesion and velocity.<br/>
All the lessons from bldrs were applied to Cadence.<br/>
The most complex team I have ever operated was on the <a href="https://www.nycurbanism.com/east-side-access" target="_blank" rel="noopener noreferrer">Grand Central Project</a> in NYC. It was very rewarding experience, we were able to digitize the process of collaboration and execution on one of the most complex infrastructure projects in the world—with a team of five.<br/>
To gain insights into operations and the world, I have also contributed to teams as an engineer, product designer, and product manager.<br/>
I have worked in different industries and lived in different cultures. I am able to adapt and bring value by relying on my diverse experience—while recognizing that every team is unique, and therefore the process must be tailored to the context through listening and experimentation.

            
            
          </Typography>
          </Stack>
        </Paper>
  );
}

export default Summarized;
