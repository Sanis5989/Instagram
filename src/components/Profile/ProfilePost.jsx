import {
  Flex,
  GridItem,
  Image,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  Box,
  Avatar,
  Divider,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Comment from "../Comment/Comment";
import PostFooter from "../FeedPosts/PostFooter";

const ProfilePost = ({ img }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* Grid item/ post tabs */}
      <GridItem
        cursor={"pointer"}
        borderRadius={4}
        overflow={"hidden"}
        border={"0.5px solid"}
        borderColor={"whiteAlpha.300"}
        position={"relative"}
        aspectRatio={1 / 1}
        onClick={onOpen}
      >
        {/* hover overlay */}
        <Flex
          justifyContent={"center"}
          opacity={0}
          _hover={{ opacity: "1" }}
          bg={"blackAlpha.700"}
          position={"absolute"}
          top={0}
          bottom={0}
          left={0}
          right={0}
          zIndex={1}
          transition={"all 0.3s ease"}
        >
          <Flex alignItems={"center"} justifyContent={"center"} gap={50}>
            <Flex>
              <AiFillHeart size={20} />
              <Text fontWeight={"bold"} ml={2}>
                7
              </Text>
            </Flex>
            <Flex>
              <FaComment size={20} />
              <Text fontWeight={"bold"} ml={2}>
                5
              </Text>
            </Flex>
          </Flex>
        </Flex>

        {/* post image */}
        <Image
          src={img}
          w={"100%"}
          h={"100%"}
          objectFit={"cover"}
          alt="Profile post"
        />
      </GridItem>

      {/* Modal for the post */}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered={true}
        size={{ base: "3xl", md: "5xl" }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody bg={"black"} pb={5}>
            <Flex gap={4} w={{ base: "90%", sm: "70%", md: "full" }} mx="auto">
              <Box
                borderRadius={4}
                overflow={"hidden"}
                border={"1px solid"}
                borderColor={"whiteAlpha.300"}
                flex={1.5}
              >
                <Image src={img} alt="profile post" />
              </Box>
              <Flex
                flex={1}
                flexDirection={"column"}
                px={10}
                display={{ sm: "none", md: "flex" }}
              >
                <Flex alignItems={"center"} justifyContent={"space-between"}>
                  <Flex alignItems={"center"} gap={4}>
                    <Avatar src="/profilepic.png" size={"sm"} name="Sanis" />
                    <Text fontWeight={"bold"} fontSize={12}>
                      Sansih
                    </Text>
                  </Flex>
                  <Box
                    _hover={{ bg: "whiteAlpha.300", color: "red.600" }}
                    borderRadius={4}
                    p={1}
                  >
                    <MdDelete cursor={"pointer"} size={20} />
                  </Box>
                </Flex>
                <Divider my={4} bg={"gray.500"} />
                <VStack
                  w={"full"}
                  maxH={"350px"}
                  overflow={"auto"}
                  alignItems={"start"}
                >
                  <Comment
                    profilePic="./img1.png"
                    comentedAt={"1d ago"}
                    username={"sanish"}
                    text={"I am going to get a job!"}
                  />
                  <Comment
                    profilePic="./img2.png"
                    comentedAt={"1d ago"}
                    username={"sanish"}
                    text={"I am going to get a job!"}
                  />
                  <Comment
                    profilePic="./img3.png"
                    comentedAt={"1d ago"}
                    username={"sanish"}
                    text={"I am going to get a job!"}
                  />
                  <Comment
                    profilePic="./img1.png"
                    comentedAt={"1d ago"}
                    username={"sanish"}
                    text={"I am going to get a job!"}
                  />
                  <Comment
                    profilePic="./img2.png"
                    comentedAt={"1d ago"}
                    username={"sanish"}
                    text={"I am going to get a job!"}
                  />
                  <Comment
                    profilePic="./img3.png"
                    comentedAt={"1d ago"}
                    username={"sanish"}
                    text={"I am going to get a job!"}
                  />
                  <Comment
                    profilePic="./img1.png"
                    comentedAt={"1d ago"}
                    username={"sanish"}
                    text={"I am going to get a job!"}
                  />
                  <Comment
                    profilePic="./img2.png"
                    comentedAt={"1d ago"}
                    username={"sanish"}
                    text={"I am going to get a job!"}
                  />
                  <Comment
                    profilePic="./img3.png"
                    comentedAt={"1d ago"}
                    username={"sanish"}
                    text={"I am going to get a job!"}
                  />
                </VStack>
                <Divider my={4} bg={"gray.800"} />
                <PostFooter isProfilePost={"true"} />
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfilePost;
