import { HStack, VStack, Button, Image, Text, Icon } from "@chakra-ui/react";
import { useWallet } from "@solana/wallet-adapter-react";
import { ButtonLink } from "components/button-link";
import { FiArrowRight } from "react-icons/fi";

const Wallets = () => {
  const { select, wallets, publicKey, disconnect } = useWallet();

  return !publicKey ? (
    <VStack gap={4}>
      {wallets.filter((wallet) => wallet.readyState === "Installed").length >
      0 ? (
        wallets
          .filter((wallet) => wallet.readyState === "Installed")
          .map((wallet) => (
            <Button
              variant="outline"
              key={wallet.adapter.name}
              onClick={() => select(wallet.adapter.name)}
              size="lg"
              fontSize="md"
              borderRadius='30'
              leftIcon={
                <Image
                  src={wallet.adapter.icon}
                  alt={wallet.adapter.name}
                  h={4}
                  w={4}
                />
              }
            >
              {wallet.adapter.name}
            </Button>
          ))
      ) : (
        <ButtonLink
          size="lg"
          href="https://solana.com/ecosystem/explore?categories=wallet"
          variant="outline"
          rightIcon={
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
          }
        >
          Get Wallet
        </ButtonLink>
      )}
    </VStack>
  ) : (
    <HStack gap={4}>
      <Text>{publicKey.toBase58()}</Text>
      <Button size="lg" fontSize="md" onClick={disconnect} variant="primary">
        Disconnect
      </Button>
    </HStack>
  );
};

export default Wallets;
