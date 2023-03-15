import { AccountLayout, getMint, TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";
import {
  Box,
  Container,
  Heading,
  Stack,
  Flex,
  CardHeader,
  CardBody,
  Card,
  Text,
  HStack,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  useColorModeValue,
} from "@chakra-ui/react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import useDeveloperApiStore from "stores/useDeveloperApiStore";
import { useEffect } from "react";
import { fetchApiKey } from "api/backend";
import { Navigation } from "@/components/Navigation";
import { a11yDark, CodeBlock, dracula } from "react-code-blocks";

const developer = () => {
  const apiKey = useDeveloperApiStore((data: any) => data.api_key);
  const setApiKey = useDeveloperApiStore((data: any) => data.setApiKey);
  const walletInfo = useDeveloperApiStore((data: any) => data.walletInfo);
  const setWalletInfo = useDeveloperApiStore((data: any) => data.setWalletInfo);
  const wallet = useWallet();
  const { connection } = useConnection();

  const getTokenFromWallet: any = async (publicKey: any) => {
    const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
    const tokenAccounts = await connection.getTokenAccountsByOwner(
      new PublicKey(publicKey),
      {
        programId: TOKEN_PROGRAM_ID,
      }
    );
    const accountValues = [];
    for (const tokenAccount of tokenAccounts.value) {
      const accountData = AccountLayout.decode(tokenAccount.account.data);
      const mint = await getMint(connection, accountData.mint);
      
        accountValues.push({
          mintAddress: accountData?.mint?.toString(),
          amount: accountData?.amount?.toString(),
          totalSupply: mint?.supply?.toString(),
          decimals: mint?.decimals?.toString(),
        });
    
    return accountValues;
  };

  // const getWalletInfo = (publicKey: string) => {
  //   const
  //   return data;
  // };

  useEffect(() => {
    if (wallet.publicKey) {
      getTokenFromWallet(wallet.publicKey.toString())
        .then((res: any) => {
          setWalletInfo(res);
        })
        .catch((err: any) => {
          console.log(err);
        });
    }
  }, [wallet, connection, getTokenFromWallet]);

  useEffect(() => {
    if (wallet.publicKey) {
      console.log("wallet", wallet.publicKey.toBase58());
      const getApiKey = async () => {
        const data = await fetchApiKey({
          walletId: wallet.publicKey?.toBase58(),
        });
        setApiKey(data["api_key"]);
        console.log(apiKey);
      };
      getApiKey();
    }
  }, [wallet, connection]);

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
            <Stack mb={10}>
              <Flex justifyContent={"space-between"}>
                <Heading
                  size={"xl"}
                  bgGradient="linear(to-r, #805AD5, #FF0080)"
                  bgClip="text"
                >
                  Developer
                </Heading>
              </Flex>

              <Stack mb={"24px"}>
                {wallet && wallet.publicKey && apiKey && (
                  <Card bg={"purple.900"}>
                    <CardHeader>
                      <Text fontSize="2xl" fontWeight={"bold"}>
                        Account Information
                      </Text>
                    </CardHeader>
                    <CardBody>
                      <Box>
                        <Stack spacing={4}>
                          {apiKey?.["api_key"] && (
                            <HStack>
                              <Text fontSize={"medium"}> API Key : </Text>
                              <CodeBlock
                                text={apiKey ? apiKey?.["api_key"] : ""}
                                variant="solid"
                                theme={dracula}
                                showLineNumbers={false}
                              />
                            </HStack>
                          )}

                          <HStack>
                            <Text fontSize={"medium"}> API Key Status : </Text>
                            <CodeBlock
                              text={apiKey?.["active"] ? "Active" : "Inactive"}
                              variant="solid"
                              showLineNumbers={false}
                              theme={dracula}
                            />
                          </HStack>
                        </Stack>
                      </Box>
                    </CardBody>
                  </Card>
                )}
              </Stack>
              <Stack mb={"24px"}>
                <Card bg={"purple.900"}>
                  <CardHeader>
                    <Text fontSize="2xl" fontWeight={"bold"}>
                      Your Holdings
                    </Text>
                  </CardHeader>
                  <CardBody>
                    <TableContainer bg={"purple.900"}>
                      <Table variant="simple">
                        <Thead>
                          <Tr>
                            <Th>Mint Address</Th>
                            <Th>Amount</Th>
                            <Th>Total Supply</Th>
                            <Th>Decimals</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          {wallet &&
                            wallet.publicKey &&
                            walletInfo &&
                            walletInfo.map((label: any) => {
                              const borderColor = useColorModeValue(
                                "gray.200",
                                "gray.600"
                              );
                              return (
                                <Tr key={label.mintAddress}>
                                  <Td>{label.mintAddress}</Td>
                                  <Td>
                                    {label.amount /
                                      Math.pow(10, label.decimals)}
                                  </Td>
                                  <Td>
                                    {label.totalSupply /
                                      Math.pow(10, label.decimals)}
                                  </Td>
                                  <Td>{label.decimals}</Td>
                                </Tr>
                              );
                            })}
                        </Tbody>
                      </Table>
                    </TableContainer>
                  </CardBody>
                </Card>
              </Stack>
            </Stack>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
};

export default developer;
