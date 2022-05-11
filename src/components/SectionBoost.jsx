import { Button, Text, VStack } from "@chakra-ui/react";
import boostDesk from "../assets/bg-boost-desktop.svg";
import boostMob from "../assets/bg-boost-mobile.svg";

export function SectionBoost() {
  return (
    <VStack
      bgImg={[boostMob, , , boostDesk]}
      bgColor="secondary"
      spacing={6}
      pb={[20, , , 10]}
    >
      <Text fontSize={[28, , , 32]} fontWeight="bold" color="white" mt={16}>
        Boost your links today
      </Text>
      <Button variant="primary" borderRadius={20} px={8} py={[6, , , 0]}>
        Get Started
      </Button>
    </VStack>
  );
}
