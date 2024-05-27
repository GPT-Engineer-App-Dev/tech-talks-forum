import { Box, Flex, Link, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Link as={RouterLink} to="/" color="white" fontSize="xl" fontWeight="bold">
            Tech Forum
          </Link>
        </Box>
        <Flex alignItems="center">
          <Link as={RouterLink} to="/" color="white" mr={4}>
            Home
          </Link>
          <Link as={RouterLink} to="/forum" color="white" mr={4}>
            Forum
          </Link>
          <Button as={RouterLink} to="/topic/1" colorScheme="teal" variant="outline">
            Topic
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;