import {
  Flex,
  Heading,
  useDisclosure,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Container,
  Text,
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
  HStack,
  Button,
  Tag,
  Box,
  VStack,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  InputGroup,
  Icon,
  FormControl,
  Alert,
  AlertIcon,
  Spinner,
  AlertDescription,
} from "@chakra-ui/react";

import { useDropzone } from "react-dropzone";

import { FaPlus } from "react-icons/fa";
import { useEffect, useRef, useCallback, useState } from "react";
import { createProjectApi, fetchProjects, uploadImagesApi } from "api/backend";

import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import useProjectsStore from "stores/useProjectsStore";
import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";

const researcher = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isUploadOpen,
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
  const projectId = useProjectsStore((data: any) => data.projectId);
  const setProjectId = useProjectsStore((data: any) => data.setProjectId);
  const wallet = useWallet();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isLoadingL, setIsLoadingL] = useState(false);
  const [isLoadingUL, setIsLoadingUL] = useState(false);
  const [errorL, setErrorL] = useState(null);
  const [errorUL, setErrorUL] = useState(null);
  const [messageL, setMessageL] = useState(null);
  const [messageUL, setMessageUL] = useState(null);

  const onClickOnUpload = (projectId: any) => {
    console.log("setting", projectId);
    setProjectId(projectId);
    onUploadOpen();
  };

  const onDropLabelled = useCallback(
    async (acceptedFiles: any, newProjectId: any) => {
      const files = acceptedFiles;

      if (files.length <= 0) {
        return;
      }

      setIsLoadingL(true);
      setErrorL(null);
      setMessageL(null);

      try {
        const resp = await uploadImagesApi({
          files: files,
          walletId: wallet?.publicKey?.toBase58(),
          projectId: newProjectId,
          labelled: true,
        });
        console.log(resp);
      } catch (e: any) {
        setIsLoadingL(false);
        setErrorL(e.message);
        return;
      }
      setIsLoadingL(false);
      setMessageL("File was uploaded 👍");
    },
    []
  );

  const onDropUnLabelled = useCallback(
    async (acceptedFiles: any, newProjectId: any) => {
      const files = acceptedFiles;

      if (files.length <= 0) {
        return;
      }

      setIsLoadingUL(true);
      setErrorUL(null);
      setMessageUL(null);

      try {
        await uploadImagesApi({
          files: files,
          walletId: wallet?.publicKey?.toBase58(),
          projectId: newProjectId,
          labelled: false,
        });
      } catch (e: any) {
        setIsLoadingUL(false);
        setErrorUL(e.message);
        return;
      }
      setIsLoadingUL(false);
      setMessageUL("File was uploaded 👍");
    },
    []
  );
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
  } = useDropzone({
    onDrop: (files: any) => onDropLabelled(files, projectId),
    accept: {
      "image/*": [".jpeg", ".png"],
    },
  });
  const {
    getRootProps: getURootProps,
    getInputProps: getUInputProps,
    isDragActive: isUDragActive,
    isDragAccept: isUDragAccept,
  } = useDropzone({
    onDrop: (files: any) => onDropUnLabelled(files, projectId),
    accept: {
      "image/*": [".jpeg", ".png"],
    },
  });

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
                <Button leftIcon={<FaPlus />} ref={btnRef} onClick={onOpen}>
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
                              onClick={() => onClickOnUpload(project.id)}
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
              <Button variant="primary" mr={3} onClick={onClose} key="cancel">
                Cancel
              </Button>
              <Button onClick={createNewProject} key="submit">
                Submit
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>

        <Drawer
          isOpen={isUploadOpen}
          placement="right"
          onClose={onUploadClose}
          finalFocusRef={uploadBtnRef}
        >
          <DrawerOverlay />

          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Upload Datasets</DrawerHeader>

            <DrawerBody>
              <VStack spacing="2">
                <Card>
                  <CardHeader>
                    <Heading fontSize="xl">Labeled Dataset</Heading>
                  </CardHeader>
                  <CardBody>
                    <Flex
                      bg={"gray.800"}
                      w={64}
                      h={64}
                      justify="center"
                      align="center"
                      p={50}
                      m={2}
                      borderRadius={5}
                      textAlign="center"
                      {...getRootProps()}
                    >
                      <input {...getInputProps()} />
                      {isLoadingL ? (
                        <Spinner />
                      ) : isDragActive ? (
                        <Text>Drop the files here...</Text>
                      ) : (
                        <Text>
                          Drag 'n' drop some images here, or click to select
                          image
                        </Text>
                      )}
                    </Flex>
                    {(errorL || messageL) && (
                      <Alert
                        status={errorL ? "error" : "success"}
                        w={250}
                        borderRadius={5}
                        m={2}
                      >
                        <AlertIcon />
                        <AlertDescription w={200}>
                          {errorL || messageL}
                        </AlertDescription>
                      </Alert>
                    )}
                  </CardBody>
                </Card>
                <Card>
                  <CardHeader>
                    <Heading fontSize="xl">Unlabeled Dataset</Heading>
                  </CardHeader>
                  <CardBody>
                    <Flex
                      bg={"gray.800"}
                      w={64}
                      h={64}
                      justify="center"
                      align="center"
                      p={50}
                      m={2}
                      borderRadius={5}
                      textAlign="center"
                      {...getURootProps()}
                    >
                      <input {...getUInputProps()} />
                      {isLoadingUL ? (
                        <Spinner />
                      ) : isUDragActive ? (
                        <Text>Drop the files here...</Text>
                      ) : (
                        <Text>
                          Drag 'n' drop some images here, or click to select
                          image
                        </Text>
                      )}
                    </Flex>
                    {(errorUL || messageUL) && (
                      <Alert
                        status={errorUL ? "error" : "success"}
                        w={250}
                        borderRadius={5}
                        m={2}
                      >
                        <AlertIcon />
                        <AlertDescription w={200}>
                          {errorUL || messageUL}
                        </AlertDescription>
                      </Alert>
                    )}
                  </CardBody>
                </Card>
              </VStack>
            </DrawerBody>

            <DrawerFooter>
              <Button variant="primary" mr={3} onClick={onUploadClose} key="cancel">
                Cancel
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Container>
    </>
  );
};

export default researcher;
