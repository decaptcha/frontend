import {
  Stack,
  Button,
  Tag,
  Card,
  CardHeader,
  CardBody,
  useColorModeValue,
  CardFooter,
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

import { FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
import { fetchProject, fetchProjects } from "api/backend";

import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import useProjectsStore from "stores/useProjectsStore";
import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";

const researcher = () => {
  const disclosure = useDisclosure();
  const datasetDisclosure = useDisclosure();
  const project = useProjectsStore((data: any) => data.project);
  const projects = useProjectsStore((data: any) => data.projects);
  const setProjects = useProjectsStore((data: any) => data.setProjects);
  const setProject = useProjectsStore((data: any) => data.setProject);
  const wallet = useWallet();

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
    <>
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
                  Datasets
                </Heading>
              </Flex>
            </Stack>
            <Stack mb={10}>
              <Flex justifyContent={"space-between"}>
                <Select
                  placeholder="Select Project to view dataset"
                  onChange={getProjectInformation}
                >
                  {wallet &&
                    projects &&
                    projects.map((project: any) => {
                      return <option value={project.id}>{project.name}</option>;
                    })}
                </Select>
              </Flex>
            </Stack>
            {project && (
              <Stack spacing={8} direction="row">
                <Card
                  direction={{ base: "column", sm: "row" }}
                  overflow="hidden"
                  variant="outline"
                >
                  <Image
                    objectFit="cover"
                    maxW={{ base: "100%", sm: "200px" }}
                    src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                    alt="Caffe Latte"
                  />

                  <Stack m={2}>
                    <CardHeader>
                      <Flex justifyContent={"space-between"}>
                        <Heading fontSize="xl">{project.name}</Heading>
                        <Tag colorScheme={project.active ? `green` : `red`}>
                          {project.active ? `Active` : `Inactive`}
                        </Tag>
                      </Flex>
                    </CardHeader>

                    <CardBody>
                      <Text py="2">{project?.description}</Text>
                      <Tag colorScheme={`purple`} m={2} borderRadius={25}>
                        Threshold : {project.threshold}%
                      </Tag>
                      {project.expiry && (
                        <Tag colorScheme={`purple`} m={2} borderRadius={25}>
                          {project.expiry} in Days
                        </Tag>
                      )}
                    </CardBody>
                  </Stack>
                </Card>
              </Stack>
            )}

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
                            <Th>Status</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          {wallet &&
                            project &&
                            project["labelled_images"].map((label: any) => {
                              return (
                                <Tr key={label.id}>
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
                                        key={label.id}
                                        src={label.url}
                                        alt={label.name}
                                        fallbackSrc="https://via.placeholder.com/150"
                                      />
                                      {label.name}
                                    </Flex>
                                  </Td>
                                  <Td>{label.clicks}</Td>
                                  <Td>{label["shown_to_users"]}</Td>
                                  <Td>
                                    <Tag
                                      colorScheme={
                                        project.active ? `green` : `red`
                                      }
                                    >
                                      {project.active ? `Active` : `Inactive`}
                                    </Tag>
                                  </Td>
                                </Tr>
                              );
                            })}
                        </Tbody>
                        <Tfoot>
                          <Tr>
                            <Th>Label name</Th>
                            <Th>Clicks</Th>
                            <Th>Shown to Users</Th>
                            <Th>Status</Th>
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
                            <Th>Status</Th>
                            <Th>Confidence</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          {wallet &&
                            project &&
                            project["unlabelled_images"].map((label: any) => {
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
                                        h={"24px"}
                                        w={"24px"}
                                        me="18px"
                                        key={label.id}
                                        src={label.url}
                                        alt={label.name}
                                        borderRadius="12px"
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
                                  <Td>
                                    <Tag
                                      colorScheme={
                                        project.active ? `green` : `red`
                                      }
                                    >
                                      {project.active ? `Active` : `Inactive`}
                                    </Tag>
                                  </Td>
                                  <Td>{label["image_confidence"]}%</Td>
                                </Tr>
                              );
                            })}
                        </Tbody>
                        <Tfoot>
                          <Tr>
                            <Th>Label name</Th>
                            <Th>Clicks</Th>
                            <Th>Shown to Users</Th>
                            <Th>Status</Th>
                            <Th>Confidence</Th>
                          </Tr>
                        </Tfoot>
                      </Table>
                    </TableContainer>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
          </Flex>
        </Stack>
      </Container>
      <SEO />
    </>
  );
};

export default researcher;
