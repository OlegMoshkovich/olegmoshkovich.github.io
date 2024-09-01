import * as React from 'react';
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import Link from '@mui/material/Link'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import QrCodeIcon from '@mui/icons-material/QrCode';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import Dialog from './Dialog';


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
      <Dialog
        actionTitle={'OK'}
        icon={<QrCodeIcon fontSize='small'/>}
        dialogTitle={
          <Typography variant='body2'>
            Oleg Moshkovich
          </Typography>
        }
        dialogContent={
          <Box>
          <ImageList cols={1}>
            <ImageListItem key={'image'}>
              <img
                src={`${process.env.PUBLIC_URL}/images/11.png`}
                alt={'resume'}
                loading="lazy"
                style={{ width: '200px', height: '200px' }}  // Set width and height here
              />
            </ImageListItem>
          </ImageList>
        </Box>
        }
      />
    </Stack>
  )

}

export default Social
