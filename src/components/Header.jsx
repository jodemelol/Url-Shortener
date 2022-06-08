import { Box, Button, Container, Image, Stack, Text } from "@chakra-ui/react";
import working from "../assets/illustration-working.svg";

export function Header() {
  return (
    <Stack
      direction={{base:"column-reverse", xl:"row"}}
      justify="space-between"
      overflow="hidden"
      align="center"
    >
      
      <Box py={24} pl={[0, 0, 0, 44]}>
        <Text
          as="h1"
          fontSize={{base:40, xl:60}}
          fontWeight="extrabold"
          lineHeight={{base:"40px", xl:"70px"}}
          textAlign={{base:"center", xl:"initial"}}
        >
          More than just shorter links
        </Text>
        <Text
          opacity="0.5"
          fontSize={18}
          textAlign={{base:"center", xl:"initial"}}
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
          mx={{base:"120px", xl: 0}}
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
