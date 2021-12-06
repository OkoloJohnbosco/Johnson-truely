import React from "react";
import { IconButton } from "@chakra-ui/react";
import { CalendarIcon } from "@chakra-ui/icons";

function SocialBtn({ Icon }) {
  return (
    <IconButton
      variant="outline"
      size="sm"
      bg="rgba(255,255,255,0.1)"
      border="0"
      transition="0.3s"
      color="#fff"
      rounded={300}
      _hover={{
        bg: "",
        color: "#FBB405",
      }}
    >
      {Icon && <Icon />}
    </IconButton>
  );
}

export default SocialBtn;
