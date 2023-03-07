import { AppShell } from "@saas-ui/app-shell";
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from '@chakra-ui/react'
import {
  Avatar,
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
  Spacer,
  Tag,
  Text,
  useDisclosure,
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
  FormDialog,
  FormLayout,
  Field,
} from "@saas-ui/react";
import {
  List,
  ListHeader,
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemLabel,
  ListItemTertiary,
  ListItemAction,
} from "@saas-ui/react";

import { useScrollSpy } from "hooks/use-scrollspy";

import { NextPage } from "next";
import siteConfig from "data/config";
import { FiArrowRight, FiSettings } from "react-icons/fi";
import { IconBase } from "react-icons";

const Developer: NextPage = () => {
  const activeId = useScrollSpy(
    siteConfig.dashboard.links
      .filter(({ id }) => id)
      .map(({ id }) => `[id="${id}"]`),
    {
      threshold: 0.75,
    }
  );
  const disclosure = useDisclosure();
  const datasetDisclosure = useDisclosure();

  const onSubmit = async (data) => {
    disclosure.onClose();
  };
  return (
    <Box>
      <Box height={"20"} />
      <Container maxW="container.2xl" px="8" py="8">
        <Heading as="h1">Researcher</Heading>
        <Box pt="4">
          <Card>
            <CardHeader>
              <Flex width="full" align="center" justify="space-between">
                <CardTitle fontSize="xl">List of Projects</CardTitle>
                <Button variant="primary" onClick={() => disclosure.onOpen()}>
                  {" "}
                  Create New Project{" "}
                </Button>
                <FormDialog
                  title="Create New Project"
                  defaultValues={{ title: "" }}
                  {...disclosure}
                  onSubmit={onSubmit}
                >
                  <FormLayout>
                    <Field
                      name="name"
                      label="Name"
                      type="text"
                      rules={{ required: "Name is required" }}
                      autoFocus
                    />
                    <Field
                      name="corpusSize"
                      label="Corpus Size"
                      type="number"
                      rules={{ required: "Corpus Size is required" }}
                    />
                    <Field
                      name="labelName"
                      label="Label Name"
                      type="text"
                      rules={{ required: "Label Name is required" }}
                    />

                    <Field
                      name="threshold"
                      label="Threshold"
                      type="number"
                      rules={{ required: "Label Name is required" }}
                    />
                    <Field
                      name="duration"
                      label="Expiry in Days"
                      type="number"
                      rules={{ required: "Expiry is required" }}
                    />
                    <Field
                      name="description"
                      type="textarea"
                      label="Description"
                    />
                  </FormLayout>
                </FormDialog>
              </Flex>
            </CardHeader>
            <CardBody>
              <List
                items={[
                  {
                    onClick: () => datasetDisclosure.onOpen(),
                    href: "#",
                    primary: "Research dataset of Mercedes",
                    secondary: "Cars",
                    tertiary: <Tag color="green.300">Active</Tag>,
                    action: (
                      <Icon
                        as={FiArrowRight}
                        sx={{
                          transitionProperty: "common",
                          transitionDuration: "normal",
                          ".chakra-button:hover &": {
                            transform: "translate(5px)",
                          },
                        }}
                      />
                    ),
                  },
                  {
                    href: "#",
                    primary: "Dataset of ChatGPT",
                    secondary: "Bus",
                    tertiary: <Tag color="green.300">Active</Tag>,
                    action: (
                      <Icon
                        as={FiArrowRight}
                        sx={{
                          transitionProperty: "common",
                          transitionDuration: "normal",
                          ".chakra-button:hover &": {
                            transform: "translate(5px)",
                          },
                        }}
                      />
                    ),
                  },
                ]}
              />
            </CardBody>
          </Card>
          <FormDialog
            title="Submit your dataset"
            defaultValues={{ title: "" }}
            {...datasetDisclosure}
            onSubmit={onSubmit}
          >
            <FormLayout>
              <SimpleGrid columns={2} gap="2">
                <Card>
                  <CardHeader>
                    <CardTitle fontSize="xl">Labeled Dataset</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Text fontSize="md">Upload your labeled dataset.</Text>
                  </CardBody>
                  <CardFooter>
                    <Button variant="solid" colorScheme="gray">
                      Upload
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle fontSize="xl">Unlabeled Dataset</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Text fontSize="md">Upload your unlabeled dataset.</Text>
                  </CardBody>
                  <CardFooter>
                    <Button variant="solid" colorScheme="gray">
                      Upload
                    </Button>
                  </CardFooter>
                </Card>
              </SimpleGrid>
            </FormLayout>
          </FormDialog>
          <Stat>
            <StatLabel>Collected Fees</StatLabel>
            <StatNumber>£0.00</StatNumber>
            <StatHelpText>Feb 12 - Feb 28</StatHelpText>
          </Stat>
        </Box>
      </Container>
    </Box>
  );
};

export default Developer;
