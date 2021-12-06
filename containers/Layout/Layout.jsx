import React from "react";
import { Footer, Navbar } from "../../section";
import { Box } from "@chakra-ui/react";

function Layout(props) {
  return (
    <Box {...props}>
      <Navbar />
      {props.children}
      <Footer />
    </Box>
  );
}

export default Layout;
