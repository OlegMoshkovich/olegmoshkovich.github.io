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
          padding: '0px 10px',
          height:  isMobile ? '460px' : '560px',
          overflow:'scroll'
        }}
        >
          <Stack justifyContent={'center'}  spacing={1}
          sx={{
          padding:'20px 10px',
          width:isMobile ? 320 : 500,
          }}>
          <Typography variant='body2' sx={{ fontWeight: 'bold' }}>
          Oleg Moshkovich is a multi-disciplinary product architect operating at the intersection of architecture / engineering / construction (AEC) x technology.
          Within AEC, he has led projects at various scales and degrees of complexity.
          Oleg started his career working at Gehry Technologies in Dubai,
          leveraging methods appropriated from the aerospace industry to structure architectural projects which demanded advanced precision during construction.
          He continued his career in Hong Kong,
          leading an effort with RMJM to develop computational design methods for rationalizing geometrical facades.
          In New York, Oleg was invited by Lower Manhattan Development Corporation (LMDC) to structure and build information models for the World Trade Center reconstruction.
           This later led to involvement in the $18B Grand Central Expansion Mega Project, where he oversaw the design and development of a virtual construction ecosystem.
           To deepen his applied understanding of craft and architectural space, Oleg designed and constructed an off-grid property in upstate New York.
            He is also co-author of the textbook 'Implementing Virtual Design and Construction using BIM' (Routledge, 2016).
            Before Co-founding Bldrs.ai Oleg was engaged with Google, developing digital applications that allowed internal teams to better design and manage Google's global real estate portfolio.
            <br/>
            Oleg believes technological transformation is long overdue across the AEC industry and through each of his engagements actively works to make progressive strides in this direction.
          </Typography>
          </Stack>
        </Paper>
  );
}

export default Description;
