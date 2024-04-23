import { VStack, Flex, Text, Box, Link } from "@chakra-ui/react";
import React from "react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4} w={"300px"}>
      {/* suggested header that has user profile and logout option */}
      <SuggestedHeader />

      {/* text that says suggested for you */}
      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Suggested for you
        </Text>
        <Text
          fontSize={12}
          fontWeight={"bold"}
          _hover={{ color: "gray.400" }}
          cursor={"pointer"}
        >
          See All
        </Text>
      </Flex>

      {/* All the suggesed user profiles */}
      <SuggestedUser />
      <SuggestedUser />
      <SuggestedUser />
      <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
        © 2024 Built By{" "}
        <Link
          href="https://23998586.it.scu.edu.au"
          target="_blank"
          color={"blue.500"}
          fontSize={14}
        >
          Sanis Maharjan
        </Link>
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
