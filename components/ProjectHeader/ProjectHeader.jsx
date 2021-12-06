import React from "react";
import { Text, Stack, Box, Image, Heading } from "@chakra-ui/react";
import Container from "../Container/Container";

function ProjectHeader({ image, bg = "#D5FAFC", heading, p1, p2 }) {
  return (
    <Box bg={bg} py={10}>
      <Container maxW="850px">
        <Stack
          direction={{ md: "row", base: "column" }}
          justifyContent={{ md: "space-between", base: "center" }}
          alignItems="center"
        >
          <Stack spacing={5} maxW="450px" order={{ base: 2, md: 1 }}>
            <Heading
              as="h4"
              fontSize="24px"
              fontWeight="1000"
              letterSpacing={1}
              fontFamily="Manrope"
            >
              {heading}
            </Heading>
            <Stack spacing={6}>
              <Text fontFamily="Manrope">{p1}</Text>
              {p2 && <Text fontFamily="Manrope">{p2}</Text>}
            </Stack>
          </Stack>

          <Box
            pb={{ base: "30px", md: 0 }}
            display="inline-block"
            maxW="100%"
            justify="center"
            textAlign={{ base: "center", md: "" }}
            order={{ base: 1, md: 2 }}
          >
            <Image
              src={image}
              alt="home"
              maxW="350px"
              height="100%"
              width="100%"
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default ProjectHeader;
