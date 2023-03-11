import {
  Stack,
  Button,
  Tag,
  Card,
  CardHeader,
  CardBody,
  useColorModeValue,
  CardFooter,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  FormControl,
  FormLabel,
  Switch,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  DrawerCloseButton,
  Input,
  Textarea,
  ModalHeader,
  ModalCloseButton,
  DrawerFooter,
  ModalFooter,
} from "@chakra-ui/react";
import {
  Box,
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
  Select,
  TableContainer,
  Image,
  Text,
  HStack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

import { FaEdit, FaPlus, FaRocket } from "react-icons/fa";
import { useEffect, useState, useRef } from "react";
import { fetchProject, fetchProjects, updateProjectApi } from "api/backend";

import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import useProjectsStore from "stores/useProjectsStore";
import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";

const researcher = () => {
  const {
    isOpen: isActiveOpen,
    onOpen: onActiveOpen,
    onClose: onActiveClose,
  } = useDisclosure();
  const disclosure = useDisclosure();
  const datasetDisclosure = useDisclosure();
  const project = useProjectsStore((data: any) => data.project);
  const projects = useProjectsStore((data: any) => data.projects);
  const setProjects = useProjectsStore((data: any) => data.setProjects);
  const setProject = useProjectsStore((data: any) => data.setProject);
  const name = useProjectsStore((data: any) => data.name);
  const label = useProjectsStore((data: any) => data.label);
  const threshold = useProjectsStore((data: any) => data.threshold);
  const description = useProjectsStore((data: any) => data.description);
  const active = useProjectsStore((data: any) => data.active);
  const setName = useProjectsStore((data: any) => data.setName);
  const setLabel = useProjectsStore((data: any) => data.setLabel);
  const setThreshold = useProjectsStore((data: any) => data.setThreshold);
  const setDescription = useProjectsStore((data: any) => data.setDescription);
  const setActive = useProjectsStore((data: any) => data.setActive);

  const startProject = (project: any) => {
    onActiveOpen();
  };

  const confirmStartProject = (project: any) => {
    const callUpdateProjectApi = async () => {
      const resp = await updateProjectApi({
        project: {
          wallet_id: wallet?.publicKey?.toBase58(),
          id: project?.id,
          name: project?.name,
          label_value: project?.label_value,
          threshold: project?.threshold,
          description: project?.description,
          active: true,
        },
      });
      console.log("Update Project Resp", resp);
    };
    callUpdateProjectApi();
    onActiveClose();
  };

  const wallet = useWallet();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  const editProject = (project: any) => {
    console.log("Project", project);
    setProject(project);

    setThreshold(project.threshold);
    setName(project.name);
    setLabel(project.label_value);
    setDescription(project.description);
    setActive(project.active);
    onOpen();
  };
  const handleThreshold = (e: any) => {
    setThreshold(e?.target?.value);
  };
  const handleName = (e: any) => {
    setName(e?.target?.value);
  };
  const handleDescription = (e: any) => {
    setDescription(e.target?.value);
  };
  const handleLabel = (e: any) => {
    setLabel(e.target.value);
  };

  const updateProjectStatus = () => {
    console.log("updateProject");
    const callUpdateProjectApi = async () => {
      const resp = await updateProjectApi({
        project: {
          wallet_id: wallet?.publicKey?.toBase58(),
          active: project?.active,
          id: project?.id,
          name: name,
          label_value: label,
          threshold: threshold,
          description: description,
        },
      });
      console.log("Update Project Resp", resp);
    };
    callUpdateProjectApi();
    onClose();
  };

  useEffect(() => {
    if (wallet.publicKey) {
      console.log("wallet", wallet.publicKey.toBase58());
      const getProjectsFromApi = async () => {
        const data = await fetchProjects<Response>({
          walletId: wallet?.publicKey?.toBase58(),
        });
        setProjects(data["projects"]);
      };
      getProjectsFromApi();
    }
  }, []);
  const getProjectInformation = async (e: any) => {
    console.log("Select", e.target.value);
    const data = await fetchProject({
      walletId: wallet?.publicKey?.toBase58(),
      projectId: e.target.value,
    });
    console.log("asdmaksd", data["project"]);
    setProject(data["project"]);
  };
  return (
    <Box minH="100vh">
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
            <Stack mb={"8px"}>
              <Flex justifyContent={"space-between"}>
                <Heading
                  size={"xl"}
                  bgGradient="linear(to-r, #805AD5, #FF0080)"
                  bgClip="text"
                >
                  Datasets
                </Heading>
              </Flex>
            </Stack>
            <Stack mt={"4px"}>
              <Flex justifyContent={"space-between"}>
                <Select
                  placeholder="Select Project to view dataset"
                  onChange={getProjectInformation}
                >
                  {wallet &&
                    projects &&
                    projects.map((project: any) => {
                      return (
                        <option value={project?.id}>{project?.name}</option>
                      );
                    })}
                </Select>
              </Flex>
            </Stack>
            {project && (
              <Stack direction="row">
                <Card
                  direction={{ base: "column", sm: "row" }}
                  overflow="hidden"
                  variant="elevated"
                  width={"full"}
                >
                  <Image
                    w={128}
                    h={128}
                    src={project?.labelled_images?.[0]?.url}
                    alt={project?.label_value}
                    borderRadius={"4px"}
                  />

                  <Stack width={"full"}>
                    <CardHeader>
                      <Flex justifyContent={"space-between"}>
                        <Heading fontSize="xl">{project.name}</Heading>
                        <Tag
                          colorScheme={
                            project.active && !project.is_completed
                              ? `yellow`
                              : !project.active && !project.is_completed
                              ? `red`
                              : `green`
                          }
                        >
                          {project.active && !project.is_completed
                            ? `Ongoing`
                            : !project.active && !project.is_completed
                            ? `Not Started`
                            : `Completed`}
                        </Tag>
                      </Flex>
                    </CardHeader>

                    <CardBody>
                      {project?.description && (
                        <Text>{project?.description}</Text>
                      )}
                      {project?.threshold && (
                        <Tag colorScheme={`purple`} borderRadius={25}>
                          Threshold : {project?.threshold}%
                        </Tag>
                      )}
                      {project?.expiry && (
                        <Tag colorScheme={`purple`} borderRadius={25}>
                          {project?.expiry} in Days
                        </Tag>
                      )}
                    </CardBody>
                    <CardFooter>
                      <Button
                        variant={"outline"}
                        leftIcon={<FaEdit />}
                        onClick={() => editProject(project)}
                      >
                        Edit
                      </Button>
                      {project?.active === false && (
                        <Button
                          variant={"outline"}
                          leftIcon={<FaRocket />}
                          onClick={() => startProject(project)}
                        >
                          Start Project
                        </Button>
                      )}
                    </CardFooter>
                  </Stack>
                </Card>
              </Stack>
            )}
            {project && (
              <Box m={4}>
                <Tabs size="md" variant="soft-rounded" colorScheme={"purple"}>
                  <TabList>
                    <Tab>Labelled Dataset</Tab>
                    <Tab>Unlabelled Dataset</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <TableContainer>
                        <Table variant="simple">
                          <Thead>
                            <Tr>
                              <Th>Label name</Th>
                              <Th>Clicks</Th>
                              <Th>Shown to Users</Th>
                            </Tr>
                          </Thead>
                          <Tbody>
                            {wallet &&
                              project &&
                              project?.["labelled_images"]?.map(
                                (label: any) => {
                                  return (
                                    <Tr key={label?.id}>
                                      <Td>
                                        <Flex
                                          alignItems="center"
                                          py=".8rem"
                                          minWidth="100%"
                                          flexWrap="nowrap"
                                        >
                                          <Image
                                            h={"64px"}
                                            w={"64px"}
                                            me="18px"
                                            key={label?.id}
                                            src={label?.url}
                                            alt={label?.name}
                                            fallbackSrc="https://via.placeholder.com/150"
                                            borderRadius={"4px"}
                                          />
                                          {label?.name}
                                        </Flex>
                                      </Td>
                                      <Td>{label?.clicks}</Td>
                                      <Td>{label?.["shown_to_users"]}</Td>
                                    </Tr>
                                  );
                                }
                              )}
                          </Tbody>
                          <Tfoot>
                            <Tr>
                              <Th>Label name</Th>
                              <Th>Clicks</Th>
                              <Th>Shown to Users</Th>
                            </Tr>
                          </Tfoot>
                        </Table>
                      </TableContainer>
                    </TabPanel>
                    <TabPanel>
                      <TableContainer>
                        <Table variant="simple">
                          <Thead>
                            <Tr>
                              <Th>Label name</Th>
                              <Th>Clicks</Th>
                              <Th>Shown to Users</Th>
                              <Th>Confidence</Th>
                            </Tr>
                          </Thead>
                          <Tbody>
                            {wallet &&
                              project &&
                              project["unlabelled_images"]?.map(
                                (label: any) => {
                                  const borderColor = useColorModeValue(
                                    "gray.200",
                                    "gray.600"
                                  );
                                  return (
                                    <Tr key={label.id}>
                                      <Td
                                        minWidth={{ sm: "250px" }}
                                        pl="0px"
                                        borderColor={borderColor}
                                      >
                                        <Flex
                                          alignItems="center"
                                          py=".8rem"
                                          minWidth="100%"
                                          flexWrap="nowrap"
                                        >
                                          <Image
                                            h={"128px"}
                                            w={"128px"}
                                            me={"18px"}
                                            key={label.id}
                                            src={label.url}
                                            alt={label.name}
                                            borderRadius="4px"
                                            fallbackSrc="https://via.placeholder.com/150"
                                          />
                                          <Text
                                            fontSize="md"
                                            fontWeight="bold"
                                            minWidth="100%"
                                          >
                                            {label.name}
                                          </Text>
                                        </Flex>
                                      </Td>
                                      <Td>{label.clicks}</Td>
                                      <Td>{label["shown_to_users"]}</Td>
                                      <Td>{label["image_confidence"]}%</Td>
                                    </Tr>
                                  );
                                }
                              )}
                          </Tbody>
                          <Tfoot>
                            <Tr>
                              <Th>Label name</Th>
                              <Th>Clicks</Th>
                              <Th>Shown to Users</Th>
                              <Th>Confidence</Th>
                            </Tr>
                          </Tfoot>
                        </Table>
                      </TableContainer>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Box>
            )}
          </Flex>
        </Stack>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay bg="none" backdropFilter="auto" backdropBlur="2px" />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Edit project</DrawerHeader>

            <DrawerBody>
              <Box pt={4}>
                <Input
                  placeholder="Project name"
                  onChange={handleName}
                  value={name}
                />
              </Box>
              <Box pt={4}>
                <Input
                  placeholder="Label name eg: bus, car..."
                  onChange={handleLabel}
                  value={label}
                />
              </Box>
              <Box pt={4}>
                <Input
                  placeholder="Threshold"
                  onChange={handleThreshold}
                  value={threshold}
                  min={0}
                  max={100}
                  type={"number"}
                />
              </Box>
              <Box pt={4}>
                <Textarea
                  placeholder="Anything you want to add about project..."
                  borderColor={"secondary.700"}
                  onChange={handleDescription}
                  value={description}
                />
              </Box>
            </DrawerBody>

            <DrawerFooter>
              <Button variant="primary" mr={3} onClick={onClose} key="cancel">
                Cancel
              </Button>
              <Button onClick={updateProjectStatus} key="submit">
                Submit
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>

        <Modal isOpen={isActiveOpen} onClose={onActiveClose}>
          <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="2px" />
          <ModalContent>
            <ModalHeader>Do you want to start project ? 🚀</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>
                Number of unlabelled images:{" "}
                {project?.unlabelled_images?.length}
              </Text>
              <Text>
                Number of token: {10 * project?.unlabelled_images?.length}
              </Text>
              <Text>
                Total Amount: {0.1 * 10 * project?.unlabelled_images?.length}
              </Text>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onActiveClose}>
                Cancel
              </Button>
              <Button
                variant="ghost"
                onClick={() => confirmStartProject(project)}
              >
                OK
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Container>
      <SEO />
    </Box>
  );
};

export default researcher;
