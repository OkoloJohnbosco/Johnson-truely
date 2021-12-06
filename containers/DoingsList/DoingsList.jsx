import React from "react";
import { Grid } from "@chakra-ui/react";
import { Doings, doingsList } from "../../section";

function DoingsList() {
  return (
    <Grid
      templateColumns={{
        base: "1fr",
        md: "repeat(auto-fill, minmax(350px, 1fr))",
      }}
      gap={10}
    >
      {doingsList.map((thing) => (
        <Doings key={thing.header} {...thing} />
      ))}
    </Grid>
  );
}

export default DoingsList;
