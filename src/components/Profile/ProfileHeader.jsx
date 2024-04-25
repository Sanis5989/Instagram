import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Flex,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const ProfileHeader = ({ avatar, username }) => {
  return (
    <Flex
      p={4}
      gap={{ base: 4, sm: 10 }}
      direction={{ base: "column", sm: "row" }}
    >
      <Box>
        <AvatarGroup
          justifySelf={"center"}
          alignSelf={"center"}
          mx={"auto"}
          size={{ base: "xl", md: "2xl" }}
        >
          <Avatar src={avatar} />
        </AvatarGroup>
      </Box>
      <VStack alignItems={"start"} gap={2} flex={1}>
        <Flex
          gap={4}
          alignItems={"center"}
          direction={{ base: "column", sm: "row" }}
          justifyContent={{ base: "center", sm: "flex-start" }}
          w={"full"}
        >
          <Text fontSize={{ base: "sm", md: "lg" }}>{username}</Text>
          <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
            <Button
              bg={"white"}
              color={"black"}
              _hover={{ bg: "whiteAlpha.800" }}
              size={{ base: "xs", md: "sm" }}
            >
              Edit Profile
            </Button>
          </Flex>
        </Flex>

        <Flex alignItems={"center"} gap={{ base: 2, sm: 4 }}>
          <Text fontSize={{ base: "xs", md: "sm" }}>
            <Text as="span" fontWeight={"bold"} mr={1}>
              4
            </Text>
            Posts
          </Text>
          <Text fontSize={{ base: "xs", md: "sm" }}>
            <Text as="span" fontWeight={"bold"} mr={1}>
              200
            </Text>
            Followers
          </Text>
          <Text fontSize={{ base: "xs", md: "sm" }}>
            <Text as="span" fontWeight={"bold"} mr={1}>
              1
            </Text>
            Following
          </Text>
        </Flex>
        <Flex alignItems={"center"} gap={4}>
          <Text fontSize={"center"} fontWeight={"bold"}>
            sanish maharjan
          </Text>
        </Flex>
        <Text fontSize={"sm"}>Greatest programmer ever</Text>
      </VStack>
    </Flex>
  );
};

export default ProfileHeader;
