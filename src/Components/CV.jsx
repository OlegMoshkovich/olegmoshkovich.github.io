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
  Grid,
  useMediaQuery
} from '@mui/material';
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import useStore from '../Store';
import CloseIcon from '@mui/icons-material/Close';
import { ProjectsObj } from '../data/Project';
import InfoCard from './InfoCard';
// import GridViewIcon from '@mui/icons-material/GridView';
// import FastForwardOutlinedIcon from '@mui/icons-material/FastForwardOutlined';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import GetAppOutlinedIcon from '@mui/icons-material/GetAppOutlined';
// import CropPortraitIcon from '@mui/icons-material/CropPortrait';
import Corousel from './Corousel';

const Transition = React.forwardRef((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
));

const CV = () => {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState('grid'); // State to manage views
  const [isReversed, setIsReversed] = useState(false); // State to manage order of projects
  const [arrowDirection, setArrowDirection] = useState({
    grid: 'down',
    timeline: 'right',
  }); // State to manage arrow directions

  const theme = useTheme();
  // const { toggleExpandAll } = useStore();
  const isMobile = useMediaQuery('(max-width:600px)');

  const handleViewChange = (newView) => {
    if (view === newView) {
      // If the view is already active, reverse the order and toggle arrow direction
      setIsReversed(!isReversed);
      setArrowDirection((prevDirection) => ({
        ...prevDirection,
        [newView]:
          prevDirection[newView] === 'down'
            ? 'up'
            : prevDirection[newView] === 'up'
            ? 'down'
            : prevDirection[newView] === 'right'
            ? 'left'
            : 'right',
      }));
    } else {
      // Change view, reset order to default, and set arrow direction to default
      setView(newView);
      setIsReversed(false);
      setArrowDirection({
        grid: 'down',
        timeline: 'right',
      });
    }
  };

  // Determine the order of projects based on `isReversed` state
  const displayedProjects = isReversed ? ProjectsObj : [...ProjectsObj].reverse();

  return (
    <>
      <Button
        variant="outlined"
        size="small"
        sx={{ borderRadius: '20px'}}
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
            borderBottom: `1px solid ${theme.palette.divider}`,
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
                boxShadow: view === 'timeline' ? theme.shadows[1] : 'none',
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
                width: '50%',
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
