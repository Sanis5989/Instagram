import { Box, Image, VStack,Input, InputGroup, InputRightElement,Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
import { useNavigate } from 'react-router-dom';


const AuthForm = () => {

    //TO toggle show and hide button for password field
    const [show, setShow] = useState(false);
    const handleClick = () => { setShow(!show)};
    
    //to handle if sign up or login page
    const [isLogin, setIsLogin] = useState(true) ;

    //to navigate the pages
    const navigate = useNavigate();

    //function to handle auth form
    const [inputs, setInputs] = useState({
        email:'',
        password:'',
        confirmPassword:''
    })
    const handleAuth = () => {
        if(!inputs.email || !inputs.password) {
            alert("please fill in the form.")
            return;
        }

        navigate("/");

    };

  return (
    <>
    <Box border={"solid 1px grey"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
            <Image src='logo.png' alt='instagram logo' h={24} cursor={"pointer"}/>
            <Input
                placeholder='Email'
                fontSize={"medium"}
                type='email'
                value={inputs.email}
                onChange={(e) => setInputs({... inputs, email:e.target.value})}
            />
            <InputGroup size='md'>
                <Input
                    pr='4.5rem'
                    type={show ? 'text' : 'password'}
                    placeholder='Enter password'
                    value={inputs.password}
                    onChange={(e) => setInputs({... inputs, password:e.target.value})}
                />
                <InputRightElement width='4.5rem' pl={6}>
                    <Button h='1.75rem' size='sm' onClick={handleClick} bg={'transparent'} px={0}>
                        {show ? <VscEye/> : <VscEyeClosed/>}
                    </Button>
                </InputRightElement>
            </InputGroup>
            {!isLogin ? (
                <InputGroup size='md'>
                <Input
                    pr='4.5rem'
                    type={show ? 'text' : 'password'}
                    placeholder='Confirm password'
                    value={inputs.confirmPassword}
                    onChange={(e) => setInputs({... inputs, confirmPassword:e.target.value})}
                />
                <InputRightElement width='4.5rem' pl={6}>
                    <Button  h='1.75rem' size='sm' onClick={handleClick}  bg={'transparent'} px={0}>
                        {show ? <VscEye/> : <VscEyeClosed/>}
                    </Button>
                </InputRightElement>
            </InputGroup>
            ) : null}
            <Button w={"full"} colorScheme={'blue'} size={"sm"} fontSize={14} onClick={handleAuth}>
                {isLogin ? 'Log in' : 'Sign Up'}
            </Button>
            <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
                <Box flex={2} h={"1px"} bg={"gray.400"}/>
                <Text mx={1} color={"white"}>OR</Text>
                <Box flex={2} h={"1px"} bg={"gray.400"}/>
            </Flex>
            <Flex alignItems={"center"} justifyContent={"center"}  w={"full"}>
                <Image src="google.png" w={5} alt='google image'/>
                <Text mx={2} color={"blue.500"} cursor={"pointer"}>Log in with Goggle</Text>
            </Flex> 
        </VStack>
    </Box>
    <Box border={"solid 1px grey"} borderRadius={4} padding={5}>
        <Flex justifyContent={"center"} alignItems={"center"} gap={2}>
            <Text size={14}>
                Don't Have an account?
            </Text>
            <Text size={14} color={"blue.500"} cursor={"pointer"} onClick={() => setIsLogin(!isLogin)} >
                {!isLogin ? "Log In" : "Sign Up"}
            </Text>
        </Flex>
    </Box>
    </>
  )
};

export default AuthForm;