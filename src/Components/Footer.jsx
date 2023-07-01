import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

import fbIcon from "../media/fbicon.png";
import twitterIcon from "../media/twittericon.png";
import linkedinIcon from "../media/instericon.png";

const Footer = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    backgroundColor: "#171717",
    padding: "2.5rem",
    marginBottom: "-80px",
    marginTop: "40px",
    justifyContent: "space-around",
    gap: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const IconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  }));

  const FooterLink = styled("span")(({ theme }) => ({
    fontSize: "16px",
    color: "#7A7A7E",
    fontWeight: "300",
    cursor: "pointer",
    "&:hover": {
      color: "#000",
    },
  }));

  return (
    <Box sx={{ py: 10 }}>
      <CustomContainer>
        <Box>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#F2AB01",
              fontWeight: "700",
              mb: 2,
            }}
          >
            Foodgram
          </Typography>

          <Typography
            sx={{
              fontSize: "16px",
              color: "#7A7A7E",
              fontWeight: "500",
              mb: 2,
            }}
          >
            You’ll find your next food, in any style you prefer.
          </Typography>

          <IconBox>
            <img 
            src={fbIcon} 
            alt="fbIcon" 
            style={{ padding: "0.5rem", cursor: "pointer" }} />
            <img
              src={twitterIcon}
              alt="twitterIcon"
              style={{ padding: "0.5rem", cursor: "pointer" }}
            />
            <img
              src={linkedinIcon}
              alt="instericon"
              style={{ padding: "0.5rem", cursor: "pointer" }}
            />
          </IconBox>
        </Box>

        <Box>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#F2AB01",
              fontWeight: "700",
              mb: 2,
            }}
          >
            Quick links
          </Typography>

          <FooterLink>Home</FooterLink>
          <br />
          <FooterLink>Package</FooterLink>
          <br />
          <FooterLink>Review</FooterLink>
          <br />
          <FooterLink>About Us</FooterLink>
          <br />
          <FooterLink>Contact Us</FooterLink>
        </Box>


        <Box>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#F2AB01",
              fontWeight: "700",
              mb: 2,
            }}
          >
            Contact Us
          </Typography>

          <FooterLink>michelle.rivera@example.com</FooterLink>
          <br />
          <FooterLink>(209) 555-0104</FooterLink>
          <br />
          <FooterLink>2715 Ash Dr. San Jose,
            South Dakota 83475</FooterLink>
        </Box>
      </CustomContainer>
    </Box>
  );
      };

export default Footer;
