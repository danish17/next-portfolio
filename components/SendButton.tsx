import { styled } from "@nextui-org/react";

const SendButton = styled("button", {
  // reset button styles
  background: "transparent",
  border: "none",
  padding: 0,
  // styles
  minWidth: "32px",
  minHeight: "32px",
  margin: "0 10px",
  dflex: "center",
  bg: "$primary",
  borderRadius: "$rounded",
  cursor: "pointer",
  transition: "opacity 0.25s ease 0s, transform 0.25s ease 0s",
  svg: {
    padding: "4px",
    transition: "transform 0.25s ease 0s, opacity 200ms ease-in-out 50ms",
    boxShadow: "0 5px 20px -5px rgba(0, 0, 0, 0.1)",
  },
  "&:hover": {
    opacity: 0.8,
  },
  "&.is-sending": {
    bg: "transparent",
    svg: {
      transform: "translate(24px, -24px)",
      opacity: 0,
    },
  },
});

export default SendButton;
