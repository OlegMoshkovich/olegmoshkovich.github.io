import * as React from 'react';
import LogoGit from '../Logos/LogoGit'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import Dialog from './Dialog'


const Social = () => {
  return(
    <Stack
    direction="row"
    alignItems="center"
    spacing={1}
    sx={{marginRight:'-5px'}}
    >
      <Dialog
        actionTitle={'OK'}
        icon={<DescriptionOutlinedIcon fontSize='small'/>}
        dialogTitle={
          <Typography variant='body2'>
            Hi
          </Typography>
        }
        dialogContent={
          <Typography variant='body2'>
          Click <Link color='primary'>here</Link> to download the CV.
        </Typography>
        }
      />
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
