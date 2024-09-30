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
          height:  isMobile ? '460px' : '522px',
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
            About
            <br/>
            <br/>
            I am a product architect operating at the intersection of architecture, engineering, construction (AEC), and technology.
            <br/>
            <br/>
            I began my career at Gehry Technologies in Dubai, using CATIA on architectural projects that demanded advanced precision.
            <br/>
            In Hong Kong with 10 Design, I developed computational design methods for rationalizing geometrical facades for a super unique structure that was realized in 2018.
            <br/>
            In New York, I managed building information model of the World Trade Center reconstruction, and led the VDC department on the Grand Central Expansion Mega Project.
            <br/>
            <br/>
            To deepen my understanding of the buildling craft, I designed and built an off-grid property in upstate New York and co-authored Virtual Design and Construction textbook.
            <br/>
            <br/>
            Before co-founding Bldrs.ai, I contributed to the development of digital applications for Google to better manage their global real estate portfolio.
            <br/>
            <br/>
            I believe technological transformation is long overdue in the AEC industry and actively work to advance it.
          </Typography>
          </Stack>
        </Paper>
  );
}

export default Summarized;