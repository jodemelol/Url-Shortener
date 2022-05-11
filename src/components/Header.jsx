import { Box, Button, Container, Image, Stack, Text } from "@chakra-ui/react";
import working from "../assets/illustration-working.svg";

export function Header() {
  return (
    <Stack
      direction={["column-reverse", "row", "row", "row"]}
      justify="space-between"
      overflow="hidden"
      align="center"
    >
      <Box py={24} pl={[0, 0, 0, 44]}>
        <Text
          as="h1"
          fontSize={[40, 0, 0, 60]}
          fontWeight="extrabold"
          lineHeight={["40px", "0", "0", "70px"]}
          textAlign={["center", "none", "none", "initial"]}
        >
          More than just shorter links
        </Text>
        <Text
          opacity="0.5"
          fontSize={18}
          textAlign={["center", "none", "none", "initial"]}
          mt={6}
        >
          Build your brand's recognotion and get detailed insights on how your
          links are performing
        </Text>
        <Button
          variant="primary"
          my={6}
          px={6}
          borderRadius={24}
          mx={["120px", "0", "0", "0"]}
        >
          Get Started
        </Button>
      </Box>
      <Image
        src={working}
        alt={working}
        width="700px"
        position="relative"
        right="-115"
        top="10"
      />
    </Stack>
  );
}
