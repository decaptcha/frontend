import {
  Container,
  Heading,
  Text,
  Box,
  Stack,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { TextUnderline } from "@/components/TextUnderline";

const STEPS = [
  {
    title: "Find your template",
    text:
      "Every template is embedded within an iframe, so you can easily check what they look like and test the responsive behaviour.",
  },
  {
    title: "Copy the code",
    text:
      "Click the code tab to see the actual source code of the template. Copy and paste it into your project and adjust it to your needs.",
  },
  {
    title: "Enjoy your free time",
    text:
      "You've just saved yourself a bunch of time not building the same stuff over and over again. Enjoy your free time, and build business features",
  },
];

export const GettingStarted = () => {
  return (
    <Box bg={useColorModeValue("gray.50", "gray.900")}>
      <Container maxW={"7xl"} py={{ base: 14, sm: 20, md: 32 }}>
        <Heading as={"h3"} textAlign={"center"} mb={{ base: 14, sm: 16 }}>
          <TextUnderline
            bgGradient="linear(to-r, #805AD5, #FF0080)"
            bgClip="text"
            fontSize="4xl"
          >
            Features
          </TextUnderline>
        </Heading>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify={"space-between"}
          align={{ base: "center", md: "flex-start" }}
        >
          {STEPS.map((step, index) => (
            <Stack
              textAlign={{ base: "left", md: "center" }}
              align={{ base: "flex-start", md: "center" }}
              spacing={4}
              key={step.title}
              maxW={{ base: "full", md: "xs" }}
              mt={{ base: 10, md: 0 }}
              _first={{
                mt: 0,
              }}
              px={4}
            >
              <Flex
                w={10}
                h={10}
                bg={useColorModeValue("purple.100", "purple.900")}
                color={useColorModeValue("purple.700", "purple.300")}
                fontWeight={700}
                align={"center"}
                justify={"center"}
                fontSize={"sm"}
                rounded={"md"}
              >
                0{index + 1}
              </Flex>
              <Text
                fontFamily={"heading"}
                fontSize={"xl"}
                color={useColorModeValue("gray.700", "white")}
              >
                {step.title}
              </Text>
              <Text color={"gray.500"}>{step.text}</Text>
            </Stack>
          ))}
        </Flex>
      </Container>
    </Box>
  );
};
