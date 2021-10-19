import React from "react";
import {
  useColorMode,
  useColorModeValue,
  Divider,
  VStack,
  Heading,
  Text,
  Button,
  HStack,
} from "@chakra-ui/react";
import All from "./All";

function Cart() {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");
  const textColor = useColorModeValue("gray.600", "gray.400");

  return (
    <VStack
      bg={bgColor}
      w="full"
      h="full"
      p={10}
      spacing={10}
      alignItems="flex-start"
    >
      <VStack alignItems="flex-start" spacing={3}>
        <Heading size="2xl">Your Cart</Heading>
        <Text>
          If the price is too hard on your eyes {"  "}
          <Button variant="link" colorScheme="black" onClick={toggleColorMode}>
            try changing the theme
          </Button>
        </Text>
      </VStack>

      <VStack spacing={4} alignItems="strech" w="full">
        <HStack justifyContent="space-between">
          <Text color={textColor}>SubTotal</Text>
          <Heading size="sm">$119.00</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={textColor}>SubTotal</Text>
          <Heading size="sm">$119.00</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={textColor}>SubTotal</Text>
          <Heading size="sm">$119.00</Heading>
        </HStack>
      </VStack>
      <Divider />

      <HStack justifyContent="space-between" w="full">
        <Text color={textColor}>SubTotal</Text>
        <Heading size="sm">$119.00</Heading>
      </HStack>

      <HStack w="full">
        <All />
      </HStack>
    </VStack>
  );
}

export default Cart;
