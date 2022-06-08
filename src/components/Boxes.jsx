import { Box, Text, Stack, Image } from "@chakra-ui/react";
import brand from "../assets/icon-brand-recognition.svg";
import detailed from "../assets/icon-detailed-records.svg";
import fully from "../assets/icon-fully-customizable.svg";

export function Boxes() {
  return (
    <Stack direction={{base:"column", xl:"row"}} justify="center" spacing={0}>
      <Box
        bg="white"
        maxW="sm"
        px={10}
        borderRadius={10}
        pos="relative"
        top="100"
      >
        <Box
          bg="secondary"
          borderRadius={30}
          width="60px"
          height="60px"
          p={4}
          pos="relative"
          top="-8"
          left={{base:105, xl:0}}
        >
          <Image src={brand} alt={brand} />
        </Box>
        <Text
          fontWeight="bold"
          fontSize={22}
          pb={6}
          textAlign={{base:"center", xl: "initial"}}
        >
          Brand Reconigtion
        </Text>
        <Text
          opacity="0.5"
          fontSize={14}
          pb={10}
          textAlign={{base:"center", xl: "initial"}}
        >
          Boost your brand recognition with each click. Generic links don’t mean
          a thing. Branded links help instil confidence in your content.
        </Text>
      </Box>
      <Box
        width={[2, , , 20]}
        height={[16, , , 2]}
        bg="primary"
        pos="relative"
        top={["100", , , "255"]}
        left={["170", , , "0"]}
      ></Box>
      <Box
        bg="white"
        maxW="sm"
        px={10}
        borderRadius={10}
        pos="relative"
        top={["120", , , "155"]}
      >
        <Box
          bg="secondary"
          borderRadius={30}
          width="60px"
          height="60px"
          p={4}
          pos="relative"
          top="-8"
          left={[105, , , 0]}
        >
          <Image src={detailed} alt={detailed} />
        </Box>
        <Text
          fontWeight="bold"
          fontSize={22}
          pb={6}
          textAlign={["center", "none", "none", "initial"]}
        >
          Detailed Records
        </Text>
        <Text
          opacity="0.5"
          fontSize={14}
          pb={10}
          textAlign={["center", "none", "none", "initial"]}
        >
          Gain insights into who is clicking your links. Knowing when and where
          people engage with your content helps inform better decisions.
        </Text>
      </Box>
      <Box
      
        width={{base:2, xl:20}}
        height={{base:16, xl:2}}
        bg="primary"
        pos="relative"
        top={{base:120, xl:255}}
        left={{base:170, xl:0}}
      ></Box>
      <Box
        bg="white"
        maxW="sm"
        px={10}
        borderRadius={10}
        pos="relative"
        top={{base:135, xl:205}}
      >
        <Box
          bg="secondary"
          borderRadius={30}
          width="60px"
          height="60px"
          p={4}
          pos="relative"
          top="-8"
          left={{base:105, xl:0}}
        >
          <Image src={fully} alt={fully} />
        </Box>
        <Text
          fontWeight="bold"
          fontSize={22}
          pb={6}
          textAlign={{base:"center", xl:"initial"}}
        >
          Fully Customizable
        </Text>
        <Text
          opacity="0.5"
          fontSize={14}
          pb={10}
          textAlign={{base:"center", xl:"initial"}}
        >
          Improve brand awareness and content discoverability through
          customizable links, supercharging audience engagement.
        </Text>
      </Box>
    </Stack>
  );
}
