import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { IoMdArrowUp } from "react-icons/io";

const GoToTop = () => {
  const [show, setShow] = useState(false);
  const funcGoToTop = () => {
    if (document.documentElement.scrollTop > 150) {
      setShow(true);
      return;
    }

    setShow(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", funcGoToTop);
    window.addEventListener("load", funcGoToTop);
  }, []);
  return (
    <Button
      auto
      icon={<IoMdArrowUp />}
      css={{
        position: "fixed",
        bottom: "$10",
        right: "$16",
        visibility: show ? "visible" : "hidden",
        opacity: show ? "0.75" : "0",
        pointerEvents: show ? "all" : "none",
        transition: "all .3s ease",
      }}
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    />
  );
};

export default GoToTop;
