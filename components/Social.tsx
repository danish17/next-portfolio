import { Button, Container, Link, Tooltip } from "@nextui-org/react";
import socialLinks from "../data/social";

const Social = () => {
  return (
    <Container display="flex" style={{ padding: "20px 0", gap: "10px" }}>
      {socialLinks.map((link, idx) => (
        <Tooltip
          key={idx}
          content={link.title}
          color="invert"
          placement="bottom"
        >
          <Link
            aria-label={link?.title}
            href={link.link}
            target="_blank"
            rel={link?.rel}
          >
            <Button
              aria-label={link?.title}
              auto
              color={link?.color as never}
              css={link?.style}
              icon={link.icon}
            />
          </Link>
        </Tooltip>
      ))}
    </Container>
  );
};

export default Social;
