const navLinks = [
  { name: "Home", href: "/", exact: true, className: "nav-item" },
  { name: "Meet me", href: "/meet-me", exact: false, className: "nav-item" },
  {
    name: "Press kit",
    href: "/press-kit",
    exact: false,
    className: "nav-item",
  },
  { name: "Projects", href: "/project", exact: false, className: "nav-item" },
  {
    name: "Talk to me",
    href: "/talk-to",
    exact: false,
    className: "nav-item",
    isButton: true,
  },
];

export default navLinks;
