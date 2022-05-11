import { Box, Container, Stack, Text, Link } from "@chakra-ui/react";
import {
  FaPinterest,
  FaTwitter,
  FaFacebookSquare,
  FaInstagram,
} from "react-icons/fa";

export function Footer() {
  return (
    <Box bg="foot">
      <Container maxW="container.lg">
        <Stack
          direction={["column", , , "row"]}
          align={["center", , , "initial"]}
          justify="space-between"
          fontSize={14}
          py={20}
        >
          <Text
            color="white"
            fontSize={30}
            fontWeight="bold"
            pb={[10, , , 0]}
            mt={[-10, , , 0]}
          >
            Shortly
          </Text>
          <Stack
            direction={["column", , , "row"]}
            align={["center", , , "initial"]}
            spacing={[10, , , 20]}
            color="white"
          >
            <Box>
              <Text textAlign={["center", , , "initial"]}>Features </Text>
              <Stack
                spacing={2}
                fontSize={12}
                pt={6}
                align={["center", , , "initial"]}
              >
                <Link>Link Shortening</Link>
                <Link>Branded Links</Link>
                <Link>Analytics </Link>
              </Stack>
            </Box>
            <Box>
              <Text textAlign={["center", , , "initial"]}>Resources </Text>
              <Stack
                spacing={2}
                fontSize={12}
                pt={6}
                align={["center", , , "initial"]}
              >
                <Link>Blog </Link>
                <Link>Developers </Link>
                <Link>Support </Link>
              </Stack>
            </Box>
            <Box>
              <Text textAlign={["center", , , "initial"]}>Company </Text>
              <Stack
                spacing={2}
                fontSize={12}
                pt={6}
                align={["center", , , "initial"]}
              >
                <Link>About </Link>
                <Link>Our Team</Link>
                <Link>Careers </Link>
                <Link>Contact</Link>
              </Stack>
            </Box>
          </Stack>
          <Stack
            direction="row"
            color="white"
            spacing={4}
            fontSize={20}
            pt={[10, , , 0]}
          >
            <Box _hover={{ color: "primary", cursor: "pointer" }}>
              <FaFacebookSquare />
            </Box>
            <Box _hover={{ color: "primary", cursor: "pointer" }}>
              <FaTwitter />
            </Box>
            <Box _hover={{ color: "primary", cursor: "pointer" }}>
              <FaPinterest />
            </Box>
            <Box _hover={{ color: "primary", cursor: "pointer" }}>
              <FaInstagram />
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
