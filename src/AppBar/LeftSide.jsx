import * as React from 'react';
import { Stack, useMediaQuery, useTheme, Dialog, Box } from '@mui/material';


const LeftSide = ({ onGoToLocation }) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        sx={{position:'absolute', top:'10px', left:'20px'}}
      >
          <img
          onClick={handleClickOpen}
          alt='avatar'
          src={`${process.env.PUBLIC_URL}/images/16.png`}
          style = {{
            width:isMobile? '15%' :'7%',
            height:isMobile? '15%' :'7%',
            borderRadius: '50%',
            cursor:'pointer'
          }}/>
      </Stack>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        PaperProps={{
          sx: {
            backgroundColor: 'transparent',
            boxShadow: 'none',
            overflow: 'visible'
          }
        }}
      >
        <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img
            alt='avatar'
            src={`${process.env.PUBLIC_URL}/images/16.png`}
            style={{
              maxWidth: isMobile ? '90vw' : '70vw',
              maxHeight: '90vh',
              objectFit: 'contain'
            }}
          />
        </Box>
      </Dialog>
    </>
  );
};

export default LeftSide;
