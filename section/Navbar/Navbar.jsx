import React from "react";
import { Box, HStack } from "@chakra-ui/react";
import navLinks from "./links";
import { NavLink, Container } from "../../components";
import logo from "../../public/img/logo/logo.svg";
import Image from "next/image";

function Navbar() {
  return (
    <Box borderWidth={1} borderBottomColor="rgba(0,0,0,.15)" px={5} py={2}>
      <Container
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Image src={logo} alt="kdkd" height="50px" width="100px" />
        <HStack spacing={6}>
          {navLinks.map((link) => (
            <NavLink key={link.name} {...link}>
              {link.name}
            </NavLink>
          ))}
        </HStack>
      </Container>
    </Box>
  );
}

export default Navbar;
