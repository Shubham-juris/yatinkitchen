import React, { useState } from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { keyframes } from "@emotion/react";
import CssBaseline from '@mui/material/CssBaseline';
// import backgroundImage from "../../../assets/bg.jpg"; 

const fadeIn = keyframes`
  0% { opacity: 0; transform: scale(0.9); }
  100% { opacity: 1; transform: scale(1); }
`;

const Sitemaintenance = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [isHovered, setIsHovered] = useState(false);

  return (
      <Box
      sx={{
          position: "relative",
          width: "100%",
          // height: "10vh",
          backgroundColor:'#fff',
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 16px",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
        
      <Box
        sx={{
            width: "100vw", height: "100vh", backgroundColor: "rgba(163, 32, 32, 0)", position: "fixed", top: 0, left: 0, zIndex: 9999, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", animation: `${fadeIn} 1.5s ease-in-out`,
        }}
        >
            <CssBaseline/>
        <img
          src="https://www.svgrepo.com/show/426192/cogs-settings.svg"
          alt="Maintenance Logo"
          style={{ height: "160px", marginBottom: "22px", animation: "pulse 2s infinite" }}
        />
        <Typography
          variant="h2"
          fontWeight="bold"
          color={isHovered ? "black" : "black"}
          sx={{
            fontSize: { xs: "20px", sm: "24px", md: "40px", lg: "60px" },
            mt: 2,
            transition: "color 0.3s ease-in-out",
          }}
        >
          Site Under Maintenance...
        </Typography>

        <Typography
          variant="h4"
          fontWeight="bold"
          color={isHovered ? "black" : "black"}
          sx={{
            fontSize: { xs: "14px", sm: "16px", md: "25px", lg: "30px" },
            mt: 2,
            transition: "color 0.3s ease-in-out",
          }}
        >
          We're working hard to improve the user experience. Stay tuned!
        </Typography>
      </Box>
    </Box>
  );
};

export default Sitemaintenance;
