import React, { useState } from 'react';
import {
  Grid,
  IconButton,
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { ProjectsObj } from '../data/Project';
import InfoCard from './InfoCard';

const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % ProjectsObj.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? ProjectsObj.length - 1 : prevIndex - 1
    );
  };

  return (
    <Grid container spacing={isMobile ? 0 : 10}
      sx={{
        paddingTop: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}>
        {!isMobile &&
          <Grid item>
            <IconButton onClick={handlePrev} size='small'>
              <ArrowBack fontSize="small" />
            </IconButton>
          </Grid>
        }
      <Grid item>
        <InfoCard
          title={ProjectsObj[currentIndex].title}
          description={ProjectsObj[currentIndex].description}
          expandedDescription={ProjectsObj[currentIndex].expandedDescription}
          image={ProjectsObj[currentIndex].image}
          tag={ProjectsObj[currentIndex].tag}
        />
      </Grid>
      {!isMobile &&
        <Grid item>
          <IconButton onClick={handleNext}>
            <ArrowForward fontSize="small" />
          </IconButton>
        </Grid>
      }
      {isMobile && (
        <Box
          sx={{
            marginTop: '40px',
            display: 'flex',
          }}
        >
            <IconButton onClick={handlePrev}>
              <ArrowBack fontSize="large" />
            </IconButton>
            <Box sx={{width:'40px'}}/>
            <IconButton onClick={handleNext}>
              <ArrowForward fontSize="large" />
            </IconButton>
        </Box>
      )}
    </Grid>
  );
};

export default ProjectCarousel;
