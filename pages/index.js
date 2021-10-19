import {
  HStack,
  Box,
  Heading,
  Flex,
  Image,
  VStack,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { Navbar } from "../section";
import { Container } from "../components";
import akii from "../public/img/home/akii.svg";
import { ArrowDownIcon } from "@chakra-ui/icons";

export default function Home() {
  return (
    <Box>
      <Navbar />
      <Container mt="90px" p="30px">
        <HStack
          alignItems="center"
          spacing={10}
          justifyContent="space-between"
          wrap="wrap"
        >
          <Box minW="350px" minH="400px" bg="gray.200">
            <Image src={akii} alt="home" height="300px" />
          </Box>
          <VStack spacing={3} alignItems="flex-start" maxW="500px" mx="auto">
            <Heading as="h6" fontSize="24px" color="#FBB405">
              Hey! friend
            </Heading>
            <Heading as="h2">
              Have you ever had a billion-dollar idea for an amazing digital
              product?
            </Heading>
            <Text>
              You may have imagined it, dreamt of how you raised millions of
              dollars in seed capital and living your perfect life in Bali, with
              your product having an outstanding ROI and overwhelming reviews
              from happy users - Yet, you don’t know how to go about it.
            </Text>
            <Text>Or</Text>
            <Text>
              You’ve already commenced operations and have users, but you need
              help crafting delightful experiences that bring strategic value,
              make your business thrive and ignite your customers love for your
              brand.
            </Text>
          </VStack>
        </HStack>

        <Box textAlign="center" mt="30px">
          <Text fontWeight="bold">This is where i come in</Text>
          <Box pt="30px">
            <IconButton
              variant="outline"
              colorScheme="teal"
              aria-label="Call Sage"
              size="sm"
              rounded={300}
            >
              <ArrowDownIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
