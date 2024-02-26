import React from "react";
import { Box, IconButton, Typography, useMediaQuery } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavigateBefore from "@mui/icons-material/NavigateBefore";
import NavigateNext from "@mui/icons-material/NavigateNext";
import { shades } from "../../theme";
//import all images
const importAll = (r) =>
  r.keys().reduce((acc, item) => {
    acc[item.replace("./", "")] = r(item);
    return acc;
  }, {});

  export const heroTextureImports = importAll(
    require.context("../../assets",false,/\.(png|jpe?g|svg)$/)
    
  )

const MainCarousel = () => {
  return <div>MainCarousel</div>;
};

export default MainCarousel;
