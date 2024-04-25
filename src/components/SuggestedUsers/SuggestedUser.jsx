import { Flex, Text, Avatar, Box, Button, VStack } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

const SuggestedUser = ({ avatar, username, followers }) => {
  const [isFollowed, setFollowed] = useState(false);

  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar src={avatar} name={username} size={"md"} />
        <VStack spacing={2} alignItems={"start"}>
          <Text fontSize={12} fontWeight={"bold"}>
            {username}
          </Text>
          <Text fontSize={11} fontWeight={"bold"} color={"gray.400"}>
            {followers} followers
          </Text>
        </VStack>
      </Flex>
      <Button
        fontSize={13}
        bg={"transparent"}
        h={"max-content"}
        fontWeight={"medium"}
        color={"blue.400"}
        cursor={"pointer"}
        _hover={{ color: "white" }}
        p={0}
        onClick={() => setFollowed(!isFollowed)}
      >
        {isFollowed ? "Unfollow" : "Follow"}
      </Button>
    </Flex>
  );
};

export default SuggestedUser;
