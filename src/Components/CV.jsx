import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Dialog,
  IconButton,
  Slide,
  Stack,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery
} from '@mui/material';
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import CloseIcon from '@mui/icons-material/Close';
import GetAppOutlinedIcon from '@mui/icons-material/GetAppOutlined';

const Transition = React.forwardRef((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
));

const CV = () => {
  const [open, setOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <>
      <Button
        variant="outlined"
        size="small"
        sx={{ borderRadius: '14px', padding:'0px 10px'}}
        color="primary"
        onClick={() => setOpen(true)}
      >
        CV
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={() => setOpen(false)}
        TransitionComponent={Transition}
      >
        <AppBar
          sx={{
            boxShadow: 'none',
            backgroundColor: theme.palette.background.default,
          }}
        >
          <Toolbar>
            <Stack direction="row" justifyContent="center" alignItems="center" sx={{ ml: '-10px' }}>
              <Typography variant="p" color="primary" sx={{ ml: 2, fontWeight: 'bold' }}>
              Curriculum vitae
              </Typography>
            </Stack>
            <Box sx={{ flexGrow: 1 }} />

            {/* Timeline View Button */}
            <IconButton
              sx={{
                margin: '0 4px',
                borderRadius: '50%',
                boxShadow: theme.shadows[1],
              }}
              size="small"
              onClick={() => window.open('https://drive.google.com/drive/u/0/folders/1tIZ3qAUcsu46h6poDRiaDT-vk024y6mm')}
            >
              <GetAppOutlinedIcon fontSize="small" />
            </IconButton>

            <IconButton sx={{ margin: '0 4px' }} size="small" onClick={() => setOpen(false)}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </Toolbar>
        </AppBar>
          <Stack
            justifyContent='center'
            alignItems={'center'}
            sx={{
              paddingTop: isMobile ? '60px' : '60px',
              width: '100%',
            }}
          >
            <ImageList
              rowWidth={400}
              cols={1}
              sx={{
                width: isMobile ? '90%' : '50%',
              }}>
                  <ImageListItem key={'image'} >
                    <img
                      src={`${process.env.PUBLIC_URL}/images/10.png`}
                      alt={'resume'}
                      loading="lazy"
                    />
                  </ImageListItem>
              </ImageList>
          </Stack>
      </Dialog>
    </>
  );
};

export default CV;
