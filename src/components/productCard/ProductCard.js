import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import product1 from "../../assets/product1.jpg";
import './productCard.css'

export default function ProductCard() {

  return (
    <Card className='productCardDesign' style={{backgroundColor:"#0f2027", border:".5px solid #fd841f "}} sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
         <div>
          <p style={{color:"#fd841f", backgroundColor:"white", padding:"5px 20px", borderRadius:'15px', fontSize:'10px'}}>-{10}%</p>
         </div>
        } 
        action={
          <IconButton style={{color:"white"}} aria-label="settings">
            <FavoriteBorderOutlinedIcon />
          </IconButton>
        }
        
      />
      <CardMedia
        component="img"
        height="194"
        image={product1}
        alt="PS4 CD"
      />
      <CardContent>
      <Typography variant="h6" color="#fd841f">
          PS4 CD for rent
        </Typography>
        <Typography variant="body2" color="#ffddb7">
          asad adadlorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi earum quae, aliquid tenetur optio reiciendis maxime accusantium
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <p style={{color:"#fd841f", fontSize:'13px'}}>from <span style={{color:'red',textDecoration: 'line-through'}}>{70}&#2547;</span> {50}&#2547;/week</p>
      </CardActions>
    </Card>
  );
}