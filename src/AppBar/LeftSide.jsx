import * as React from 'react';
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography';



const LeftSide = ({onGoToLocation}) => {
  return(
    <Stack
    direction='row'
    alignItems="center"
    spacing={1}
    sx={{marginLeft:'-10px'}}
    >
      <Typography variant='p' sx={{fontWeight: 'bold'}} color='primary'>
        Oleg Moshkovich
      </Typography>
    </Stack>
    )
  }

  export default LeftSide
