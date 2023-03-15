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
import { CopyBlock, dracula } from "react-code-blocks";

export const Integration = () => {
  return (
    <Box maxW={"7xl"}>
      <SimpleGrid columns={{ base: 1, md: 1 }} spacing={10}>
        <Stack spacing={4}>
          <HStack>
            <Text
              // bgGradient={"linear(to-r, #805AD5, #FF0080)"}
              // bgColor={"#f734b9"}
              color={"#f734b9"}
              fontSize={"4xl"}
              fontWeight={"bold"}
            >
              Seamless Integration
            </Text>
          </HStack>

          <Text color={"white"} maxW={"4xl"} fontSize={{ md: "2xl" }}>
            Powerful SDK to integrate captcha into your webapps.
          </Text>
        </Stack>

        {/* <Flex justify={"center"} align={"center"}> */}
        {/* <Stack
            key={"dumm"}
            bg={useColorModeValue("gray.100", "gray.900")}
            rounded={"xl"}
            px={4}
            py={3}
            direction={"row"}
            align={"center"}
            justify={"space-between"}
          > */}
        
        <CopyBlock
          language="html"
          text={`<div class="decaptcha" data-sitekey="<YOUR_API_KEY>"> </div>\n\n<script src="https://cdn.jsdelivr.net/gh/decaptcha/sdk/github-cdn/decaptcha.js" type="text/javascript"></script>`}
          theme={dracula}
          showLineNumbers={false}
          wrapLines
        />
        {/* <CopyBlock
          language="html"
          text={``}
          codeBlock
          theme={dracula}
          showLineNumbers={false}
        /> */}
        {/* </Stack> */}
        {/* </Flex> */}
      </SimpleGrid>
    </Box>
  );
};
