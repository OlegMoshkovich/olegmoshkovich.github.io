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
// import CropPortraitIcon from '@mui/icons-material/CropPortrait';
import Corousel from './Corousel';

const Transition = React.forwardRef((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
));

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState('grid'); // State to manage views
  const [isReversed, setIsReversed] = useState(true); // State to manage order of projects
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
        sx={{ borderRadius: '14px', padding:'0px 10px'}}
        color="primary"
        onClick={() => setOpen(true)}
      >
        Projects
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
                Projects
              </Typography>
            </Stack>
            <Box sx={{ flexGrow: 1 }} />

            {/* Grid View Button */}
            <IconButton
              sx={{
                margin: '0 4px',
                borderRadius: '50%',
                boxShadow: view === 'grid' ? theme.shadows[1] : 'none',
              }}
              size="small"
              onClick={() => handleViewChange('grid')}
            >
              {isMobile ? (
                arrowDirection.grid === 'down' ? (
                  <KeyboardArrowDownIcon fontSize="small" />
                ) : (
                  <KeyboardArrowUpIcon fontSize="small" />
                )
              ) : (
                arrowDirection.grid === 'down' ? (
                  <KeyboardArrowDownIcon fontSize="small" />
                ) : (
                  <KeyboardArrowUpIcon fontSize="small" />
                )
              )}
            </IconButton>

            {/* Timeline View Button */}
            {/* <IconButton
              sx={{
                margin: '0 4px',
                borderRadius: '50%',
                boxShadow: view === 'timeline' ? theme.shadows[1] : 'none',
              }}
              size="small"
              onClick={() => handleViewChange('timeline')}
            >
              {isMobile ? (
                arrowDirection.timeline === 'right' ? (
                  <KeyboardArrowRightIcon fontSize="small" />
                ) : (
                  <KeyboardArrowLeftIcon fontSize="small" />
                )
              ) : (
                arrowDirection.timeline === 'right' ? (
                  <KeyboardArrowRightIcon fontSize="small" />
                ) : (
                  <KeyboardArrowLeftIcon fontSize="small" />
                )
              )}
            </IconButton> */}

            <IconButton sx={{ margin: '0 4px' }} size="small" onClick={() => setOpen(false)}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* Timeline View */}
        {view === 'timeline' && (
          <Box
            sx={{
              paddingTop: isMobile ? '60px' : '86px',
              width: '100%',
              paddingBottom: '16px',
            }}
          >
            <Stack
              spacing={2}
              direction="row"
              sx={{
                overflowX: 'auto',
                overflowY: 'hidden',
                width: '100%',
                paddingBottom: '16px',
              }}
            >
              <Box />
              {displayedProjects.map((project, index) => (
                <Box key={index} sx={{ padding: '10px' }}>
                  <InfoCard
                    tag={project.tag}
                    title={project.title}
                    description={project.description}
                    expandedDescription={project.expandedDescription}
                    image={project.image}
                  />
                </Box>
              ))}
              <Box />
            </Stack>
          </Box>
        )}

        {/* Grid View */}
        {view === 'grid' && (
          <Grid
            container
            sx={{
              paddingTop: isMobile ? '60px' : '86px',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Box />
            {displayedProjects.map((project, index) => (
              <Box key={index} sx={{ padding: '10px' }}>
                <InfoCard
                  tag={project.tag}
                  title={project.title}
                  description={project.description}
                  expandedDescription={project.expandedDescription}
                  image={project.image}
                />
              </Box>
            ))}
            <Box />
          </Grid>
        )}

        {/* Corousel View */}
        {view === 'corousel' && <Corousel />}
      </Dialog>
    </>
  );
};

export default Projects;
