import * as React from 'react';
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';


const Social = () => {
  return(
    <Stack
    direction="row"
    alignItems="center"
    spacing={0}
    sx={{marginRight:'-5px'}}
    >

      <IconButton size='small'
          onClick={()=>window.open('https://x.com/OlegMoshkovich')}
          sx={{border:'none'}}>
        <XIcon fontSize='small'/>
      </IconButton>
      <IconButton size='small'
          onClick={()=>window.open('https://www.linkedin.com/in/olegmoshkovich/')}
          sx={{border:'none'}}>
        <LinkedInIcon fontSize='small'/>
      </IconButton>
      <IconButton size='small'
          onClick={()=>window.open('https://github.com/OlegMoshkovich')}
          sx={{border:'none'}}>
        <GitHubIcon fontSize='small'/>
      </IconButton>
    </Stack>
  )

}

export default Social
