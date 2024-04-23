import {Box, Container, Flex,Image, VStack} from "@chakra-ui/react"

import React from 'react'
import AuthForm from "../../components/AuthForm/AuthForm"

const AuthPage = () => {
  return (
    <Flex minH={"100vh"} justify-content= {"center"} alignItems={"center"} px={4}>
        <Container maxW = {"container.md"} padding={0} >
            
            <Flex justifyContent={"center"} alignItems= {"center"} gap={10}>
            {/* left hand side*/}
            <Box display={{base:"none", md:"block"}}>
                <Image src="auth.png" h={650} alt="Phone image"/>
            </Box>
            {/* Right hand side*/}  
            <VStack spacing={4} align={"stretch"}>
                <AuthForm/>
                <Box textAlign={"center"}>Get the App.</Box>
                <Flex gap={5} justifyContent={"center"}>
                    <Image src="playstore.png" alt="playstore image" h={10}/>
                    <Image src="microsoft.png" alt="microsoft image" h={10}/>
                </Flex>
            </VStack>
            </Flex>
        </Container>
    </Flex>
  )
}

export default AuthPage