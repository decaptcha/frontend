import { ReactNode } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import {
  Stack,
  StackProps,
  useColorModeValue,
  HStack,
  Box,
} from "@chakra-ui/react";

import { data } from "../data";
import Link from "next/link";

const NavigationLink = ({
  href,
  children,
  asPath,
}: {
  href: string;
  children: ReactNode;
  asPath: string;
}) => {
  const isActive = asPath === href;

  const activeBg = useColorModeValue("purple.50", "purple.900");

  return (
    <Link href={href} passHref>
      <HStack
        as={"a"}
        fontSize={"m"}
        rounded={"md"}
        px={3}
        py={2}
        ml={"-12px!important"}
        bg={isActive ? activeBg : undefined}
        fontWeight={isActive ? 600 : 400}
        color={
          isActive
            ? useColorModeValue("purple.700", "purple.400")
            : useColorModeValue("gray.700", "gray.300")
        }
        _hover={{
          bg: isActive ? activeBg : useColorModeValue("gray.100", "gray.900"),
        }}
      >
        {children}
      </HStack>
    </Link>
  );
};

export const Navigation = (props: StackProps) => {
  const { asPath } = useRouter();
  const categoryColor = useColorModeValue("gray.800", "gray.200");

  return (
    <Stack
      as={"nav"}
      spacing={6}
      maxW={{ md: "3xs" }}
      w={"full"}
      flexShrink={0}
      {...props}
    >
      {data.map((category) => (
        <Stack key={category.label}>
          <Stack spacing={1}>
            <NavigationLink
              asPath={asPath}
              key={category.label}
              href={`${category.href}`}
            >
              <HStack spacing={4}>
                <Box>{category.icon}</Box>
                <Box>{category.label}</Box>
              </HStack>
            </NavigationLink>
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};
