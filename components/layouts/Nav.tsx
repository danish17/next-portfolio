import { Navbar, Link, Text } from "@nextui-org/react";
import ColorModeToggle from "../ColorModeToggle";
import navigationLinks from "../../data/navigation";
import { useRouter } from "next/router";

const Navigation = () => {
  const router = useRouter();
  return (
    <Navbar disableShadow>
      <Navbar.Brand>
        <Navbar.Toggle aria-label="Open menu"></Navbar.Toggle>
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
      <Navbar.Content>
        {/* <Tooltip content="View Source Code" placement="bottom" color="invert">
          <Link href="#">
            <Button
              auto
              flat
              icon={<BsFileCodeFill />}
              aria-label="View source code"
            />
          </Link>
        </Tooltip> */}
        <ColorModeToggle />
      </Navbar.Content>
    </Navbar>
  );
};

export default Navigation;
