import * as React from 'react';
import Stack from '@mui/material/Stack'
import Projects from '../Components/Projects'
import CV from '../Components/CV'


const RightSide = () => {
  return(
    <Stack
    direction="row"
    alignItems="center"
    spacing={1}
    sx={{marginRight:'-5px'}}
    >
      <CV/>
      <Projects/>
    </Stack>
  )

}

export default RightSide
