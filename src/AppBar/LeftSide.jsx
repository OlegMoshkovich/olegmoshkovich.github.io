import * as React from 'react';
import {
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';



const LeftSide = ({onGoToLocation}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return(
    <Stack
    direction='row'
    alignItems="center"
    spacing={1}
    sx={{marginLeft:'-10px'}}
    >
       <Typography variant='p' sx={{fontWeight: 'bold', paddingLeft:isMobile ? '14px': '0px' }} color='primary'>
        Oleg Moshkovich
      </Typography>
    </Stack>
    )
  }

  export default LeftSide
