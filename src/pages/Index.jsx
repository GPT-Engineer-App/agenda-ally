import { useState } from "react";
import { 
  Box, 
  Button, 
  Checkbox, 
  Container, 
  Flex, 
  Heading, 
  IconButton, 
  Input, 
  List, 
  ListItem, 
  Text, 
  VStack 
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <Container maxW="container.md" p={4}>
      <Flex justifyContent="center" mb={6}>
        <Heading as="h1" size="xl">Todo App</Heading>
      </Flex>
      <Box mb={4}>
        <Flex>
          <Input
            placeholder="Add a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            mr={2}
          />
          <Button onClick={addTask} colorScheme="teal">Add Task</Button>
        </Flex>
      </Box>
      <List spacing={3}>
        {tasks.map((task, index) => (
          <ListItem key={index} display="flex" alignItems="center">
            <Checkbox
              isChecked={task.completed}
              onChange={() => toggleTaskCompletion(index)}
              mr={2}
            />
            <Text as={task.completed ? "s" : undefined} flex="1">
              {task.text}
            </Text>
            <IconButton
              aria-label="Delete task"
              icon={<FaTrash />}
              onClick={() => deleteTask(index)}
              colorScheme="red"
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Index;