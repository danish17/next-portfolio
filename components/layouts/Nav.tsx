import { Navbar, Link, Text, useTheme } from "@nextui-org/react";
import ColorModeToggle from "../ColorModeToggle";
import navigationLinks from "../../data/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Navigation = () => {
  const router = useRouter();
  const { isDark } = useTheme();
  const [shadow, setShadow] = useState(false);

  const maybeShowShadow = () => {
    if (document.documentElement.scrollTop > 50) {
      setShadow(true);
      return;
    }

    setShadow(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", maybeShowShadow);
    window.addEventListener("load", maybeShowShadow);
  }, []);

  return (
    <Navbar
      disableShadow={!shadow}
      className="nav"
      css={{
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      <Navbar.Brand>
        <Navbar.Toggle aria-label="Open menu" />
      </Navbar.Brand>
      <Navbar.Collapse
        className="nav-content"
        css={{
          padding: 20,
        }}
      >
        {navigationLinks?.map((navItem) => (
          <Navbar.CollapseItem key={navItem.title}>
            {navItem?.isExternal ? (
              <Link
                href={navItem.link}
                isExternal={navItem?.isExternal}
                css={{ color: isDark ? "#fff" : "#000" }}
              >
                <Text
                  css={{
                    "&:hover": {
                      textDecoration: "underline",
                      textDecorationStyle: "dotted",
                    },
                  }}
                >
                  {navItem.title}
                </Text>
              </Link>
            ) : (
              <Text
                css={{
                  "&:hover": {
                    cursor: "pointer",
                    textDecoration: "underline",
                    textDecorationStyle: "dotted",
                  },
                }}
                onClick={() => {
                  router.push(navItem.link);
                }}
              >
                {navItem.title}
              </Text>
            )}
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
      <Navbar.Content as="div">
        <ColorModeToggle />
      </Navbar.Content>
    </Navbar>
  );
};

export default Navigation;
