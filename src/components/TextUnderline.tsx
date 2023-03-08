import { ReactNode } from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";

interface TextUnderlineProps {
  children: ReactNode;
}

export const TextUnderline = ({ children }: TextUnderlineProps) => {
  return (
    <Box
      as={"span"}
      bgGradient={"linear(to-r, #805AD5, #FF0080)"}
      bgClip="text"
      position={"relative"}
      zIndex={10}
      _after={{
        content: '""',
        position: "absolute",
        left: 0,
        bottom: 0,
        w: "full",
        h: "30%",
        bgGradient: "linear(to-r, #805AD5, #FF0080)",
        bgClip: "text",
        bg: "linear(to-r, #805AD5, #FF0080)",
        zIndex: -1,
      }}
    >
      {children}
    </Box>
  );
};
