import { Box, Text, Container, Stack, Button } from "@chakra-ui/react";
import { Boxes } from "./Boxes";

export function Main({ list }) {
  return (
    <Box bg="statis" pb="300px">
      <Container maxW="container.lg">
        <Box pt={24}>
          {list.map((item) => (
            <Stack
              key={item.id}
              justify="space-between"
              direction={["column", , , "row"]}
              align={["flex-start", , , "center"]}
              bg="white"
              py={2}
              px={4}
              borderRadius="lg"
              mt={4}
              spacing={8}
            >
              <Text>{item.url} </Text>
              <Stack
                justify="space-between"
                spacing={[4, , , 8]}
                direction={["column", , , "row"]}
                align={["initial", , , "center"]}
              >
                <Text color="primary">{item.corto}</Text>
                <Button
                  w={["320px", , , "100px"]}
                  variant="primary"
                  onClick={() => {
                    navigator.clipboard.writeText(item.corto);
                  }}
                >
                  Copy
                </Button>
              </Stack>
            </Stack>
          ))}
        </Box>
        <Text textAlign="center" fontSize={36} fontWeight="bold" mt={18}>
          Avanced Statistics
        </Text>
        <Text
          textAlign="center"
          opacity="0.5"
          fontSize={16}
          px={["0", , , "200px"]}
          mt={4}
        >
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </Text>
        <Boxes />
      </Container>
    </Box>
  );
}
