import React, {useState} from 'react';
import Button from '@mui/material/Button';
import MuiDialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';

export default function Dialog({
  icon,
  dialogTitle='dialog',
  dialogContent='sample content',
  actionTitle='ok',
  tooltipTitle,
  buttonTitle='',
}) {
  const [open, setOpen] = useState(false);
  const theme = useTheme()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      {buttonTitle.length>0 ?
        <Button
          size="small"
          sx={{ fontSize: 12 }}
          onClick={handleClickOpen}
        >
          {buttonTitle}
        </Button> :
        <Tooltip title={tooltipTitle}>
          <IconButton size='small' onClick={handleClickOpen} sx={{border:'none'}}>
            {icon}
          </IconButton>
        </Tooltip>
      }

      <MuiDialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            backgroundColor: theme.palette.background.default,
          }
        }}
      >
        <DialogTitle>
          {dialogTitle}
        </DialogTitle>
        <DialogContent
        >
          <DialogContentText>
            <Typography variant={'body2'}>
            {dialogContent}
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" size='small' onClick={handleClose}>{actionTitle}</Button>
        </DialogActions>
      </MuiDialog>
    </div>
  );
}
