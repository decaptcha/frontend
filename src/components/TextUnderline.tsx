import { ReactNode } from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";

interface TextUnderlineProps {
  children: ReactNode;
}

export const TextUnderline = ({ children }: TextUnderlineProps) => {
  return (
    <Box
      as={"span"}
      color={useColorModeValue("purple.400", "purple.300")}
      position={"relative"}
      zIndex={10}
      _after={{
        content: '""',
        position: "absolute",
        left: 0,
        bottom: 0,
        w: "full",
        h: "30%",
        bg: useColorModeValue("purple.100", "purple.900"),
        zIndex: -1,
      }}
    >
      {children}
    </Box>
  );
};
