import { Flex, Text, Avatar, Box } from "@chakra-ui/react";
import React from "react";

const SuggestedUser = ({ avatar, username, followers }) => {
  return (
    <Flex justifyContent={"space-between"}>
      <Flex>
        <Avatar src={avatar} />
        <Box>
          <Text>{username}</Text>
          <Text>{followers} followers</Text>
        </Box>
      </Flex>
      <Text>Follow</Text>
    </Flex>
  );
};

export default SuggestedUser;
