import {
  Flex,
  Stack,
  Button,
  Box,
  Tag,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
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
  Text,
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
  const {
    isOpen: isUploadOpne,
    onOpen: onUploadOpen,
    onClose: onUploadClose,
  } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);
  const uploadBtnRef = useRef<HTMLButtonElement>(null);
  const projects = useProjectsStore((data: any) => data.projects);
  const setProjects = useProjectsStore((data: any) => data.setProjects);
  const setName = useProjectsStore((data: any) => data.setName);
  const setLabel = useProjectsStore((data: any) => data.setLabel);
  const setThreshold = useProjectsStore((data: any) => data.setThreshold);
  const setExpiry = useProjectsStore((data: any) => data.setExpiry);
  const name = useProjectsStore((data: any) => data.name);
  const label = useProjectsStore((data: any) => data.label);
  const threshold = useProjectsStore((data: any) => data.threshold);
  const expiry = useProjectsStore((data: any) => data.expiry);
  const wallet = useWallet();

  const uploadImages = () => {
    console.log("uploadImages");
  };

  const createNewProject = () => {
    if (wallet.publicKey) {
      console.log("wallet", wallet.publicKey.toBase58());
      const postNewProject = async (postData: any) => {
        console.log("postData", postData);
        const resp = await createProjectApi(postData);
        console.log(resp);
        onClose();
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
  const handleThreshold = (e: any) => {
    setThreshold(e?.target?.value);
  };
  const handleName = (e: any) => {
    setName(e.target?.value);
  };
  const handleExpiry = (e: any) => {
    setExpiry(e.target?.value);
  };

  const handleLabel = (e: any) => {
    setLabel(e.target.value);
  };
  useEffect(() => {
    if (wallet.publicKey) {
      console.log("wallet", wallet.publicKey.toBase58());
      const getProjectsFromApi = async () => {
        const data = await fetchProjects({
          walletId: wallet?.publicKey?.toBase58(),
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
                    projects.map((project: any) => {
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
                            <Button
                              variant="outline"
                              ref={uploadBtnRef}
                              onClick={onUploadOpen}
                            >
                              Upload
                            </Button>
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
              <Button
                variant="primary"
                mr={3}
                onClick={onUploadClose}
                key="cancel"
              >
                Cancel
              </Button>
              <Button onClick={uploadImages} key="submit">
                Submit
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
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
              <Card>
                <CardHeader>
                  <Heading fontSize="xl">Labeled Dataset</Heading>
                </CardHeader>
                <CardBody>
                  <Text>Upload your labeled dataset.</Text>
                </CardBody>
                <CardFooter>
                  <Button variant="solid" colorScheme="gray">
                    Upload
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <Heading fontSize="xl">Unlabeled Dataset</Heading>
                </CardHeader>
                <CardBody>
                  <Text>Upload your unlabeled dataset.</Text>
                </CardBody>
                <CardFooter>
                  <Button variant="solid" colorScheme="gray">
                    Upload
                  </Button>
                </CardFooter>
              </Card>
            </DrawerBody>

            <DrawerFooter>
              <Button variant="primary" mr={3} onClick={onClose} key="cancel">
                Cancel
              </Button>
              <Button onClick={createNewProject} key="submit">
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
