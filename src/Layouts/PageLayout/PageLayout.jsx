import { Box, Flex, calc } from "@chakra-ui/react";
import Sidebar from "../../Sidebar/Sidebar";
import { useLocation } from "react-router-dom";

export const PageLayout = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <Flex>
      {/* Sidebar on the left */}
      {pathname !== "/auth" ? (
        <Box w={{ base: "70px", md: "70px", lg: "240px" }}>
          <Sidebar />
        </Box>
      ) : null}
      {/* the page content on the right */}
      <Box
        flex={1}
        w={{
          base: "calc(100% - 70px)",
          md: "calc(100% - 70px)",
          lg: "calc(100% - 240px)",
        }}
      >
        {children}
      </Box>
    </Flex>
  );
};
