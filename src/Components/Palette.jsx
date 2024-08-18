import * as React from 'react';
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import useStore from '../Store';
import {colors} from '../colors'


const Palette = () => {
  const { setColorTheme } = useStore()
return(
  <Stack
  direction='row'
  justifyContent={'center'}
  alignContent={'center'}
  spacing={1}
  >
    <IconButton
      size="medium"
      edge="end"
      color="inherit"
      onClick={()=>setColorTheme(0)}
      sx={{border:'none', backgroundColor:colors[0].primary}}
    />
      <IconButton
      size="medium"
      edge="end"
      color="inherit"
      onClick={()=>setColorTheme(1)}
      sx={{border:'none', backgroundColor:colors[1].primary}}
    />
    <IconButton
      size="medium"
      edge="end"
      color="inherit"
      onClick={()=>setColorTheme(2)}
      sx={{border:'none', backgroundColor:colors[2].primary}}
    />
  </Stack>
)
}

export default Palette
