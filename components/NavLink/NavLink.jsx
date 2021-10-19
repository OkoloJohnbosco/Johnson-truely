import { useRouter } from "next/router";
import Link from "next/link";
import PropTypes from "prop-types";
import { Box, Button } from "@chakra-ui/react";

function NavLink({ href, exact, children, isButton, ...props }) {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  let activeStyles = {};

  if (isActive) {
    props.className += " nav-active";
  }

  if (isActive && !isButton) {
    // activeStyles = { color: "red" };
  }

  return (
    <Link href={href} passHref>
      <Box
        as={isButton ? "Button" : "a"}
        {...activeStyles}
        {...props}
        fontWeight="semi-bold"
      >
        {children}
      </Box>
    </Link>
  );
}

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  exact: PropTypes.bool,
};

NavLink.defaultProps = {
  exact: false,
};

export default NavLink;
