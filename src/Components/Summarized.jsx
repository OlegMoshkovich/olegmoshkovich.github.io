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
I come from a technical engineering background, followed by a master's in product architecture, a studio-based education centered on implementing computation into the design and realization of the built environment. 
<br/>
After masters, I moved into architectural design, focusing primarily on complex geometry requiring rationalization at mega scale. 
<br/>
That curiosity about mega-scale projects led me to digital twins, where I spent about six years in New York working on massive projects, leading digitalization and digital strategy. There, I started developing custom software to solve ubiquitous problems at scale, which pulled me into the startup world.
<br/>
I've worked at the intersection of product and engineering ever since, fascinated by the different aspects of building companies. Over the last ten years, I've been involved with about seven different ventures, depending on how you count since two of them restarted. 
<br/>
Most recently, I co-founded a company between the US and Switzerland and raised a solid seed round. I co-ran that for a couple of years, which was incredibly interesting and taught me hard lessons, mainly about structure and process. 
<br/>
After two and a half years, I decided to step out and start a self-funded project 'cadence' to really hone in on process and agency. And now I'm here.
            
          </Typography>
          </Stack>
        </Paper>
  );
}

export default Summarized;
