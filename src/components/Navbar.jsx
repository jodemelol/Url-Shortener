import {
  Container,
  Stack,
  Image,
  Button,
  Link,
  Menu,
  MenuButton,
  MenuList,
  IconButton,
  Divider,
} from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";

export function Navbar() {
  return (
    <Container maxW="container.lg" pt={4}>
      <Stack direction="row" justify="space-between">
        <Stack
          direction="row"
          justify="space-between"
          spacing={8}
          align="center"
        >
          <Image src={logo} alt={logo} />
          <Stack
            display={["none", "none", "none", "flex"]}
            direction="row"
            spacing={4}
          >
            <Link fontWeight="bold" _hover={{ opacity: 1 }}>
              Features
            </Link>
            <Link fontWeight="bold" _hover={{ opacity: 1 }}>
              Pricing
            </Link>
            <Link fontWeight="bold" _hover={{ opacity: 1 }}>
              Resources
            </Link>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          spacing={8}
          align="center"
          display={["none", "none", "none", "flex"]}
        >
          <Link fontWeight="bold" opacity="0.4" _hover={{ opacity: 1 }}>
            Login
          </Link>
          <Button borderRadius={24} px={6} variant="primary">
            Sign Up
          </Button>
        </Stack>
        <Stack display={["flex", "none", "none", "none"]}>
          <Menu>
            <MenuButton
              as={IconButton}
              pl={3}
              bg="none"
              _active={{ bg: "none", boxShadow: "none", opacity: "0.7" }}
            >
              <GiHamburgerMenu />
            </MenuButton>
            <MenuList bg="secondary" w="350px" borderRadius="xl" py={10} px={4}>
              <Stack
                direction="column"
                align="center"
                spacing={8}
                color="white"
              >
                <Link fontWeight="bold" opacity="1">
                  Features
                </Link>
                <Link fontWeight="bold" opacity="1">
                  Pricing
                </Link>
                <Link fontWeight="bold" opacity="1">
                  Resources
                </Link>
                <Divider opacity="0.2" />
                <Link fontWeight="bold" opacity="1">
                  Login
                </Link>
                <Button borderRadius={24} px={24} variant="primary">
                  Sign Up
                </Button>
              </Stack>
            </MenuList>
          </Menu>
        </Stack>
      </Stack>
    </Container>
  );
}
