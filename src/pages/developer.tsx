import { Box, Container, Heading, Stack, Code, Flex } from "@chakra-ui/react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import useDeveloperApiStore from "stores/useDeveloperApiStore";
import { useEffect } from "react";
import { fetchApiKey } from "api/backend";
import { Navigation } from "@/components/Navigation";

const developer = () => {
  const apiKey = useDeveloperApiStore((data: any) => data.api_key);
  const setApiKey = useDeveloperApiStore((data: any) => data.setApiKey);
  const wallet = useWallet();
  const { connection } = useConnection();

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
            </Stack>
            <Stack>
              {wallet && wallet.publicKey && (
                <Box>
                  <Code colorScheme={"whiteAlpha"}>{apiKey["api_key"]}</Code>
                  <Code colorScheme={"whiteAlpha"}>
                    {apiKey["active"] === true ? "Active" : "Inactive"}
                  </Code>
                </Box>
              )}
            </Stack>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
};

export default developer;
