import { Button, Navbar, Link, Tooltip } from "@nextui-org/react";
import ColorModeToggle from "../ColorModeToggle";
import { BsFileCodeFill } from "react-icons/bs";
import navigationLinks from "../../data/navigation";

const Navigation = () => {
  return (
    <Navbar disableShadow>
      <Navbar.Brand>
        <Navbar.Toggle aria-label="Open menu"></Navbar.Toggle>
      </Navbar.Brand>
      <Navbar.Collapse css={{ padding: 20 }}>
        {navigationLinks?.map((navItem) => (
          <Navbar.CollapseItem key={navItem.title}>
            <Link href={navItem.link}>
              <Button light icon={navItem.icon}>
                {navItem.title}
              </Button>
            </Link>
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
