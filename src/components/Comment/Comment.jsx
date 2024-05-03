import { Avatar, Flex, Text } from "@chakra-ui/react";

const Comment = ({ profilePic, username, comentedAt, text }) => {
  return (
    <Flex alignItems={"flex-start"} gap={4}>
      <Avatar size={"sm"} src={profilePic} />
      <Flex flexDir={"column"}>
        <Flex flexDirection={"row"} gap={2}>
          <Text fontWeight={"bold"} fontSize={"14"}>
            {username}
          </Text>
          <Text fontSize={12}>{text}</Text>
        </Flex>
        <Text fontSize={12} color={"gray"}>
          {comentedAt}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Comment;
