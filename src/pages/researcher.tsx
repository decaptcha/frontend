import { Stack, Button } from "@chakra-ui/react";
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
} from "@chakra-ui/react";

import { FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
import { fetchProjects } from "api/backend";

import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import useProjectsStore from "stores/useProjectsStore";
import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";

const researcher = () => {
  const disclosure = useDisclosure();
  const datasetDisclosure = useDisclosure();
  const projects = useProjectsStore((data) => data.projects);
  const setProjects = useProjectsStore((data) => data.setProjects);
  const wallet = useWallet();

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
                <Heading size={"xl"}>Researcher</Heading>
                <Button leftIcon={<FaPlus />}>Create New Project</Button>
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
                          <Td>{project.active ? `Active` : `Inactive`}</Td>
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
      </Container>
      <SEO />
    </>
  );
};

export default researcher;
