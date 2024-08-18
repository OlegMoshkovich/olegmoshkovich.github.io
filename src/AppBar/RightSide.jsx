import * as React from 'react';
import Stack from '@mui/material/Stack'
import Projects from '../Components/Projects'


const RightSide = () => {
  return(
    <Stack
    direction="row"
    alignItems="center"
    spacing={1}
    sx={{marginRight:'-5px'}}
    >
      <Projects/>
    </Stack>
  )

}

export default RightSide
