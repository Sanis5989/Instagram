import React from "react";
import { Flex, Text, Image } from "@chakra-ui/react";

const GoggleAuth = () => {
  return (
    <>
      <Flex alignItems={"center"} justifyContent={"center"} w={"full"}>
        <Image src="google.png" w={5} alt="google image" />
        <Text mx={2} color={"blue.500"} cursor={"pointer"}>
          Log in with Goggle
        </Text>
      </Flex>
    </>
  );
};

export default GoggleAuth;
