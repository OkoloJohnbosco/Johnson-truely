import React from "react";
import { Box, Container, Grid, HStack, Stack } from "@chakra-ui/react";
import Link from "next/link";
import { SocialBtn } from "../../components";
import { BsLinkedin, BsTwitter, BsDribbble, BsYoutube } from "react-icons/bs";

const mediaLinks = [
  { icon: BsLinkedin },
  { icon: BsDribbble },
  { icon: BsTwitter },
  { icon: BsYoutube },
];
const projects = [
  { title: "AirBnB", path: "projects/airbnb" },
  { title: "UpFood", path: "projects/upfood" },
  { title: "Sinmi", path: "projects/sinmi" },
  { title: "Sharechaw", path: "projects/sharechaw" },
  { title: "Meet me", path: "meet-me" },
  { title: "Press kit", path: "press-kit" },
];

function Footer() {
  return (
    <Box
      bg="#0B0D17"
      pt="20px"
      textAlign="center"
      pb="30px"
      color="#fff"
      w="full"
    >
      <Container maxW="1000px">
        <Grid
          mx="auto"
          maxW="550px"
          templateColumns={{
            base: "1fr 1fr 1fr",
            md: "1fr 1fr 1fr 1fr 1fr 1fr",
          }}
          rowGap={{ base: "20px", md: "0" }}
          justify={{ base: "flex-start", md: "center" }}
          w="full"
        >
          {projects.map(({ title, path }) => (
            <Link href={`/${path}`} key={title}>
              <a opacity="20%">{title}</a>
            </Link>
          ))}
        </Grid>
        <Box
          mt="15px"
          pt="15px"
          borderTop="1px solid rgba(255, 255 , 255, 0.2)"
        >
          <Stack
            justify="space-between"
            direction={{ base: "column", md: "row" }}
          >
            <p>© 2021 @MadebyAdebisi. All rights reserved</p>
            <HStack
              pt={{ base: "20px", md: 0 }}
              spacing={{ base: 14, md: 4 }}
              alignSelf="center"
            >
              {mediaLinks.map((link) => (
                <SocialBtn Icon={link.icon} key={link.icon} />
              ))}
            </HStack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
