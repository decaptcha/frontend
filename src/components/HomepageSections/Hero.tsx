import {
  Container,
  Stack,
  Heading,
  Text,
  Box,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";
import styled from "styled-components";

import { HeroComponents } from "@/components/HomepageSections/HeroComponents";
import { Integration } from "./Integration";
import { SolanaLogo } from "../SolanaLogo";

export const Hero = () => {
  return (
    <Box
      bg={useColorModeValue("gray.100", "black")}
      css={{
        // backgroundImage: useColorModeValue(CONFETTI_LIGHT, CONFETTI_DARK),
        backgroundAttachment: "fixed",
      }}
    >
      <Stack
        as={Container}
        maxW={"7xl"}
        h={{ base: "100%", lg: "100vh" }}
        minH={500}
        py={{ base: 24, lg: 32 }}
        spacing={{ base: 10, lg: 24 }}
        direction={{ base: "column", lg: "row" }}
        alignItems={"center"}
      >
        <Stack
          spacing={12}
          mb={{ base: 12, lg: 0 }}
          flex={2}
          direction="column"
        >
          <Heading
            as={"h2"}
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
            maxW={"2xl"}
          >
            <Text
              bgGradient="linear(to-r, #805AD5, #FF0080)"
              bgClip="text"
              fontSize="6xl"
              fontWeight="extrabold"
            >
              Decentralized Captcha{" "}
            </Text>{" "}
            for the masses.
          </Heading>
          <Stack spacing={5}>
            <Text color={"white"} fontSize={{ md: "2xl" }} maxW={"2xl"}>
              The world's first captcha service powered by the people 🔥
            </Text>
            <HStack>
              <Text color={"white"} fontSize={{ md: "2xl" }} maxW={"2xl"}>
                Powered by
              </Text>
              <SolanaLogo />
            </HStack>
          </Stack>

          <Stack spacing={3}>
            {/* <CanvasContainer>
            <Canvas>
              <Suspense fallback={null}>
                <Earth />
              </Suspense>
            </Canvas>
          </CanvasContainer> */}
            <Integration />
          </Stack>
          {/* <Stack direction={{ base: "column", sm: "row" }} spacing={8}>
            <WalletMultiButton />
            <Button
              data-splitbee-event={SPLITBEE_HERO_SUGGEST_TEMPLATE}
              as={"a"}
              href={SUGGEST_TEMPLATE_LINK}
              colorScheme={"purple"}
              variant={"ghost"}
              size={"lg"}
              fontSize={"md"}
              rounded={"md"}
              bg={"transparent"}
              color={useColorModeValue("gray.500", "gray.300")}
              _hover={{
                bg: useColorModeValue("blackAlpha.200", "blackAlpha.600"),
                color: useColorModeValue("gray.600", "gray.100"),
              }}
            >
              Documentation
            </Button>
          </Stack> */}
        </Stack>
        <HeroComponents />
      </Stack>
    </Box>
  );
};
