import { Dropdown } from "@nextui-org/react";
import { IoBriefcase, IoSchool } from "react-icons/io5";

const CVDownloadDropdown = () => {
  return (
    <Dropdown>
      <Dropdown.Button flat css={{ zIndex: 1 }}>
        Download CV
      </Dropdown.Button>
      <Dropdown.Menu aria-label="Download CV">
        <Dropdown.Item key="new" icon={<IoSchool />}>
          Academia
        </Dropdown.Item>
        <Dropdown.Item key="copy" icon={<IoBriefcase />}>
          Industry
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CVDownloadDropdown;
