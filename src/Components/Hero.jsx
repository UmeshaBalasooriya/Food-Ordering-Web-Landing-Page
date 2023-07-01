import { Box, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Navbar from "./Navbar";
import heroImg from "../media/hero_Img.png";
import CustomButton from "./CustomButton";

const Hero = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "80px",
    color: "#F2AB01",
    fontFamily: "playfair display",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));

  return (
    <Box sx={{ backgroundColor: "#FFFF", Height: "100vh" }}>
      <Container>
        <Navbar />
        <CustomBox>
          <Box sx={{ flex: "1" }}>
            <Title variant="h1">
              People who love to eat are always the best people.
            </Title>
            <Typography
              variant="body2"
              sx={{ fontSize: "18px", color: "#1E1E1E", my: 4 }}
            >
              Lorem ipsum dolor sit amet consectetur. Eget massa diam
              mattis pretium. At euismod consectetur varius pulvinar
              nisl massa turpis pretium. Tristique pulvinar est venenatis
              fusce faucibus tincidunt. Libero netus tellus felis
              scelerisque porttitor.
            </Typography>
            <CustomButton
              backgroundColor="#171717"
              color="#fff"
              buttonText="Order Now"
              heroBtn={true}
            />
          </Box>

          <Box sx={{ flex: "1.25" }}>
            <img
              src={heroImg}
              alt="heroImg"
              style={{ maxWidth: "100%", marginBottom: "2rem" }}
            />
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
};
export default Hero;
