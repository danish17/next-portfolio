import { Button, Navbar, Link, Tooltip, Text } from "@nextui-org/react";
import ColorModeToggle from "../ColorModeToggle";
import { BsFileCodeFill } from "react-icons/bs";
import navigationLinks from "../../data/navigation";
import NextLink from "next/link";

const Navigation = () => {
  return (
    <Navbar disableShadow>
      <Navbar.Brand>
        <Navbar.Toggle aria-label="Open menu"></Navbar.Toggle>
      </Navbar.Brand>
      <Navbar.Collapse css={{ padding: 20 }}>
        {navigationLinks?.map((navItem) => (
          <Navbar.CollapseItem key={navItem.title}>
            {navItem?.isExternal ? (
              <Link
                href={navItem.link}
                isExternal={navItem?.isExternal}
                css={{ color: "#fff" }}
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
              <NextLink href={navItem.link}>
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
              </NextLink>
            )}
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
      <Navbar.Content>
        <Tooltip content="View Source Code" placement="bottom" color="invert">
          <Link href="#">
            <Button
              auto
              flat
              icon={<BsFileCodeFill />}
              aria-label="View source code"
            />
          </Link>
        </Tooltip>
        <ColorModeToggle />
      </Navbar.Content>
    </Navbar>
  );
};

export default Navigation;
