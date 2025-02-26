import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import HeroImage from '../../assets/HeroImage.jpeg'
const Herosection = () => {
  return (
    <Box sx={{
        opacity:'0.5',
        mt:0,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'100vw',
        height:'500px',
        backgroundImage:`url(${HeroImage})`,
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat'
    }}>
        <Box sx={{
            display:'flex',
            height:{xs:'300px', sm:'500px'},
            width:{xs:'300px', sm:'500px'},
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column',
            backgroundColor:'#FF8819',
            opacity:'0.7',
            borderRadius:"50%",
        }}>
            <Typography variant='h4' sx={{
                fontSize:{xs:'20px', sm:'35px'}
            }}>
                Welcome to Yatin's Kitchen
            </Typography>
            <Typography variant='h6' sx={{
                my:2,
                fontSize:{xs:'14px', sm:'20px'}
            }}>
            Join us for great home-style cooking!
            </Typography>
            <Button sx={{
                mt:3,
                padding:'10px',
                backgroundColor:'#000000',
                borderRadius:'15px'
            }}>Call to order</Button>
        </Box>
    </Box>

  )
}

export default Herosection