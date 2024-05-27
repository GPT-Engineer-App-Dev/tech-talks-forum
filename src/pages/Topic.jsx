import { Container, Heading, VStack, Box, Text, Textarea, Button } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Topic = () => {
  const { id } = useParams();
  const [comments, setComments] = useState([
    { id: 1, text: "This is a great topic!" },
    { id: 2, text: "I have some insights to share." },
  ]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, { id: comments.length + 1, text: newComment }]);
      setNewComment("");
    }
  };

  return (
    <Container maxW="container.md" py={8}>
      <Heading as="h1" size="xl" mb={6}>Discussion Topic {id}</Heading>
      <VStack spacing={4} align="stretch">
        {comments.map(comment => (
          <Box key={comment.id} p={4} borderWidth="1px" borderRadius="lg">
            <Text>{comment.text}</Text>
          </Box>
        ))}
        <Textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add your comment..."
          size="sm"
        />
        <Button onClick={handleAddComment} colorScheme="blue">Add Comment</Button>
      </VStack>
    </Container>
  );
};

export default Topic;