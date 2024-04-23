import React from "react";
import Story from "./story";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

const Stories = () => {
  const storiesContainer = React.useRef(null);

  const handleScroll = (offset) => {
    if (storiesContainer.current) {
      storiesContainer.current.scrollLeft += offset;
    }
  };

  return (
    <>
      <Flex
        flexDirection={"row"}
        gap={6}
        alignItems={"center"}
        justifyContent={"space-between"}
        mt={6}
        overflow={"hidden"}
        ref={storiesContainer}
      >
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
      </Flex>

      <Flex
        maxW={"container.sm"}
        justifyContent={"space-between"}
        position={"sticky"}
        bottom={20}
        pt={8}
        mix-blend-mode="darken"
      >
        <Button
          onClick={() => handleScroll(-30)}
          cursor="pointer"
          position={"sticky"}
          zIndex={1}
          mt={5}
          borderRadius={"full"}
        >
          <AiOutlineLeft />
        </Button>
        <Button
          onClick={() => handleScroll(30)}
          cursor="pointer"
          position={"sticky"}
          zIndex={1}
          mt={5}
          borderRadius={"full"}
        >
          <AiOutlineRight />
        </Button>
      </Flex>
    </>
  );
};

export default Stories;
