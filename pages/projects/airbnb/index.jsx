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
  Spacer,
} from "@chakra-ui/react";
import { Layout } from "../../../containers";
import { Container, ProjectHeader } from "../../../components";
import hero from "../../../public/img/Airbnb/iPhone X.png";
import promptImg from "../../../public/img/Airbnb/prompt.svg";

function index() {
  return (
    <Layout>
      <ProjectHeader
        image={hero}
        heading="Improving the AirBnB app experience"
        p1={
          "We were tasked to design a service allowing AirBnB hosts to ask guests about their preferences or special requests in advance."
        }
        p2={
          "It would help hosts to increase customer satisfaction by improving the experience and potentially provide opportunities for upselling additional services."
        }
      />
      <Container px="10px" py={24} className="airbnb">
        <Stack spacing={10}>
          <Stack>
            <Heading fontWeight="700" fontSize="30px">
              Improving the AirBnB app experience
            </Heading>
          </Stack>
          <Stack spacing={4}>
            <Heading fontSize="18px">TL;DR</Heading>
            <Text>
              We solved a challenge and improved the AirBnB app experience using
              a modified version of Google ventures design sprint process.
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
                <Text>Interaction design</Text>
              </Stack>
            </Box>

            <Box pb={5} w={{ base: "full", md: "auto" }}>
              <Heading mb={3} fontSize="20px" fontWeight="600">
                Project Includes
              </Heading>
              <Stack spacing={2}>
                <Text>Research Data Points</Text>
                <Text>Concept Design</Text>
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
                <Text>A week sprint</Text>
              </Stack>
            </Box>
          </Stack>

          <Stack spacing={10}>
            <Heading fontWeight="700" fontSize="30px">
              The Prompt
            </Heading>
            <Image src={promptImg} />
          </Stack>

          <Stack spacing={4}>
            <Heading fontWeight="700" fontSize="30px">
              Day 1 (Understanding the problem)
            </Heading>
            <Text>
              We synthesized all the available research data to find common
              issues among the target users. Data that we analyzed included
              forums, case studies, publications etc.
            </Text>
          </Stack>

          <Stack spacing={4}>
            <Heading fontWeight="700" fontSize="30px">
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
              On reading the prompt, there were a few questions that came to
              mind immediately.
            </Text>

            <UnorderedList>
              <Stack spacing={4} pl={6} fontFamily="Inter">
                <ListItem>Is this a problem worth solving?</ListItem>
                <ListItem>
                  What are the most effective methods of increasing customer
                  satisfaction?
                </ListItem>
                <ListItem>
                  What kind of hosts/guests are going to use this?
                </ListItem>
                <ListItem>
                  Do they have major differences in how they’d utilize this
                  experience?
                </ListItem>
                <ListItem>
                  What are the benefits of knowing guests' preferences? Do hosts
                  who are aware of guests preferences show more success?
                </ListItem>
                <ListItem>
                  Who drives adoption? Do hosts do this for their own benefit,
                  or do Airbnb encourage it?
                </ListItem>
                <ListItem>
                  What are we optimizing for? What does success look like?
                </ListItem>
              </Stack>
            </UnorderedList>
          </Stack>

          <Stack spacing={4}>
            <Heading fontWeight="700" fontSize="30px">
              How might we
            </Heading>
            <Text>
              We re-framed our insight statements as How Might We questions to
              turn those challenges into opportunities for design.
            </Text>
            <Text>
              ‘’How might we questions'’ gave us the perfect frame for
              innovative thinking.
            </Text>

            <UnorderedList>
              <Stack spacing={4} pl={6} fontFamily="Inter">
                <ListItem>
                  How might we help hosts increase customer satisfaction?
                </ListItem>
                <ListItem>
                  How might we craft a seamless experience for both the host and
                  the guests?.
                </ListItem>
                <ListItem>
                  How might we moderate the requests from guests?.
                </ListItem>
                <ListItem>
                  How might we validate the feasibility of a standalone product?
                </ListItem>
                <ListItem>How might we improve accessibility?</ListItem>
              </Stack>
            </UnorderedList>
          </Stack>

          {/* Day 2 */}
          <Stack spacing={4}>
            <Heading fontWeight="700" fontSize="30px">
              Day 2 (Decide)
            </Heading>
            <Text>
              We used a modified version of Google Ventures Design Sprint to
              ensure that our solutions are grounded in research, aligned with
              the core objectives, crafted with passion, and delivered with
              precision.
            </Text>
          </Stack>

          {/* Goal */}
          <Stack spacing={4}>
            <Heading fontWeight="700" fontSize="30px">
              Goal
            </Heading>
            <Text>
              To craft a seamless experience that'll help Airbnb hosts ask
              guests about their preferences and special requests in advance and
              foster more personal relationships between hosts and guests.
              Thereby, improving the overall experience and fostering customer
              satisfaction.
            </Text>
          </Stack>

          {/* Target Audience */}
          <Stack spacing={4}>
            <Heading fontWeight="700" fontSize="30px">
              Day 3 (Sketch)
            </Heading>
            <Stack spacing={3}>
              <Text>Sketches for other main screens</Text>
              <Text>
                We sketched out various solutions for other main screens,
                including the onboarding flow and preferences screens.
              </Text>
              <Text>
                In this instance, because of the time constraint, these sketches
                played a wireframe role as well.
              </Text>
            </Stack>
          </Stack>

          {/* Image */}
          <Box></Box>

          <Stack spacing={6}>
            <Heading fontWeight="700" fontSize="30px">
              Day 4 & 5 (Prototype and Design)
            </Heading>
            <Stack>
              <Text>
                In an ideal sprint scenario, the team is supposed to make a
                Lo-Fi prototype of the product, but we proceeded to make a fully
                functional Hi-fi design.
              </Text>
              <Text fontWeight="bold" fontFamily="Roboto">
                Host Experience
              </Text>
            </Stack>
          </Stack>

          <Box>
            <Stack w="full">
              <Box maxW="500px" mx="auto">
                <Heading fontFamily="Manrope" fontSize="22px" letterSpacing={1}>
                  Before and After
                </Heading>
              </Box>
            </Stack>
          </Box>

          <Stack spacing={6}>
            <Heading fontSize="20px">Conscious rationale</Heading>
            <Text>
              We did our analysis on the feasibility of a standalone product
              that aggregates and analyzes data of publicly available requests
              modelled by guests from different demographics and geographics.
            </Text>
            <Text>
              We resolved that of all ways in which hosts can be informed of
              guests preferences, which includes
            </Text>
            <UnorderedList>
              <Stack spacing={2} pl={7} fontFamily="Inter">
                <ListItem>Assumptions by host</ListItem>
                <ListItem>A standalone product</ListItem>
                <ListItem>
                  Personalized experience integrated into Airbnb.
                </ListItem>
              </Stack>
            </UnorderedList>
            <Text>
              A personalized experience integrated into Airbnb was the best.
            </Text>
          </Stack>

          {/*  */}
          <Stack spacing={6}>
            <Heading fontSize="30px" fontWeight="700">
              Day 6 & 7 (Test)
            </Heading>
            <Text>
              We conducted initial validation sessions with 2 participants(a
              host and a guest) that fit into the target audience of this
              experience.
            </Text>
            <Text fontWeight="bold">Scenario</Text>
            <UnorderedList>
              <Stack spacing={4} pl={7} fontFamily="Inter">
                <ListItem>
                  Would an experience that inform you about your guests
                  preferences make you serve them better?(host)
                </ListItem>
                <ListItem>
                  Would you be able to fulfill special requests from your
                  guests, so as to increase customer satisfaction?(host)
                </ListItem>
                <ListItem>
                  If given an opportunity to tell your hosts about your
                  preferences on Airbnb, how would you feel? (guest).
                </ListItem>
                <ListItem>
                  Would you patronize hosts that don't give you this opportunity
                  on Airbnb? (Guests).
                </ListItem>
              </Stack>
            </UnorderedList>
          </Stack>

          {/* Results */}
          <Stack pt={5} spacing={6}>
            <Text fontWeight="bold">Results</Text>
            <Text>
              The host believed knowing the preferences of his guests will help
              him stop assuming and offer them a more personalized service.
            </Text>
            <Text>
              When we showed him the new experience, he loved the fact that he
              can suggest some special addons, which he can afford.
            </Text>
            <Text>
              The guest, on the other hand, was optimistic about the experience
              but stated that he would still be able to patronize hosts that
              turn off preferences.
            </Text>
          </Stack>

          {/* My Favorite Step */}
          <Stack spacing={6}>
            <Heading fontWeight="700" fontSize="30px">
              My favourite step
            </Heading>
            <Stack>
              <Text>
                It’s a tie: design sprint facilitation, which I always love
                doing, and user testing, which lets me validate my initial
                assumptions & the effectiveness of my solution.{" "}
              </Text>
            </Stack>
          </Stack>

          {/* Takeaways */}
          <Stack spacing={6}>
            <Heading fontWeight="700" fontSize="30px">
              Takeaways
            </Heading>
            <Stack>
              <Text>
                There is no doubt that the team behind AirBnB spent countless
                hours making what we see now. They conducted a lot of research
                and iterations. They have access to a huge amount of data which
                tells them how the users behave and what they try to accomplish.
                The features and how they have been laid out must have the
                reasoning driven by those research and data. Besides, the
                company has its own agenda and goals to achieve.
              </Text>
              <Text>
                The amount of research we did within a limited period of time is
                fairly small compared to what the AirBnB team did.
              </Text>
              <Text>
                So we don’t claim that every decision we have taken to improve
                the experience is better than what exists now.
              </Text>
              <Text>
                We absolutely think a lot more research, usability testing, and
                iterations can be done to improve the Airbnb experience; after
                all, design is a continuous process!
              </Text>
              <Text>
                It would be very interesting to implement this experience and
                A/B test it to see what works and what needs improvement. With
                these mockups, I can only do so much.
              </Text>
            </Stack>
          </Stack>

          {/* Retrospective */}
          <Stack spacing={6}>
            <Heading fontWeight="700" fontSize="30px">
              Retrospective
            </Heading>
            <Stack>
              <Text>
                Completing this project using Google Ventures' design sprint
                process allowed us to get hands-on experience working in an
                agile setup where deadlines and short turn-around times are very
                common. While also allowing me to demonstrate my ability to work
                on agile projects.
              </Text>
              <Text>
                Needless to say, I take more time with actual products, but I
                hope this gave you an idea of how I think, and how I tackle
                projects.
              </Text>
            </Stack>
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
                UpFood
              </Heading>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Layout>
  );
}

export default index;
