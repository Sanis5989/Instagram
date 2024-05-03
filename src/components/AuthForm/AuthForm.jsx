import { Box, Image, VStack, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

import LoginAuth from "./LoginAuth";
import SignUpAuth from "./SignUpAuth";
import GoggleAuth from "./GoggleAuth";

const AuthForm = () => {
  //   //to handle if sign up or login page
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <Box border={"solid 1px grey"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
          <Image
            src="logo.png"
            alt="instagram logo"
            h={24}
            cursor={"pointer"}
          />
          {isLogin ? <LoginAuth /> : <SignUpAuth />}
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            my={4}
            gap={1}
            w={"full"}
          >
            <Box flex={2} h={"1px"} bg={"gray.400"} />
            <Text mx={1} color={"white"}>
              OR
            </Text>
            <Box flex={2} h={"1px"} bg={"gray.400"} />
          </Flex>
          <GoggleAuth />
        </VStack>
      </Box>
      <Box border={"solid 1px grey"} borderRadius={4} padding={5}>
        <Flex justifyContent={"center"} alignItems={"center"} gap={2}>
          <Text size={14}>
            {isLogin ? "Don't Have an account?" : "Already have an account?"}
          </Text>
          <Text
            size={14}
            color={"blue.500"}
            cursor={"pointer"}
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign up" : "Log in"}
          </Text>
        </Flex>
      </Box>
    </>
  );
};

export default AuthForm;
