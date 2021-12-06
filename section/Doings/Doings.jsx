import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";

function Doings({ header, text }) {
  return (
    <Box>
      <Box>
        <Heading as="h6" fontSize="16px" fontFamily="DM Sans">
          {header}
        </Heading>
      </Box>
      <Box mt="15px">
        <Text>{text}</Text>
      </Box>
    </Box>
  );
}

export default Doings;
