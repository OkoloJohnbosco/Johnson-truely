import React from "react";
import {
  Box,
  VStack,
  Stack,
  Image,
  Text,
  Heading,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { Layout } from "../../containers";
import { Container } from "../../components";
import headshot from "../../public/img/Press kit page/Headshot.png";

function index() {
  return (
    <Layout>
      <Container px="10px" py={24}>
        <Box>
          <VStack spacing={3} alignItems="flex-start" mb={12}>
            <Heading fontSize="26px">Press Kit</Heading>
            <Text>
              The following information can be used for media publishers and
              event organizers
            </Text>
          </VStack>

          <Stack spacing={10}>
            <VStack alignItems="flex-start" spacing={6}>
              <Heading as="h6" fontSize="16px">
                Basic Information
              </Heading>
              <Box>
                <UnorderedList>
                  <VStack alignItems="flex-start" spacing={3}>
                    <ListItem>Name: Adebisi Johnson Chinedu</ListItem>
                    <ListItem>Job titile: UX Product Designer</ListItem>
                    <ListItem>Company: Could be yours</ListItem>
                    <ListItem>
                      Prefeered taglines: UX Product Designer, Venture Analyst,
                      Venture Builder, Business Analyst, Product manager.
                    </ListItem>
                    <ListItem>Nationality: Nigerian</ListItem>
                    <ListItem>Pronouns: He/Him</ListItem>
                  </VStack>
                </UnorderedList>
              </Box>
            </VStack>

            <VStack alignItems="flex-start" spacing={6}>
              <Heading as="h6" fontSize="16px">
                Links
              </Heading>
              <Box>
                <UnorderedList>
                  <VStack alignItems="flex-start" spacing={3}>
                    <ListItem>Portfolio</ListItem>
                    <ListItem>Linkedin</ListItem>
                    <ListItem>Twitter</ListItem>
                    <ListItem>Polywork</ListItem>
                    <ListItem>My Newsletter</ListItem>
                  </VStack>
                </UnorderedList>
              </Box>
            </VStack>
          </Stack>
          {/* Biography */}
          <Box mt={16}>
            <Heading as="h5" fontSize="20px" mb={8}>
              Biography
            </Heading>
            <VStack alignItems="flex-start" spacing={6}>
              <Stack spacing={4}>
                <Text fontWeight="bold">Short</Text>
                <Text>
                  Adebisi “ Otunba” Johnson Chinedu is a UX Product Designer and
                  aspiring VC capitalist/catalyst
                </Text>
              </Stack>

              <Stack spacing={4}>
                <Text fontWeight="bold">Medium</Text>
                <Text>
                  Adebisi “ Otunba” Johnson Chinedu is a UX Product Designer and
                  aspiring VC capitalist/catalyst{" "}
                </Text>
                <Text>
                  He helps businesses be the brand that customers love, by
                  transforming business goals into great digital products that
                  make their business thrive.
                </Text>
              </Stack>

              <Stack spacing={4}>
                <Text fontWeight="bold">Long (preferred)</Text>
                <Text>
                  Adebisi “ Otunba” Johnson Chinedu is a UX Product Designer and
                  aspiring VC capitalist/catalyst
                </Text>
                <Text>
                  He helps businesses be the brand that customers love, by
                  transforming business goals into great digital products that
                  make their business thrive.
                </Text>
                <Text>
                  He is a passionate professional with multi-faceted skills and
                  experience spanning across UX design, business analysis and
                  Venture capital.
                </Text>
                <Text>
                  When he isn’t designing,you can find him exploring the venture
                  capital landscape in emerging markets and performing due
                  diligence on companies and products that are solving africa’s
                  biggest challenges.
                </Text>
              </Stack>

              <Stack spacing={6}>
                <Text fontWeight="bold">Preferred Headshot</Text>
                <Box maxH="600px" w="100%" overflow="hidden">
                  <Image src={headshot} alt="headshot" w="100%" maxW="100%" />
                </Box>
              </Stack>
              {/* End of biography */}
            </VStack>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
}

export default index;
