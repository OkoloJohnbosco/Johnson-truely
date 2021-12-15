import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

function Introduction({ boxRef }) {
  return (
    <Box maxW="700px" ref={boxRef} pt="20px">
      <Text color="#FBB405" fontWeight="700" fontFamily="DM Sans">
        I’m Johnson, a UX & Product Designer
      </Text>
      <Box mb="30px" mt="20px">
        <Heading
          as="h3"
          fontWeight="700"
          letterSpacing={1}
          fontFamily="Roboto"
          fontSize="32px"
        >
          "I help you be the brand that customers love, by transforming business
          goals into great digital products that make your business thrive".
        </Heading>
      </Box>
      <Text color="#FBB405">How I do it</Text>
    </Box>
  );
}

export default Introduction;
