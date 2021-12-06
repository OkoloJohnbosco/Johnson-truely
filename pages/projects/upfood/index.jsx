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
import { Layout } from "../../../containers";
import { Container, ProjectHeader } from "../../../components";
import hero from "../../../public/img/Upfood/iPhone X.png";
import logo from "../../../public/img/Upfood/logo.png";
import customer from "../../../public/img/Upfood/Customer.png";
import vendor from "../../../public/img/Upfood/vendor.png";
import upfoodImg from "../../../public/img/Upfood/Image.png";
import formImage from "../../../public/img/Upfood/initial validation.png";
import result from "../../../public/img/Upfood/Results.png";

function index() {
  return (
    <Layout>
      <ProjectHeader
        image={hero}
        heading="With Upfood, you can never go hungry"
        p1={
          "Residents in tertiary institutions are very busy and due to their busy schedules, a few of them order their meals from vendors, but most times they get disappointed by the vendors."
        }
        p2={
          "We craft a seamless experience that'll help residents of tertiary institutions save time and  order the best meals from their favorite restaurants at their convenience."
        }
      />
      <Container px="10px" py={24} className="airbnb">
        <Stack spacing={10}>
          <Stack>
            <Heading fontWeight="700" fontSize="30px">
              With Upfood, you can never go hungry
            </Heading>
          </Stack>
          <Stack spacing={4}>
            <Heading fontSize="18px">TL;DR</Heading>
            <Text>
              We participated in a Techstars startup weekend competition and
              solved a challenge using a modified version of Google venture's
              design sprint process.
            </Text>
            <Text>
              This is a case study that explains our process and results.
            </Text>
          </Stack>

          <Stack
            direction={{ base: "column", md: "row" }}
            wrap="wrap"
            maxW={{ base: "full", md: "800px" }}
            justify={{ base: "flex-start", md: "space-between" }}
          >
            <Box pb={5} w={{ base: "full", md: "auto" }}>
              <Heading mb={3} fontSize="20px" fontWeight="600">
                Roles
              </Heading>
              <Stack spacing={2}>
                <Text>User Research</Text>
                <Text>Content strategy</Text>
                <Text>Product strategy</Text>
              </Stack>
            </Box>

            <Box pb={5} w={{ base: "full", md: "auto" }}>
              <Heading mb={3} fontSize="20px" fontWeight="600">
                Project Includes
              </Heading>
              <Stack spacing={2}>
                <Text>Research Data Points</Text>
                <Text>Design Iterations</Text>
                <Text>Retrospective</Text>
              </Stack>
            </Box>

            <Box pb={5} w={{ base: "full", md: "auto" }}>
              <Heading mb={3} fontSize="20px" fontWeight="600">
                Project Duration
              </Heading>
              <Stack spacing={2}>
                <Text>2021</Text>
                <Text>3 days sprint</Text>
              </Stack>
            </Box>
          </Stack>

          <Stack spacing={10}>
            <Heading fontWeight="700" fontSize="30px">
              Day 1 (Understanding the problem)
            </Heading>
            <Image src={logo} />
          </Stack>

          <Stack spacing={4}>
            <Heading pb={3} fontWeight="700" fontSize="30px">
              Problem statement
            </Heading>
            <Text>
              Residents in tertiary institutions are very busy and due to their
              busy schedules, a few of them order their meals from vendors, but
              most times they get disappointed by the vendors.
            </Text>
          </Stack>

          <Stack spacing={5}>
            <Heading pb={3} fontWeight="700" fontSize="30px">
              Questions
            </Heading>
            <Text>
              We started our design process in text, asking whichever questions
              come to mind, and jotting down any ideas or assumptions we find.
            </Text>
            <Text>
              This helps us uncover a larger range of opportunities than when we
              start projects visually.
            </Text>
            <Text>
              Before jumping into designing pixels, there were a few questions
              that came to mind immediately.
            </Text>
            <UnorderedList>
              <Stack spacing={5} pl={7} fontFamily="Inter">
                <ListItem>Is this a problem worth solving?</ListItem>
                <ListItem>
                  What are the most effective methods of solving it?
                </ListItem>
                <ListItem>Who are our target audience?</ListItem>
                <ListItem>How do we reduce delivery time?</ListItem>
                <ListItem>How do we gamify the system?</ListItem>
                <ListItem>
                  Are there constraints that’ll hinder our operation?
                </ListItem>
                <ListItem>
                  What are we optimizing for? What does success look like?
                </ListItem>
              </Stack>
            </UnorderedList>
          </Stack>

          <Stack spacing={5}>
            <Heading pb={3} fontWeight="700" fontSize="30px">
              How might we
            </Heading>
            <Text>
              We re-framed our insight statements as How Might We questions to
              turn those challenges into opportunities for design.
            </Text>
            <Text>
              How might we questions'’ gave us the perfect frame for innovative
              thinking.
            </Text>
            <UnorderedList>
              <Stack spacing={5} pl={7} fontFamily="Inter">
                <ListItem>
                  How might we help vendors increase customer satisfaction?
                </ListItem>
                <ListItem>
                  How might we craft a seamless experience for both the
                  customers and the vendors?.
                </ListItem>
                <ListItem>
                  How might we validate the feasibility of the product?
                </ListItem>
                <ListItem>
                  How do outlash the constraints that come with logistics?
                </ListItem>
              </Stack>
            </UnorderedList>
          </Stack>

          <Stack spacing={5} mb={4}>
            <Heading pb={3} fontWeight="700" fontSize="30px">
              Design process
            </Heading>
            <Text>
              We used a modified version of Google Ventures Design Sprint to
              ensure that our solutions are grounded in research, aligned with
              the core objectives, created with passion, and delivered with
              precision.
            </Text>
          </Stack>

          <Stack spacing={5} mb={4}>
            <Heading pb={3} fontWeight="700" fontSize="30px">
              Goal
            </Heading>
            <Text>
              To craft a seamless experience that'll help residents of tertiary
              institutions order the best meals from their favorite restaurants.
            </Text>
          </Stack>

          <Stack spacing={5} mb={4}>
            <Heading pb={3} fontWeight="700" fontSize="30px">
              Target audience
            </Heading>
            <Text>
              The ideal users of this experience are residents of tertiary
              institutions and food vendors in this geographical location.
            </Text>
          </Stack>

          <Stack spacing={5} mb={4}>
            <Heading pb={3} fontWeight="700" fontSize="30px">
              User persona
            </Heading>
          </Stack>

          <Stack spacing={5} mb={4}>
            <Text fontWeight="700">Customer</Text>
            <Image src={customer} alt="customer" />
          </Stack>

          <Stack spacing={5} mb={4}>
            <Text fontWeight="700">Vendor</Text>
            <Image src={vendor} alit="Vendor" />
          </Stack>

          <Stack spacing={4}>
            <Heading pb={3} fontWeight="700" fontSize="30px">
              Day 2 (Prototype and Design)
            </Heading>
            <Text>
              In an ideal sprint scenario, the team is supposed to make a Lo-Fi
              prototype of the product, but we proceeded to make a fully
              functional Hi-fi prototype.
            </Text>
          </Stack>

          <Box>
            <Image src={upfoodImg} />
          </Box>

          <Stack spacing={4}>
            <Heading pb={3} fontWeight="700" fontSize="30px">
              Day 3 (Initial validation)
            </Heading>
            <Text>
              We conducted initial validation sessions with over 70 participants
              that fit into the target audience of this experience.
            </Text>
            <Box>
              <Image src={formImage} alt="Upfood form image" />
            </Box>
          </Stack>

          <Stack spacing={4} pt={5}>
            <Heading pb={3} fontWeight="700" fontSize="30px">
              Collating results
            </Heading>
            <Box>
              <Image src={result} alt="Upfood form image" />
            </Box>
          </Stack>

          <Stack spacing={4} pt={5}>
            <Heading pb={3} fontWeight="700" fontSize="30px">
              Our favourite step
            </Heading>
            <Text>
              Brainstorming on our one-liner: This helped us validate our
              initial assumptions & the effectiveness of my solution.
            </Text>
          </Stack>

          <Stack spacing={4} pt={5}>
            <Heading pb={3} fontWeight="700" fontSize="30px">
              Takeaways
            </Heading>
            <Text>
              I’m so happy i was a part of this startup hackathon, i learnt alot
              about working in agile teams, speed and iterative development.
            </Text>
            <Text>
              I was also able to network with great minds who have being pivotal
              in my growth. My team members were the best and we won the
              competition because of our selfless service and passion to make an
              impact.
            </Text>
            <Text>
              Well after the hackathon, we’ve been working on the project as a
              cross-functional team and we’ve been making progress ever since.
            </Text>
          </Stack>

          <Stack spacing={8}>
            <Text fontWeight="700" color="#000CD6" fontSize="20px">
              Next Project
            </Text>
            <Box textAlign="center">
              <Heading
                fontSize="40px"
                style={{ fontFamily: "Inter", fontWeight: "900" }}
                fontFamily="Inter"
                color="rgba(20, 33, 255, 0.3)"
              >
                Sharechaw
              </Heading>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Layout>
  );
}

export default index;
