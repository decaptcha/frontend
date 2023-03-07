import {
  Card,
  CardBody,
  Box,
  Container,
  Heading,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
  Spacer,
  Text,
} from "@chakra-ui/react";

import { useScrollSpy } from "hooks/use-scrollspy";

import { NextPage } from "next";
import siteConfig from "data/config";

const Developer: NextPage = () => {
  const activeId = useScrollSpy(
    siteConfig.dashboard.links
      .filter(({ id }) => id)
      .map(({ id }) => `[id="${id}"]`),
    {
      threshold: 0.75,
    }
  );
  return (
    <Box>
      <Box height={"20"} />
      <Container maxW="container.2xl" px="8" py="8">
        <Heading as="h1">Developer</Heading>
        <Box pt="4">
          <SimpleGrid columns={3} gap="2">
            <Card>
              <CardBody>
                <Text>Shadow (default)</Text>
              </CardBody>
            </Card>
            <Card variant="outline">
              <CardBody>
                <Text>Outline</Text>
              </CardBody>
            </Card>
            <Card variant="solid">
              <CardBody>
                <Text>Solid</Text>
              </CardBody>
            </Card>
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
};

export default Developer;
