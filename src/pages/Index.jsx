import { Container, Text, VStack, Heading } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to Tech Forum</Heading>
        <Text fontSize="lg" textAlign="center">
          Join the community to discuss the latest in technology, share knowledge, and learn from experts.
        </Text>
      </VStack>
    </Container>
  );
};

export default Index;