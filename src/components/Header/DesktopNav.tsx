import {
  Stack,
  Box,
  BoxProps,
  Popover,
  PopoverTrigger,
  Link,
  useColorModeValue,
  PopoverContent,
  Text,
  Flex,
  Icon,
  useToast,
  Button,
} from "@chakra-ui/react";
import NextLink from "next/link";

import { NAV_ITEMS, NavItem } from "@/components/Header/navData";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { FaConnectdevelop, FaUserAstronaut } from "react-icons/fa";
import { useRouter } from "next/router";
import { useWallet } from "@solana/wallet-adapter-react";

export const DesktopNav = (props: BoxProps) => {
  const { asPath } = useRouter();

  const activeBg = useColorModeValue("purple.50", "purple.900");
  const toast = useToast();
  const wallet = useWallet();

  return (
    <Stack direction={"row"} spacing={4} {...props}>
      {NAV_ITEMS.map((navItem) => {
        const isActive = asPath === navItem.href;
        return (
          <Box key={navItem.label}>
            {navItem.label == "Open dApp" && !wallet?.publicKey ? (
              <Link
              // bg="linear(to-r, #805AD5, #FF0080)"
              p={2}
              paddingLeft={5}
              paddingRight={5}
              borderRadius="30px"
              borderColor={"white"}
              border={"1px"}
              fontSize={"m"}
              fontWeight={"bold"}
              color={useColorModeValue("white.50", "white.400")}
              onClick={() =>
                toast({
                  title: 'Connect Wallet.',
                  description: "Please connect a wallet first.",
                  position: "top-right",
                  status: 'error',
                  duration: 5000,
                  isClosable: true,
                })
              }
              _hover={{
                textDecoration: "none",
                bgGradient: "linear(to-r, #805AD5, #FF0080)",
              }}
            >Open dApp</Link>
            ) : (
              <NextLink href={navItem.href ?? "#"} passHref={navItem.passHref}>
                <Link
                  // bg="linear(to-r, #805AD5, #FF0080)"
                  p={2}
                  paddingLeft={5}
                  paddingRight={5}
                  borderRadius="30px"
                  borderColor={"white"}
                  border={"1px"}
                  fontSize={"m"}
                  fontWeight={"bold"}
                  color={useColorModeValue("white.50", "white.400")}
                  _hover={{
                    textDecoration: "none",
                    bgGradient: "linear(to-r, #805AD5, #FF0080)",
                  }}
                >
                  {navItem.label}
                </Link>
              </NextLink>
            )}
          </Box>
        );
      })}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <NextLink href={href!} passHref={true}>
      <Link
        role={"group"}
        display={"block"}
        p={2}
        rounded={"md"}
        _hover={{ bg: useColorModeValue("purple.50", "gray.900") }}
      >
        <Stack direction={"row"} align={"center"}>
          <Flex margin={"2"}>
            <Icon
              transition={"all .3s ease"}
              _groupHover={{ color: "purple.400" }}
              color={"white.400"}
              w={6}
              h={6}
              as={label === "Developer" ? FaConnectdevelop : FaUserAstronaut}
            />
          </Flex>
          )
          <Box>
            <Text
              transition={"all .3s ease"}
              _groupHover={{ color: "purple.400" }}
              fontWeight={500}
            >
              {label}
            </Text>
            <Text fontSize={"sm"}>{subLabel}</Text>
          </Box>
          <Flex
            transition={"all .3s ease"}
            transform={"translateX(-10px)"}
            opacity={0}
            _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
            justify={"flex-end"}
            align={"center"}
            flex={1}
          >
            <Icon color={"purple.400"} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    </NextLink>
  );
};
