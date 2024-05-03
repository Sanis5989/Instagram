import { Box, Grid, GridItem, Skeleton, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ProfilePost from "./ProfilePost";

const ProfilePosts = () => {
  const [isloading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <Grid
      templateColumns={{ sm: "repeat(1,1fr)", md: "repeat(3,1fr)" }}
      gap={1}
      columnGap={1}
    >
      {isloading &&
        [0, 1, 2, 3, 4, 5].map((_, idx) => (
          <VStack key={idx} alignItems={"flex-start"} gap={4}>
            <Skeleton w={"full"}>
              <Box h={"300px"}>Conent Wrapped</Box>
            </Skeleton>
          </VStack>
        ))}

      {!isloading && (
        <>
          <ProfilePost img="./img1.png" />
          <ProfilePost img="./img2.png" />
          <ProfilePost img="./img3.png" />
          <ProfilePost img="./img4.png" />
        </>
      )}
      <GridItem></GridItem>
    </Grid>
  );
};

export default ProfilePosts;
