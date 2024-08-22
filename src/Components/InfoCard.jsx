import React, {useState} from 'react';
import useStore from '../Store';
import {
  Button,
  Stack,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  useTheme,
  ImageList,
  ImageListItem,
  Chip,
} from '@mui/material';
import Dialog from './Dialog'
import AspectRatioIcon from '@mui/icons-material/AspectRatio';

const InfoCard = ({ title, description, expandedDescription, image, tag }) => {
  const [expanded, setExpanded] = useState(false)
  const {expandAll} = useStore()
  const expandCards = expanded || expandAll
  const theme = useTheme()

  return (
    <Card
        sx={{
          width: 360,
          minWidth: 360,
          height: 560,
          display: 'flex',
          flexDirection: 'column',
          flexShrink: 0,
        }}
    >
      {!expandCards &&
        <CardMedia
          component="img"
          image={image}
          sx={{ objectFit: 'contain'}}
          alt="project image"
        />
      }
      <CardContent sx={{ flexGrow: 1, overflow:'scroll' }}>
        <Typography
          sx={{ fontWeight: 'bold' }}
          gutterBottom
          variant="body2"
          component="div"
          textAlign="center"
        >
          {title}
        </Typography>
        <Typography variant="body2" textAlign="left">
        {expandCards ? expandedDescription : description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between', p: 1 }}>
        <Chip size='small' label={tag} variant="outlined"/>
        <Stack direction='row'>
            <Dialog
            buttonTitle='Read more'
            actionTitle={'OK'}
            icon={<AspectRatioIcon fontSize='small' color='default'/>}
            dialogTitle={
              <Typography variant='body2'>
                {title}
              </Typography>
            }
            dialogContent={
            <Stack direction='column' justifyContent={'center'} alignItems={'center'}>
              {/* <ImageList rowHeight={300} cols={2}> */}
                  <ImageListItem key={'image'} sx={{width:'90%'}}>
                    <img
                      src={image}
                      alt={'image_hero'}
                      loading="lazy"
                    />
                  </ImageListItem>
              {/* </ImageList> */}
                <Typography variant='body2'>
                  {expandedDescription}
                </Typography>
            </Stack>
            }
          />
        </Stack>
      </CardActions>
    </Card>
  );
};

export default InfoCard;
