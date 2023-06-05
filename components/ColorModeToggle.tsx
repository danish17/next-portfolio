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
        onClick={() => setTheme("light")}
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
      onClick={() => setTheme("dark")}
    />
  );
};

export default ColorModeToggle;
