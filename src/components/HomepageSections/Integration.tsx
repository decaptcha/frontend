import {
  Container,
  Heading,
  Text,
  Stack,
  Icon,
  SimpleGrid,
  Wrap,
  WrapItem,
  Link,
  Tooltip,
  Flex,
  useColorModeValue,
  Box,
  Code,
  HStack,
} from "@chakra-ui/react";

import { TextUnderline } from "@/components/TextUnderline";
import { FaRocket } from "react-icons/fa";

export const Integration = () => {
  return (
    <Container maxW={"7xl"} py={{ base: 14, sm: 20, md: 32 }}>
      <SimpleGrid columns={{ base: 1, md: 1 }} spacing={10}>
        <Stack spacing={4}>
          <HStack>
            <Heading
              bgGradient={"linear(to-r, #805AD5, #FF0080)"}
              bgClip="text"
              as="h2"
            >
              Seamless Integration
            </Heading>
            <Heading as="h2" ml="2">
              🚀
            </Heading>
          </HStack>

          <Text color={"gray.500"} maxW={"4xl"} fontSize={{ md: "lg" }}>
            Powerful SDK to integrate captcha into your apps, backends and games
          </Text>
        </Stack>

        <Flex justify={"center"} align={"center"}>
          <Stack
            key={"dumm"}
            bg={useColorModeValue("gray.100", "gray.900")}
            rounded={"xl"}
            px={4}
            py={3}
            direction={"row"}
            align={"center"}
            justify={"space-between"}
          >
            <Stack direction={"row"} align={"center"}>
              <Flex wrap="wrap" gap={8} p={8}>
                <Code colorScheme="purple" fontSize={"16px"}>
                  {`<script src="https://cdn.jsdelivr.net/gh/decaptcha/sdk/github-cdn/decaptcha.js" type="text/javascript"></script>`}
                </Code>
              </Flex>
            </Stack>
          </Stack>
        </Flex>
      </SimpleGrid>
    </Container>
  );
};
