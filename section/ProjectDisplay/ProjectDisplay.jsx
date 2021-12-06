import React from "react";
import { Box, Text, Link, HStack, Heading } from "@chakra-ui/react";
import Image from "next/image";
import { ArrowForwardIcon } from "@chakra-ui/icons";
// import boss from "../../public/img/Airbnb/iPhone X.png";

function ProjectDisplay({ bg, text, title, color, image }) {
  console.log(image);
  return (
    <Box
      position="relative"
      rounded={8}
      bg={bg}
      // background={`url(${image})`}
      color={color}
      w="full"
      minH="250px"
      pt="40px"
      pb="30px"
      px="30px"
      overflow="hidden"
    >
      <HStack position="relative">
        <Box>
          <Heading
            fontSize="22px"
            fontWeight="900"
            as="h4"
            fontFamily="Manrope"
          >
            {title}
          </Heading>

          <Box maxW="400px" pt="20px" pb="30px">
            <Text>{text}</Text>
          </Box>

          <Link color={color}>
            View more <ArrowForwardIcon ml={1} />
          </Link>
        </Box>

        <Box>
          <Image src={image} layout="fill" />
        </Box>
      </HStack>
    </Box>
  );
}

export default ProjectDisplay;
