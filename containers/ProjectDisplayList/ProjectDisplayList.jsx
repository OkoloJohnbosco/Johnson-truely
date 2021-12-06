import React from "react";
import { VStack } from "@chakra-ui/react";
import { ProjectDisplay, projectList } from "../../section";

function ProjectDisplayList() {
  return (
    <VStack
      w="100%"
      spacing="50px"
      justifyItems="flex-start"
      alignItems="flex-start"
    >
      {projectList.map((project) => (
        <ProjectDisplay key={project.text} {...project} />
      ))}
    </VStack>
  );
}

export default ProjectDisplayList;
