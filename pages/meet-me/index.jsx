import React from "react";
import {
  Box,
  Grid,
  VStack,
  Text,
  Heading,
  HStack,
  Stack,
  Image,
} from "@chakra-ui/react";
import { Layout } from "../../containers";
import { Container } from "../../components";
import headshot from "../../public/img/Press kit page/Headshot.png";
import learnvc from "../../public/img/Meet me page/learnvc.png";
import taeilio from "../../public/img/Meet me page/Taeilio.png";

function index() {
  return (
    <Layout>
      <Container py="60px" px="10px" className="meetMe">
        <Box>
          <Heading fontSize="16px" as="h5">
            Design,venture capital 👨🏻‍💻, tea 🍺 & minimalism
          </Heading>
        </Box>

        {/* Pictures */}
        <VStack spacing={[4, 10]} mt="30px">
          {/* First Pict */}
          <Box maxH="550px" w="100%" overflow="hidden">
            <Image src={headshot} alt="headshot" w="100%" maxW="100%" />
          </Box>

          {/* Second Image*/}
          <Stack spacing={4} pb="50px" direction={["column", "row"]}>
            <Box maxH="550px" maxH="300px" w="full" overflow="hidden">
              <Image src={learnvc} alt="headshot" w="100%" maxW="100%" />
            </Box>
            <Box maxH="550px" w="full" maxH="300px" overflow="hidden">
              <Image src={taeilio} alt="headshot" w="100%" maxW="100%" />
            </Box>
          </Stack>
        </VStack>
        <Box>
          <VStack pb="100px" spacing={8} alignItems="flex-start">
            <Text>
              Adebisi “ Otunba” Johnson Chinedu is a UX Product Designer and
              aspiring VC analyst
            </Text>

            <Text>!!!</Text>

            <Text>
              He is a passionate professional with multi-faceted skills and
              experience spanning across UX design, business analysis and
              Venture capital.
            </Text>

            <Text>
              When he isn’t designing,you can find him{" "}
              <Text as="span" color="blue">
                exploring the venture capital landscape in emerging markets
              </Text>{" "}
              and performing due diligence on companies and products that are
              solving africa’s biggest challenges.
            </Text>
          </VStack>

          <Grid
            w="full"
            gridGap={10}
            templateColumns={{ base: "1fr", md: "1fr 1fr" }}
            mb="30px"
          >
            <Box>
              <VStack spacing={4} alignItems="flex-start">
                <Heading
                  textTransform="uppercase"
                  pb="6px"
                  as="h4"
                  fontSize="18px"
                >
                  Main skills
                </Heading>
                <VStack alignItems="flex-start">
                  <Text fontWeight="bold">Product Design</Text>
                  <Text> I build habit-forming digital products,....</Text>
                </VStack>

                <VStack alignItems="flex-start">
                  <Text fontWeight="bold">Design sprint facillitation</Text>
                  <Text>I lead product sprints that solves problems</Text>
                </VStack>

                <VStack alignItems="flex-start">
                  <Text fontWeight="bold"> Business Analytics</Text>
                  <Text> I help businesses thrive through data</Text>
                </VStack>
              </VStack>
            </Box>

            <Box>
              <VStack spacing={4} alignItems="flex-start">
                <Heading
                  textTransform="uppercase"
                  pb="6px"
                  as="h4"
                  fontSize="18px"
                >
                  Values
                </Heading>
                <VStack alignItems="flex-start">
                  <Text fontWeight="bold">Good design is good business</Text>
                  <Text>its not only about beauty, it has to work</Text>
                </VStack>

                <VStack alignItems="flex-start">
                  <Text fontWeight="bold">Never not learning</Text>
                  <Text>There's always something new to learn</Text>
                </VStack>

                <VStack alignItems="flex-start">
                  <Text fontWeight="bold">Get to the root of te problem</Text>
                  <Text> To come up with best solution</Text>
                </VStack>

                <VStack alignItems="flex-start">
                  <Text fontWeight="bold"> Keep it simple</Text>
                  <Text>Why make it complicated?</Text>
                </VStack>
              </VStack>
            </Box>
          </Grid>
          <Box mb="50px">
            <Text>
              But here’s a bit more information about how I work and what I’ve
              done.
            </Text>
          </Box>
          <VStack spacing={5} alignitems="flex-start">
            <Heading as="h5" fontSize="16px" alignSelf="flex-start">
              MY DESIGN PROCESS
            </Heading>
            <Text>
              I could talk about the numerous prototyping tools I’ve used, or
              different workshop exercises I’ve done, but ultimately, the
              specific steps I take on any project always depend on the project
              goals, resources, and the team I’m working with. But on a higher
              level, I approach my work in a pragmatic and straight-forward way,
              with consideration for the context of how a product is used and
              made.
            </Text>
            <Text>
              I focus on defining the problem being addressed from multiple
              perspectives, understanding user needs and internal needs through
              quantitative and qualitative research, and establishing a
              framework for creating and evaluating solutions in the short and
              long-term. My process also involves lots of collaboration and
              synthesizing information, and helping to establish business goals
              that are in line with user goals.
            </Text>
          </VStack>
        </Box>
      </Container>
    </Layout>
  );
}

export default index;
