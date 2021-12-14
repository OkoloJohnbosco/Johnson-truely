import {
  Spacer,
  Box,
  Heading,
  Image,
  VStack,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Introduction, VcBox } from "../section";
import { Container } from "../components";
import { ProjectDisplayList, DoingsList, Layout } from "../containers";
import akii from "../public/img/Homepage/Pawpaw.png";
import { ArrowDownIcon } from "@chakra-ui/icons";
import useScrollTo from "../hooks/useScrollTo";

export default function Home() {
  const { boxRef, scrollToElem } = useScrollTo();
  return (
    <Layout>
      <Box>
        <Container mt="80px" p="10px">
          <Stack justify="center" direction={{ md: "row", base: "column" }}>
            <Box
              pb={{ base: "30px", md: 0 }}
              display="inline-block"
              maxW="100%"
            >
              <Image
                src={akii}
                alt="home"
                minW="270px"
                height="100%"
                width="100%"
              />
            </Box>
            <Spacer minW="20px" />
            <VStack
              spacing={3}
              style={{ marginLeft: 0 }}
              alignItems="flex-start"
              justifyContent="center"
              maxW="500px"
              mx="auto"
            >
              <Heading as="h6" fontSize="24px" color="#FBB405">
                Hey! friend
              </Heading>
              <Heading
                as="h2"
                fontFamily="Manrope"
                fontSize="32px"
                fontWeight="700"
                letterSpacing={1}
                pb={2}
              >
                Have you ever had a billion-dollar idea for an amazing digital
                product?
              </Heading>
              <Text>
                You may have imagined it, dreamt of how you raised millions of
                dollars in seed capital and living your perfect life in Bali,
                with your product having an outstanding ROI and overwhelming
                reviews from happy users - Yet, you don’t know how to go about
                it.
              </Text>
              <Text>Or</Text>
              <Text>
                You’ve already commenced operations and have users, but you need
                help crafting delightful experiences that bring strategic value,
                make your business thrive and ignite your customers love for
                your brand.
              </Text>
            </VStack>
          </Stack>

          <Box textAlign="center" mt="30px">
            <Text fontWeight="bold" fontFamily="Manrope">
              This is where I come in
            </Text>
            <Box pt="30px">
              <IconButton
                onClick={scrollToElem}
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

          {/* Introduction of Johnson */}
          <Box mt="80px">
            <Introduction boxRef={boxRef} />
          </Box>

          {/* List of Doings */}
          <Box mt="30px" mb="90px">
            <DoingsList />
          </Box>

          <VStack
            spacing={5}
            w="100%"
            justifyItems="flex-start"
            alignItems="flex-start"
          >
            <Box>
              <Heading
                as="h2"
                fontSize="28px"
                letterSpacing={1}
                color="#04172A"
                textTransform="uppercase"
                fontFamily="Manrope"
                fontWeight="700"
              >
                selected works
              </Heading>
            </Box>
            <Box maxW="500px">
              <Text>
                Probably the section that you are interested in. Have fun
                exploring some of my recent projects and maybe come back
                afterwards?
              </Text>
            </Box>
          </VStack>

          <Box my="50px">
            <ProjectDisplayList />
          </Box>
        </Container>

        {/* Vc Playground */}
        <VcBox />
      </Box>
    </Layout>
  );
}
