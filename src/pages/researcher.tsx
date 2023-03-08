import { Stack, Button, Box, Tag } from "@chakra-ui/react";
import {
  Flex,
  Heading,
  useDisclosure,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Container,
  Tr,
  Th,
  Td,
  TableContainer,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
} from "@chakra-ui/react";

import { FaPlus } from "react-icons/fa";
import { useEffect, useRef } from "react";
import { createProjectApi, fetchProjects } from "api/backend";

import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import useProjectsStore from "stores/useProjectsStore";
import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";

const researcher = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const projects = useProjectsStore((data) => data.projects);
  const setProjects = useProjectsStore((data) => data.setProjects);
  const setName = useProjectsStore((data) => data.setName);
  const setLabel = useProjectsStore((data) => data.setLabel);
  const setThreshold = useProjectsStore((data) => data.setThreshold);
  const setExpiry = useProjectsStore((data) => data.setExpiry);
  const name = useProjectsStore((data) => data.name);
  const label = useProjectsStore((data) => data.label);
  const threshold = useProjectsStore((data) => data.threshold);
  const expiry = useProjectsStore((data) => data.expiry);
  const wallet = useWallet();

  const createNewProject = () => {
    if (wallet.publicKey) {
      console.log("wallet", wallet.publicKey.toBase58());
      const postNewProject = async (postData: any) => {
        console.log("postData", postData);
        const resp = await createProjectApi(postData);
        console.log(resp);
      };
      postNewProject({
        project: {
          wallet_id: wallet.publicKey.toBase58(),
          expiry: expiry,
          label_value: label,
          threshold: threshold,
          name: name,
        },
      });
    }
  };
  const handleThreshold = (e) => {
    setThreshold(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleExpiry = (e) => {
    setExpiry(e.target.value);
  };

  const handleLabel = (e) => {
    setLabel(e.target.value);
  };
  useEffect(() => {
    if (wallet.publicKey) {
      console.log("wallet", wallet.publicKey.toBase58());
      const getProjectsFromApi = async () => {
        const data = await fetchProjects({
          walletId: wallet.publicKey.toBase58(),
        });
        setProjects(data["projects"]);
      };
      getProjectsFromApi();
    }
  }, []);
  return (
    <>
      <SEO />
      <Container maxW={"7xl"} flex={"1 0 auto"} py={8} mt={20}>
        <Stack
          direction={{ base: "column", lg: "row" }}
          spacing={{ base: 0, lg: 8 }}
        >
          <Navigation display={{ base: "none", lg: "block" }} />
          <Flex
            direction={"column"}
            w={"full"}
            maxW={{ lg: "calc(100% - 16rem)" }}
          >
            <Stack mb={10}>
              <Flex justifyContent={"space-between"}>
                <Heading
                  size={"xl"}
                  bgGradient="linear(to-r, #805AD5, #FF0080)"
                  bgClip="text"
                >
                  Researcher
                </Heading>
                <Button
                  leftIcon={<FaPlus />}
                  ref={btnRef}
                  onClick={onOpen}
                  colorScheme={"purple"}
                >
                  Create New Project
                </Button>
              </Flex>
            </Stack>
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Project name</Th>
                    <Th>Threshold</Th>
                    <Th>Status</Th>
                    <Th>Action</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {wallet &&
                    projects.map((project) => {
                      return (
                        <Tr key={project.id}>
                          <Td>{project.name}</Td>
                          <Td>{project.threshold}%</Td>
                          <Td>
                            <Tag colorScheme={project.active ? `green` : `red`}>
                              {project.active ? `Active` : `Inactive`}
                            </Tag>
                          </Td>
                          <Td>
                            <Button variant="outline">Upload</Button>
                          </Td>
                        </Tr>
                      );
                    })}
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th>Project name</Th>
                    <Th>Threshold</Th>
                    <Th>Status</Th>
                    <Th>Action</Th>
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
            {/* <Box pt="4">
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
        </Box> */}
          </Flex>
        </Stack>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create new project</DrawerHeader>

            <DrawerBody>
              <Box pt={4}>
                <Input placeholder="Project name" onChange={handleName} />
              </Box>
              <Box pt={4}>
                <Input
                  placeholder="Label name eg: bus, car..."
                  onChange={handleLabel}
                />
              </Box>
              <Box pt={4}>
                <Input
                  placeholder="Threshold"
                  type={"number"}
                  borderColor={"secondary.700"}
                  onChange={handleThreshold}
                />
              </Box>
              <Box pt={4}>
                <Input
                  placeholder="Expiry of the project"
                  type={"date"}
                  borderColor={"secondary.700"}
                  onChange={handleExpiry}
                />
              </Box>
            </DrawerBody>

            <DrawerFooter>
              <Button variant="primary" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button onClick={createNewProject} onClick={onClose}>
                Submit
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Container>
    </>
  );
};

export default researcher;
