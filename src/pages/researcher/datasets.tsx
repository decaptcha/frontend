import {
  Stack,
  Button,
  Tag,
  Card,
  CardHeader,
  CardBody,
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
                    projects.map((project: any) => {
                      return <option value={project.id}>{project.name}</option>;
                    })}
                </Select>
              </Flex>
            </Stack>
            {project && (
              <Stack spacing={8} direction="row">
                <Card p={2} shadow="md" width={"full"}>
                  <CardHeader>
                    <Flex justifyContent={"space-between"}>
                      <Heading fontSize="xl">{project.name}</Heading>
                      <Tag colorScheme={project.active ? `green` : `red`}>
                        {project.active ? `Active` : `Inactive`}
                      </Tag>
                    </Flex>
                  </CardHeader>
                  <CardBody>
                    <Tag colorScheme={`purple`} m={2} borderRadius={25}>
                      {project.threshold}%
                    </Tag>
                    {project.expiry && (
                      <Tag colorScheme={`purple`} m={2} borderRadius={25}>
                        {project.expiry} in Days
                      </Tag>
                    )}
                  </CardBody>
                </Card>
              </Stack>
            )}

            <Box p={4}>
              <Tabs size="md" variant="soft-rounded" colorScheme={"purple"}>
                <TabList>
                  <Tab>Labled Dataset</Tab>
                  <Tab>Unlabled Dataset</Tab>
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
                            <Th>Image</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          {wallet &&
                            project &&
                            project["labelled_images"].map((label: any) => {
                              return (
                                <Tr key={label.id}>
                                  <Td>{label.name}</Td>
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
                                  <Td>
                                    <Image
                                      boxSize="64px"
                                      key={label.id}
                                      src={label.url}
                                      alt={label.name}
                                      fallbackSrc="https://via.placeholder.com/150"
                                    />
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
                            <Th>Image</Th>
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
                            <Th>Image</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          {wallet &&
                            project &&
                            project["unlabelled_images"].map((label: any) => {
                              return (
                                <Tr key={label.id}>
                                  <Td>{label.name}</Td>
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
                                  <Td>
                                    <Image
                                      boxSize="64px"
                                      key={label.id}
                                      src={label.url}
                                      alt={label.name}
                                      fallbackSrc="https://via.placeholder.com/150"
                                    />
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
                            <Th>Confidence</Th>
                            <Th>Image</Th>
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
