import { Container, Heading, VStack, Box, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Forum = () => {
  const topics = [
    { id: 1, title: "Latest in AI", description: "Discuss the latest trends and breakthroughs in AI." },
    { id: 2, title: "Web Development", description: "Share tips and tricks for modern web development." },
    { id: 3, title: "Cybersecurity", description: "Talk about the latest in cybersecurity and how to stay safe online." },
  ];

  return (
    <Container maxW="container.md" py={8}>
      <Heading as="h1" size="xl" mb={6}>Forum Topics</Heading>
      <VStack spacing={4} align="stretch">
        {topics.map(topic => (
          <Box key={topic.id} p={4} borderWidth="1px" borderRadius="lg">
            <Link as={RouterLink} to={`/topic/${topic.id}`}>
              <Heading as="h2" size="md">{topic.title}</Heading>
            </Link>
            <Text mt={2}>{topic.description}</Text>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Forum;