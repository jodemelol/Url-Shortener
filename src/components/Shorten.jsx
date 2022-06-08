import { Button, Container, Input, Stack, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Main } from "./Main";
import backDesk from "../assets/bg-shorten-desktop.svg";

export function Shorten() {
  const [url, setUrl] = useState("");
  const [list, setList] = useState([]);
  const [corto, setCorto] = useState("");

  const API_URL = "https://api.shrtco.de/v2";

  console.log(list);

  useEffect(() => {
    if (url.length) {
      getLink();
    }
  }, [url]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({ url, corto, id: uuidv4() });
    setUrl("");
    setCorto("");
  };

  const addItem = (items) => {
    setList([...list, items]);
  };

  const getLink = async () => {
    try {
      const response = await fetch(`${API_URL}/shorten?url=${url}`);
      const data = await response.json();
      setCorto(data.result.full_short_link2);
      console.log(data.result.short_link2);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Box mt="-100px">
        <Container
          as="section"
          maxW={{base:"350px", xl:"container.lg"}}
          bgImg={backDesk}
          height={{base:"180px", xl:36}}
          bgColor="secondary"
          borderRadius={8}
          mt={20}
          pos="relative"
          top="20"
        >
          <form onSubmit={(e) => handleSubmit(e)}>
            <Stack
              direction={{base:"column", xl:"row"}}
              pos="relative"
              top={{base:5, xl:50}}
              px={6}
              spacing={8}
              align="center"
            >
              <Input
                bg="white"
                placeholder="Shorten a link here..."
                py={6}
                w={{base:"288px", xl:"800px"}}
                value={url}
                type="url"
                onChange={(e) => {
                  setUrl(e.target.value);
                }}
              />
              <Button
                onClick={(e) => handleSubmit(e)}
                variant="primary"
                px={10}
                py={6}
                w={{base:"288px", xl:"165px"}}
              >
                Shorten it!
              </Button>
            </Stack>
          </form>
        </Container>
      </Box>
      <Main list={list} corto={corto} />
    </>
  );
}
