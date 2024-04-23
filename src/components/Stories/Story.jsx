import { Box, Text, Avatar } from "@chakra-ui/react";
import React from "react";

const Story = () => {
  return (
    <Box pt={3} w={"full"}>
      <Box
        display="inline-block"
        borderRadius="full"
        border="2px solid transparent"
        backgroundImage="linear-gradient(2deg, #405DE6, #5851DB, #C13584, #E1306C, #FD1D1D)"
      >
        <Avatar
          src="./img1.png"
          alt="user profile picture"
          size="lg"
          border={"3px solid black"}
        />
      </Box>

      <Text fontSize={"12px"} textAlign={"center"}>
        Sanish
      </Text>
    </Box>
  );
};

export default Story;
