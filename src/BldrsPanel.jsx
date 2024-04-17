import * as React from 'react';
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'


export default function BldrsPanel({onClose}){
return(
  <Stack
  direction='column'
  justifyContent="center"
  spacing={1}
  sx={{overflow: 'scroll', width: '200px'}}
>
  <Stack
    direction='column'
    justifyContent="center"
    spacing={1}
    sx={{ overflow: 'scroll', width: '200px' }}
  >
        <Chip
          label={`Sample Project`}
          variant='outlined'
          onClick={async () => {
            onClose()
            window.open('https://www.bldrs.ai/share/v/gh/Swiss-Property-AG/Eisvogel-Public/main/EISVOGEL.ifc#c:-81.541,25.413,39.108,6.293,3.405,-22.21;', '_blank', 'noopener, noreferrer');
          }}
          color='primary'
        />
        <Chip
          label={'Sample Portfolio'}
          variant='outlined'
          onClick={async () => {
            onClose()
            window.open('https://bldrs-ai.github.io/portfolio/', '_blank', 'noopener, noreferrer');
          }}
          color='primary'
        />

    </Stack>
  </Stack>
)
}
