import React from 'react' 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export const Shoecard = ({shoe}) =>  {

    return (
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="100%"
              width="100%"
              margin="auto" 
              
             

              image={'/images/'+shoe.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" fontWeight="bold">
               {shoe.name}
              </Typography>
              <Typography  fontWeight="bold">
                {shoe.category}
              </Typography>
              <Typography fontWeight="bold" fontSize="15px">
                  {shoe.colour}
              </Typography>
              <Typography fontWeight="bold" fontSize="15px">
                  {shoe.material}
              </Typography>
              <Typography fontWeight="bold"   sx={{
        width: 300,
        height: 300,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}>
                  {shoe.length}
              </Typography>
              <Typography fontWeight="bold">
                  {shoe.size}
              </Typography>
              <Typography fontWeight="bold">
                  {shoe.brand}
              </Typography>
              <Typography fontWeight="bold">
                  {shoe.shoetype}
              </Typography>
              <Typography fontWeight="bold">
                  {shoe.price}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      );

}



