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
import hero from "../../../public/img/Sinmi/Iphone-X.png";
import design from "../../../public/img/Sinmi/Design process.png";
import Imaage from "../../../public/img/Sinmi/Imaage.png";
import personaImg from "../../../public/img/Sinmi/persona.png";
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
        bg="#BAFACC"
        image={hero}
        heading="Sinmi"
        p1="'Sinmi' ( a yoruba word meaning relax/rest) is a platform that gives cancer patients control over their disease by educating them and enables them to get seamless teleconsultation with Nigerian doctors in diaspora inorder to improve the quality of their life."
      />
      <Container px="10px" py={24} className="airbnb">
        <Stack spacing={10}>
          <Stack>
            <Heading fontWeight="700" fontSize="30px">
              Improving the life of cancer patients
            </Heading>
          </Stack>
          <Stack spacing={4}>
            <Heading fontSize="18px">TL;DR</Heading>
            <Text>
              I designed a responsive platform for a healthtech solution from
              the ground up. I did a deep-dive into the industry landscape, the
              solution's potential competitors, and conducted interviews with
              users in the target demographic to understand the pain points and
              needs of potential customers.
            </Text>
            <Text>
              With those learnings in mind, I laid the groundwork for the
              website through developing the information architecture and
              analyzing potential user flows. I then created wireframes, rapid
              prototypes, conducted user testing, and finally created the user
              interface design and branding elements to position the company in
              a way that reflected its values.
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
                <Text>9 Weeks</Text>
              </Stack>
            </Box>
          </Stack>

          <Stack spacing={4}>
            <Heading pb={3} fontWeight="700" fontSize="30px">
              Understanding the problem
            </Heading>
            <Text fontWeight="600" fontSize="20px">
              Challenge/Problem Overview
            </Text>
            <Text>
              Every sixth death in the world is due to cancer, making it the
              second leading cause of death - second only to cardiovascular
              diseases.
            </Text>
            <Text>
              In Nigeria, about 10,000 cancer deaths are recorded annually while
              250,000 new cases are recorded yearly. (source)
            </Text>
            <Text>
              Given the complex nature of the disease and the treatment
              modalities as well as the psychosocial impact associated with the
              disease, those diagnosed with cancer and their family members will
              encounter information and emotional support needs throughout the
              course of the disease and treatment.
            </Text>
          </Stack>

          <Stack spacing={5}>
            <Heading pb={3} fontWeight="700" fontSize="30px">
              Questions
            </Heading>
            <Text>
              I started my design process in text, asking whichever questions
              come to mind, and jotting down any ideas or assumptions i find.
            </Text>
            <Text>
              This helps me uncover a larger range of opportunities than when i
              start projects visually.
            </Text>
            <Text>
              On uncovering the problem, there were a few questions that came to
              mind immediately.
            </Text>
            <UnorderedList>
              <Stack spacing={5} pl={7} fontFamily="Inter">
                <ListItem>Is this a problem worth solving?</ListItem>
                <ListItem>
                  How do cancer patients control their disease?
                </ListItem>
                <ListItem>
                  What is the best way to improve the lives of cancer patients
                </ListItem>
                <ListItem>
                  Does being educated and informed, improve the chances of the
                  patient’s survival?
                </ListItem>
                <ListItem>
                  Are the benefits big enough for patients to invest their time?
                </ListItem>
              </Stack>
            </UnorderedList>
          </Stack>

          <Stack spacing={5}>
            <Heading pb={3} fontWeight="700" fontSize="30px">
              How might we
            </Heading>
            <Text>
              I re-framed the insight statements as How Might We questions to
              turn those challenges into opportunities for design.
            </Text>
            <Text>
              How might we questions'’ gave us the perfect frame for innovative
              thinking.
            </Text>
            <UnorderedList>
              <Stack spacing={4} pl={7} fontFamily="Inter">
                <ListItem>
                  How might we improve the livelihood of cancer patients?
                </ListItem>
                <ListItem>
                  How might we connect them to doctors in the diaspora?
                </ListItem>
                <ListItem>
                  How might we validate the feasibility of the product?
                </ListItem>
                <ListItem>
                  How might we craft an experience that generates revenue for
                  the doctors?
                </ListItem>
                <ListItem>
                  How might we make the experience seamless and enjoyable?
                </ListItem>
              </Stack>
            </UnorderedList>
          </Stack>

          <Stack spacing={5} mb={4}>
            <Heading pb={3} fontWeight="700" fontSize="30px">
              Design process
            </Heading>
            <Text>
              I tailored a simple 5-stage process to ensure that my solutions
              are grounded in research, aligned with the core objectives,
              created with passion, and delivered with precision.
            </Text>
            <Box>
              <Image src={design} alt="design processe" />
            </Box>
          </Stack>

          <Stack mb={4}>
            <Heading fontWeight="700" fontSize="30px">
              Conducting research
            </Heading>
          </Stack>

          <Stack spacing={7}>
            <Text fontWeight="bold" fontSize="18px">
              Research goals
            </Text>
            <UnorderedList>
              <Stack spacing={3} pl={7} fontFamily="Inter">
                <ListItem>Discover industry best practices</ListItem>
                <ListItem>Develop empathy with cancer patients.</ListItem>
                <ListItem>Get immersed in the reality of cancer.</ListItem>
                <ListItem>
                  Discover how best to give cancer patients control over their
                  disease
                </ListItem>
              </Stack>
            </UnorderedList>
          </Stack>

          <Stack spacing={5} mb={4}>
            <Text fontWeight="bold" fontSize="18px">
              Overview of findings
            </Text>
            <Text>
              Providing cancer patients with information helps them with
              decision making, prepares them for treatment and helps them cope
              with the adverse effects associated with it, reduces anxiety and
              depression, increases satisfaction with treatment, improves
              quality of life. (source)
            </Text>
            <Text>
              My research made me understand that it is only when patients are
              fully informed that they can become an active partner in the
              process of their care. and being informed gives them some control
              over their disease, which plays a role in the healing process.
            </Text>
          </Stack>

          <Stack spacing={5} mb={4}>
            <Text fontWeight="bold" fontSize="18px">
              Competitor analysis
            </Text>
            <Text>
              In this phase, I analyzed what other tech startups are doing to
              alleviate this problem and to help cancer patients control their
              disease.
            </Text>
            <Text>
              It was interesting to analyze the difference between companies
              when it came to their messaging and approach to solving this
              problem.
            </Text>
          </Stack>

          <Stack spacing={5} mb={4}>
            <Text fontWeight="bold" fontSize="18px">
              Takeaways from competitor analysis
            </Text>
            <Text>
              Lafiya Telehealth is a digital healthcare platform that provides
              on-demand 24/7 healthcare services to its clients in Africa,
              Middle East, Asia, Latin America, North America and Europe. From
              exclusive walk-in mobile station kiosks to a smartphone app, you
              can now instantly connect with a certified doctor or pharmacist
              regardless of your location and financial condition.
            </Text>
            <Text>
              German startup "Vara" leverages machine learning to create a
              platform that integrates with the breast cancer workflows to scan
              and analyze indicators of breast cancer.
            </Text>
          </Stack>

          <Stack spacing={5} mb={4}>
            <Heading pb={3} fontWeight="700" fontSize="30px">
              Define
            </Heading>
          </Stack>

          <Stack spacing={5} mb={4}>
            <Text fontWeight="700">Prosposed solution</Text>
            <Text>
              "Sinmi" ( a yoruba word meaning relax/rest) is a platform that
              gives cancer patients control over their disease by educating them
              and enables them to get seamless teleconsultation with Nigerian
              doctors in diaspora inorder to improve the quality of their life.
            </Text>
            <Image src={Imaage} alt="customer" />
          </Stack>

          <Stack spacing={5} mb={4}>
            <Text fontWeight="700">Personal</Text>
            <Text>
              I used the learnings from my research, market analysis, and
              interviews to inform my ideal persona. Since there would be two
              distinct users for the app (doctors and patients) with different
              pain points and motivations, I developed two distinct personas.
            </Text>
            <Image src={vendor} alt="vendor" />
          </Stack>

          <Stack mt={4}>
            <Image src={personaImg} alt="vendor" />
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
