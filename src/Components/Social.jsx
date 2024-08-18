import * as React from 'react';
import LogoGit from '../Logos/LogoGit'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Social = () => {
  return(
    <Stack
    direction="row"
    alignItems="center"
    spacing={1}
    sx={{marginRight:'-5px'}}
    >
      <IconButton size='small'
            onClick={()=>window.open('https://www.linkedin.com/in/olegmoshkovich/')}
            sx={{border:'none'}}>
          <LinkedInIcon fontSize='small'/>
        </IconButton>
        <IconButton size='small'
            onClick={()=>window.open('https://github.com/OlegMoshkovich')}
            sx={{border:'none'}}>
          <LogoGit fontSize='small'/>
        </IconButton>
    </Stack>
  )

}

export default Social
