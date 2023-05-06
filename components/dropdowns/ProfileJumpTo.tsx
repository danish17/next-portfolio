import { Dropdown } from "@nextui-org/react";
import { ProfileSections } from "../../data/profile";

const JumpToDropwdown = () => {
  return (
    <Dropdown>
      <Dropdown.Button
        flat
        color="warning"
        css={{ zIndex: 1, marginTop: "$4" }}
      >
        Jump to
      </Dropdown.Button>
      <Dropdown.Menu aria-label="Jump to section">
        {ProfileSections.map((section) => (
          <Dropdown.Item key={section.slug} icon={section.icon}>
            {section.title}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default JumpToDropwdown;
