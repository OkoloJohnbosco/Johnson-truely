import React from "react";
import { Box, Text, Button, Heading, Image } from "@chakra-ui/react";
import circle from "../../public/img/home/ball.svg";
import { Container } from "../../components";

function VcBox() {
  return (
    <Box>
      <Box
        bg="#04172A"
        mb="30px"
        py="30px"
        px="20px"
        position="relative"
        w="full"
        color="#fff"
      >
        <Box w={{ base: "90%", md: "80%" }} mx="auto">
          <Heading as="h3" fontSize="26px" letterSpacing={1}>
            VC Playground
          </Heading>
          <Box opacity="90%" maxW="800px" mt="15px">
            <Text>
              As an autodidact polymath, I love learning new things that impacts
              my life and the world. Make sure to explore my publication where I
              journal my journey into venture capital and more concepts that I’m
              currently working on.
            </Text>
          </Box>
        </Box>
        <Box
          position="absolute"
          display={{ base: "none", lg: "block" }}
          right="60px"
          top="4px"
        >
          <Image height="170px" src={circle} alt="ball" />
        </Box>
      </Box>

      <Container>
        <Box maxW="500px" mx="auto" textAlign="center" pt="30px" mb="80px">
          <Heading fontFamily="Roboto">
            I’m convinced you have a project for me,{" "}
            <span style={{ color: "#FBB405" }}> let’s work together.</span>
          </Heading>

          <Box mt="30px">
            <Button bg="#FBB405" color="#333" px={7}>
              Talk to me
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default VcBox;
