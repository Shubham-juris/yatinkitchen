import React from 'react'
import { Box, Typography } from '@mui/material'
import Butterchicken from '../../assets/Butterchicken.webp'
import FoodItem1 from '../../assets/FoodItem1.webp'
import FoodItem2 from '../../assets/FoodItem2.webp'

const BestSeller = () => {
  return (
    <Box sx={{
        opacity:'0.3',
    }}>
        <Typography sx={{
            mt:3,
            fontSize:'2rem',
            fontWeight:'900',
            textAlign:'center',
        }}>
            Best Sellers
        </Typography>
        <Box sx={{
            mt:3,
            mx:'auto',
            maxWidth:'800px',
            height:'400px',
            backgroundImage: `url(${Butterchicken})`,
            backgroundSize:'cover'
        }}>
        </Box>
            <Typography sx={{
            mt:3,
            fontSize:'2rem',
            fontWeight:'300',
            textAlign:'center',}}>Butterchicken</Typography>
            <Typography sx={{
            mt:3,
            fontSize:'1rem',
            fontWeight:'100',
            textAlign:'center',}}>"Restaurant's warm  Butter chicken is TO DIE FOR! They definitely earned their spot on last year's 'Top Spots in Calgary, CANADA '!"</Typography>

        <Box sx={{
            display:'flex',
            flexDirection:{xs:'column', sm:'row'},
            // maxWidth:'1200px',
            justifyContent:'center',
            alignItems:'center'
        }}>
        <Box sx={{
            display:'flex',
            flexDirection:'column',
        }}>
        <Box sx={{
            mt:3,
            mx:'auto',
            width: {xs:'300px', md:'400px'},
            maxWidth: '400px',
            height:'400px',
            backgroundImage: `url(${FoodItem1})`,
            backgroundSize:'cover'
        }}>
        </Box>
            <Typography sx={{
            mt:3,
            px:2,
            fontSize:'1.5rem',
            fontWeight:'300',
            textAlign:'center',}}>Avenue Calgary</Typography>
            <Typography sx={{
            mt:3,
            px:2,
            fontSize:'1rem',
            fontWeight:'100',
            textAlign:'center',}}>"I couldn't believe the wait to be seated here, but after tasting their Naan bread, I get the wait!"</Typography>
            </Box>

        <Box sx={{
            display:'flex',
            flexDirection:'column'
        }}>
        <Box sx={{
            mt:3,
            mx:'auto',
            width:{xs:'300px', md:'400px'},
            maxWidth:'400px',
            height:'400px',
            backgroundImage: `url(${FoodItem2})`,
            backgroundSize:'cover',
        }}>
        </Box>
            <Typography sx={{
            mt:3,
            px:2,
            fontSize:'1.5rem',
            fontWeight:'300',
            textAlign:'center',}}>Calgary Herald</Typography>
            <Typography sx={{
            mt:3,
            px:2,
            fontSize:'1rem',
            fontWeight:'100',
            textAlign:'center',}}>"The chef knows their way around Tandoori chicken; one of the best food spots in Calgary, CANADA."</Typography>
            </Box>
            </Box>

     </Box>
  )
}

export default BestSeller