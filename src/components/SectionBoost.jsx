import { Button, Text, VStack } from "@chakra-ui/react";
import boostDesk from "../assets/bg-boost-desktop.svg";
import boostMob from "../assets/bg-boost-mobile.svg";

export function SectionBoost() {
  return (
    <VStack
      bgImg={{base:boostMob, xl:boostDesk}}
      bgColor="secondary"
      spacing={6}
      pb={{base:20, xl:10}}
    >
      <Text fontSize={{base:28, xl:32}} fontWeight="bold" color="white" mt={16}>
        Boost your links today
      </Text>
      <Button variant="primary" borderRadius={20} px={8} py={{base:6, xl:0}}>
        Get Started
      </Button>
    </VStack>
  );
}
