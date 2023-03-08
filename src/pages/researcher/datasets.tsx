import { Stack, Button } from "@chakra-ui/react";
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

function Feature({ title, desc, ...rest }) {
  return (
    <Box p={5} shadow="md" borderWidth="1px" {...rest}>
      <Heading fontSize="xl">{title}</Heading>
      <Text mt={4}>{desc}</Text>
    </Box>
  );
}

const researcher = () => {
  const disclosure = useDisclosure();
  const datasetDisclosure = useDisclosure();
  const project = useProjectsStore((data) => data.project);
  const projects = useProjectsStore((data) => data.projects);
  const setProjects = useProjectsStore((data) => data.setProjects);
  const setProject = useProjectsStore((data) => data.setProject);
  const wallet = useWallet();

  useEffect(() => {
    if (wallet.publicKey) {
      console.log("wallet", wallet.publicKey.toBase58());
      const getProjectsFromApi = async () => {
        const data = await fetchProjects<Response>({
          walletId: wallet.publicKey.toBase58(),
        });
        setProjects(data["projects"]);
      };
      getProjectsFromApi();
    }
  }, []);
  const getProjectInformation = async (e) => {
    console.log("Select", e.target.value);
    const data = await fetchProject({
      walletId: wallet.publicKey.toBase58(),
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
                    projects.map((project) => {
                      return <option value={project.id}>{project.name}</option>;
                    })}
                </Select>
              </Flex>
            </Stack>
            <Stack spacing={8} direction="row">
              <Feature
                title={project.name}
                desc={project.active ? `Active` : `Inactive`}
              />
            </Stack>
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
                            project["labelled_images"].map((label) => {
                              return (
                                <Tr key={label.id}>
                                  <Td>{label.name}</Td>
                                  <Td>{label.clicks}</Td>
                                  <Td>{label["shown_to_users"]}</Td>
                                  <Td>
                                    {label.active ? `Active` : `Inactive`}
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
                            project["unlabelled_images"].map((label) => {
                              return (
                                <Tr key={label.id}>
                                  <Td>{label.name}</Td>
                                  <Td>{label.clicks}</Td>
                                  <Td>{label["shown_to_users"]}</Td>
                                  <Td>
                                    {label.active ? `Active` : `Inactive`}
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
