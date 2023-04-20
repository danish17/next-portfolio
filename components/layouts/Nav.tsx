import { Button, Navbar, Tooltip } from "@nextui-org/react";
import ColorModeToggle from "../ColorModeToggle";
import Link from "next/link";
import { BsFileCodeFill } from "react-icons/bs";

const Navigation = () => {
  return (
    <Navbar variant="floating" isCompact>
      <Navbar.Brand></Navbar.Brand>
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
