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
          {expanded &&
            <Dialog
            actionTitle={'OK'}
            icon={<AspectRatioIcon fontSize='small' color='default'/>}
            dialogTitle={
              <Typography variant='body2'>
                {title}
              </Typography>
            }
            dialogContent={
            <Stack>
              <ImageList rowHeight={300}>
                  <ImageListItem key={'image'}>
                    <img
                      src={image}
                      alt={'image_hero'}
                      loading="lazy"
                    />
                  </ImageListItem>
                  <ImageListItem key={'image'}>
                    <img
                      src={image}
                      alt={'image_hero'}
                      loading="lazy"
                    />
                  </ImageListItem>
              </ImageList>
                <Typography variant='body2'>
                  {expandedDescription}
                </Typography>
            </Stack>
            }
          />
          }
          {!expandAll &&
            <Button
              size="small"
              sx={{ fontSize: 12 }}
              onClick={()=>setExpanded(!expanded)}
            >
              {expanded ? 'Back' : 'Read more'}
            </Button>
          }
        </Stack>
      </CardActions>
    </Card>
  );
};

export default InfoCard;
