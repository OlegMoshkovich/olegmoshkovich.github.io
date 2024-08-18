import React, {useState} from 'react';
import useStore from '../Store';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Chip,
} from '@mui/material';

const InfoCard = ({ title, description, expandedDescription, image, tag }) => {
  const [expanded, setExpanded] = useState(false)
  const {expandAll} = useStore()
  const expandCards = expanded || expandAll

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
      <CardContent sx={{ flexGrow: 1 }}>
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
        {!expandAll &&
          <Button
            size="small"
            sx={{ fontSize: 12 }}
            onClick={()=>setExpanded(!expanded)}
          >
            {expanded ? 'Back' : 'Read more'}
          </Button>
        }
      </CardActions>
    </Card>
  );
};

export default InfoCard;
