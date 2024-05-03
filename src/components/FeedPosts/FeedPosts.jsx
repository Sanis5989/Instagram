import { Box, Container, Flex, VStack } from "@chakra-ui/react";
import FeedPost from "./FeedPost";

import { useEffect, useState } from "react";
import { SkeletonCircle } from "@chakra-ui/react";
import { Skeleton } from "@chakra-ui/react";

const FeedPosts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);
  return (
    <Container maxW={"container.sm"} py={3} px={2}>
      {isLoading &&
        [0, 1, 2, 3].map((item, index) => (
          <VStack key={index} gap={4} alignItems={"flex-start"} mb={10}>
            <Flex gap={2}>
              <SkeletonCircle size="10" />
              <VStack gap={2} alignItems="flex-start">
                <Skeleton height="10px" w={"200px"} />
                <Skeleton height="10px" w={"200px"} />
              </VStack>
            </Flex>
            <Skeleton w={"full"}>
              <Box h={"500px"}></Box>
            </Skeleton>
          </VStack>
        ))}
      {!isLoading && (
        <>
          <FeedPost img="./img1.png" username="sanis" avatar="/img1.png" />
          <FeedPost img="./img2.png" username="hari" avatar="/img2.png" />
          <FeedPost img="./img3.png" username="shyam" avatar="/img3.png" />
          <FeedPost img="./img4.png" username="krishna" avatar="/img4.png" />
        </>
      )}
    </Container>
  );
};

export default FeedPosts;
