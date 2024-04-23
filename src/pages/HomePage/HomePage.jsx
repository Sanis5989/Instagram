import { Container, Box, Flex } from "@chakra-ui/react";
import React from "react";
import FeedPosts from "../../components/FeedPosts/FeedPosts";
import Stories from "../../components/Stories/stories";
import SuggestedUsers from "../../components/SuggestedUsers/SuggestedUsers";

const HomePage = () => {
  return (
    <Container maxW={"container.lg"}>
      <Flex gap={20}>
        {/* <Flex
          flexDirection={"column"}
          maxW={"conatiner.sm"}
          maxH={"full"}
          overflow={"hidden"}
        > */}

        <Box flex={2} py={10} alignItems={"center"}>
          <Box
            maxW={"container.sm"}
            overflow={"hidden"}
            maxH={40}
            my={0}
            alignItems={"center"}
            marginX={"auto"}
          >
            <Stories />
          </Box>
          <FeedPosts />
        </Box>
        <Box
          flex={3}
          mr={20}
          display={{ base: "none", md: "none", lg: "block" }}
          maxW={"300px"}
        >
          <SuggestedUsers />
        </Box>
      </Flex>

      {/* </Flex> */}
    </Container>
  );
};

export default HomePage;
