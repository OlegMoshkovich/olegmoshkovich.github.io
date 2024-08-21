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
  // Tooltip,
  useTheme,
  Grid,
  // Switch,
  useMediaQuery
} from '@mui/material';
import useStore from '../Store';
import CloseIcon from '@mui/icons-material/Close';
import { ProjectsObj } from '../data/Project';
import InfoCard from './InfoCard';
import GridViewIcon from '@mui/icons-material/GridView';
import FastForwardOutlinedIcon from '@mui/icons-material/FastForwardOutlined';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
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
  const isMobile = useMediaQuery('(max-width:600px)');

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
            {/* <Tooltip title="Only Descriptions">
              <Switch onChange={() => toggleExpandAll()} size="small" />
            </Tooltip>
              {
                !isMobile &&
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
              } */}
            <IconButton
              sx={{
                margin: '0 4px',
                borderRadius: '50%',
                boxShadow: view === 'grid' ? theme.shadows[1] : 'none', // Apply shadow when selected
              }}
              size="small"
              onClick={() => handleViewChange('grid')}
            >
              {isMobile ? <KeyboardArrowDownIcon fontSize="small" /> : <GridViewIcon fontSize="small" />}
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
              {isMobile ? <KeyboardArrowRightIcon fontSize="small" /> : <FastForwardOutlinedIcon fontSize="small" />}
            </IconButton>
            <IconButton sx={{margin: '0 4px'}} size="small" onClick={() => setOpen(false)}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </Toolbar>
        </AppBar>
        {view === 'timeline' && (
          <Box
          sx={{
            paddingTop: isMobile ? '60px' : '86px',
            width: '100%',
            paddingBottom: '16px',
          }}>
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
              <Box/>
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
            sx={{
              paddingTop: isMobile ? '60px' : '86px',
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
