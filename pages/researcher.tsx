import { AppShell } from "@saas-ui/app-shell";
import {
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
import {
  Card,
  CardContainer,
  CardHeader,
  CardTitle,
  CardMedia,
  CardBody,
  CardFooter,
  Button,
} from "@saas-ui/react";
import {
  Sidebar,
  SidebarSection,
  SidebarToggleButton,
  SidebarOverlay,
  NavGroup,
  NavItem,
} from "@saas-ui/sidebar";

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
        <Heading as="h1">Researcher</Heading>
        <Box pt="4">
          <SimpleGrid columns={2} gap="2">
            <Card>
              <CardHeader>
                <CardTitle fontSize="xl">Trained Dataset</CardTitle>
              </CardHeader>
              <CardBody>
                <Text fontSize="md">Upload your trained dataset gere</Text>
              </CardBody>
              <CardFooter>
                <Button variant="solid" colorScheme="gray">
                  Upload
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle fontSize="xl">UnTrained Dataset</CardTitle>
              </CardHeader>
              <CardBody>
                <Text fontSize="md">Upload your untrained dataset gere</Text>
              </CardBody>
              <CardFooter>
                <Button variant="solid" colorScheme="gray">
                  Upload
                </Button>
              </CardFooter>
            </Card>
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
};

export default Developer;
