import React, {useState} from 'react';
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import useStore from '../Store';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import NightlightIcon from '@mui/icons-material/Nightlight';


const Palette = () => {
  const { setColorTheme } = useStore()
  const [light, setLight] = useState(true)

  const switchColor = () => {
    if(light){
      setColorTheme(1)
      setLight(false)
    } else {
      setColorTheme(0)
      setLight(true)
    }
  }
return(
  <Stack
  direction='row'
  justifyContent={'center'}
  alignContent={'center'}
  spacing={1}
  >
    <IconButton
      edge="end"
      size="small"
      onClick={() => switchColor()}
    >
      {light ? <LightModeOutlinedIcon fontSize='inherit' color='primary'/> : <NightlightIcon fontSize='inherit' color='primary'/>}

    </IconButton>
  </Stack>
)
}

export default Palette
