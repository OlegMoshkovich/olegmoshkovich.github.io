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
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { ProjectsObj } from '../data/Project';
import InfoCard from './InfoCard';
import Switch from '@mui/material/Switch';
import useStore from '../Store';
import GridViewIcon from '@mui/icons-material/GridView';
import FastForwardOutlinedIcon from '@mui/icons-material/FastForwardOutlined';
import CropPortraitIcon from '@mui/icons-material/CropPortrait';
import Corousel from './Corousel';

const Transition = React.forwardRef((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
));

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState('grid'); // New state to manage views

  const theme = useTheme();
  const { toggleExpandAll } = useStore();

  const handleViewChange = (newView) => {
    setView(newView);
  };

  return (
    <>
      <Button
        variant="text"
        size="small"
        sx={{ borderRadius: '14px', padding: '5px 10px' }}
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
            <Switch onChange={() => toggleExpandAll()} size="small" />
            <IconButton
              sx={{
                margin: '0 4px',
                borderRadius: '50%',
                boxShadow: view === 'corousel' ? theme.shadows[1] : 'none', // Apply shadow when selected
              }}
              size="small"
              onClick={() => handleViewChange('corousel')}
            >
              <CropPortraitIcon fontSize="small" />
            </IconButton>
            <IconButton
              sx={{
                margin: '0 4px',
                borderRadius: '50%',
                boxShadow: view === 'grid' ? theme.shadows[1] : 'none', // Apply shadow when selected
              }}
              size="small"
              onClick={() => handleViewChange('grid')}
            >
              <GridViewIcon fontSize="small" />
            </IconButton>
            <IconButton
              sx={{
                margin: '0 4px',
                borderRadius: '50%',
                boxShadow: view === 'timeline' ? theme.shadows[1] : 'none', // Apply shadow when selected
              }}
              size="small"
              onClick={() => handleViewChange('timeline')}
            >
              <FastForwardOutlinedIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{margin: '0 4px'}} size="small" onClick={() => setOpen(false)}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </Toolbar>
        </AppBar>
        {view === 'timeline' && (
          <Box
          sx={{
            paddingTop: '86px',
            width: '100%',
            paddingBottom: '16px',
          }}>
            <Typography
              variant='caption'
              sx={{
                marginLeft: '30px',
              }}
            >Timeline into the past
            </Typography>
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
              {ProjectsObj.map((project, index) => {
                console.log('Project:', project); // Print the project object to the console
                return (
                  <Box key={index} sx={{ padding: '10px' }}>
                    <InfoCard
                      tag={project.tag}
                      title={project.title}
                      description={project.description}
                      expandedDescription={project.expandedDescription}
                      image={project.image}
                    />
                  </Box>
                );
              })}
              <Box />
            </Stack>
          </Box>
        )}
        {view === 'grid' && (
          <Grid
            container
            spacing={2}
            sx={{
              paddingTop: '100px',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Box />
            {ProjectsObj.map((project, index) => (
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
        {view === 'corousel' && <Corousel />}
      </Dialog>
    </>
  );
};

export default Projects;