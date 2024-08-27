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

const InfoCard = ({ title, description, expandedDescription, image, link='https://bldrs.ai/', tag }) => {
  const [expanded, setExpanded] = useState(false)
  const {expandAll} = useStore()
  const expandCards = expanded || expandAll
  const theme = useTheme()
  const linkStyle = link.length>0 && {textDecoration: 'underline', cursor:'pointer'}

  return (
    <Card
        sx={{
          width: 360,
          minWidth: 360,
          height: 580,
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
      <CardContent sx={{ flexGrow: 1, overflowX:'hidden' }}>
        <Typography
          sx={{ fontWeight: 'bold', ...linkStyle }}
          gutterBottom
          variant="body2"
          component="div"
          textAlign="center"
          onClick={()=>window.open(link)}
        >
          {title}
        </Typography>
        <Typography variant="body2" textAlign="left">
        {expandCards ? expandedDescription : description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between', p: 1 }}>
        <Chip size='small' label={tag} variant="outlined" sx={{border: 'none'}}/>
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
                  <ImageListItem key={'image'} sx={{width:'90%'}}>
                    <img
                      src={image}
                      alt={'image_hero'}
                      loading="lazy"
                    />
                  </ImageListItem>
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
