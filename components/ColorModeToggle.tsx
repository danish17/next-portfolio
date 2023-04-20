import { Button, useTheme } from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const ColorModeToggle = () => {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  if (isDark) {
    return (
      <Button
        auto
        flat
        icon={<BsFillSunFill />}
        color="warning"
        aria-label="Turn on light mode"
        onClick={(e) => setTheme("light")}
      />
    );
  }

  return (
    <Button
      auto
      flat
      icon={<BsFillMoonFill />}
      color="secondary"
      aria-label="Turn on dark mode"
      onClick={(e) => setTheme("dark")}
    />
  );
};

export default ColorModeToggle;
