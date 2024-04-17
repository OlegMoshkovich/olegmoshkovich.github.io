import * as React from 'react';
import LogoB from '../Logos/LogoB'
import Stack from '@mui/material/Stack'
import useStore from '../Store';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Dialog from '../Dialog'
import BldrsPanel from '../BldrsPanel'


const LeftSide = ({onGoToLocation}) => {
  const {
   showBldrs,
   toggleShowBldrs
  } = useStore();

  return(
    <Stack
    direction='row'
    alignItems="center"
    spacing={1}
    sx={{marginLeft:'-10px'}}
    >
      <Dialog
        actionTitle={'OK'}
        icon={<LogoB/>}
        buttonColor={'primary'}
        iconButton={true}
        tabs={false}
        tabList={['Recent']}
        dialogTitle={
          <Typography variant='overline'>
            Bldrs.ai
          </Typography>
        }
        dialogContent={
          <BldrsPanel/>
        }
      />
      <Button variant={showBldrs?"contained":'outlined'} size='small' sx={{borderRadius:'30px', fontWeight:'bold'}}  color='primary' onClick={()=>toggleShowBldrs()}>
          Bldrs.ai
        </Button>
    </Stack>
    )
  }

  export default LeftSide
