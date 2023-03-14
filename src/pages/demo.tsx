import { Box, Container, Heading, Stack, Code, Flex } from "@chakra-ui/react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import useDeveloperApiStore from "stores/useDeveloperApiStore";
import { useEffect } from "react";
import { fetchApiKey } from "api/backend";
import { Navigation } from "@/components/Navigation";
import JoinOurTeam from "./templates/forms/authentication/joinOurTeam";

const developer = () => {
  const apiKey = useDeveloperApiStore((data: any) => data.api_key);
  const setApiKey = useDeveloperApiStore((data: any) => data.setApiKey);
  const wallet = useWallet();
  const { connection } = useConnection();

  //   useEffect(() => {
  //     if (wallet.publicKey) {
  //       console.log("wallet", wallet.publicKey.toBase58());
  //       const getApiKey = async () => {
  //         const data = await fetchApiKey({
  //           walletId: wallet.publicKey?.toBase58(),
  //         });
  //         setApiKey(data["api_key"]);
  //         console.log(apiKey);
  //       };
  //       getApiKey();
  //     }
  //   }, [wallet, connection]);
  return (
    <Box minH="100vh">
      <Container maxW={"7xl"} flex={"1 0 auto"} py={8} mt={20}>
        <Flex alignItems={"center"} justifyContent={"center"} w={"full"}>
          <Stack mb={10}>
            <Heading
              size={"xl"}
              bgGradient="linear(to-r, #805AD5, #FF0080)"
              bgClip="text"
              alignItems={"center"}
            >
              deCaptcha DEMO
            </Heading>
          </Stack>
        </Flex>
        <JoinOurTeam />
      </Container>
    </Box>
  );
};

export default developer;
