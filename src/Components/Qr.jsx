import * as React from 'react';
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import QrCodeIcon from '@mui/icons-material/QrCode';
import Dialog from './Dialog';


const Qr = () => {
  return(
    <Stack
    direction="row"
    alignItems="center"
    spacing={0}
    >
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
                style={{ width: '200px', height: '200px', borderRadius:'20px' }}  // Set width and height here
              />
            </ImageListItem>
          </ImageList>
        </Box>
        }
      />
    </Stack>
  )

}

export default Qr
