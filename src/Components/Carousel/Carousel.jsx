import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Card, CardMedia, Typography } from "@mui/material";
import FoodCarousel1 from "../../assets/FoodCarousel1.webp";
import FoodCarousel2 from "../../assets/FoodCarousel2.webp";
import FoodCarousel3 from "../../assets/FoodCarousel3.webp";
import FoodCarousel4 from "../../assets/FoodCarousel4.webp";

const images = [FoodCarousel1, FoodCarousel2, FoodCarousel3, FoodCarousel4];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <Box
        sx={{
            opacity:'0.3',
          textAlign: "center",
          overflowX:'visible',
          my: 2,
        }}
      >
        <Typography
          sx={{
            fontWeight: "900",
            fontSize: "2rem",
          }}
        >
          Photo Gallery
        </Typography>
      </Box>

     
      <Box
        sx={{
          maxWidth: 800,
          mx: "auto",
          mt: 3,
        }}
      >
        <Slider {...settings}>
          {images.map((img, index) => (
            <Card key={index}>
              <CardMedia
                component="img"
                sx={{
                  opacity:'0.3',
                  maxHeight: 500, 
                  width: "100%", 
                  objectFit: "cover", 
                }}
                image={img}
                alt={`Slide ${index}`}
              />
            </Card>
          ))}
        </Slider>
      </Box>
    </>
  );
};

export default Carousel;
