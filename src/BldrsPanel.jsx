import * as React from 'react'
import Typography from '@mui/material/Typography'
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
        <Typography variant='caption' sx={{padding: '0 0 1em 0', textAlign: 'center'}}>
          Bldrs is integrating GitHub into AEC workflows
        </Typography>
        <Chip
          label={`Share`}
          variant='outlined'
          onClick={async () => {
            onClose()
            window.open('https://www.bldrs.ai/', '_blank', 'noopener, noreferrer');
          }}
          color='primary'
        />
        <Chip
          label={'Portfolio'}
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
