import { useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import AddTaskDialog from "../components/AddTaskDialog";
import TaskList from "../components/TaskList";
import Navbar from "../components/Navbar";

const TASK_STATUSES = ["to do", "in progress", "done"] as const;

type TaskStatus = (typeof TASK_STATUSES)[number];

type Task = {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
};

const Home = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [open, setOpen] = useState(false);

  const addTask = (task: Task) => setTasks([...tasks, task]);
  const deleteTask = (id: string) => setTasks(tasks.filter((t) => t.id !== id));
  const updateTask = (updatedTask: Task) => {
    if (!["to do", "in progress", "done"].includes(updatedTask.status)) {
      console.error("Invalid status:", updatedTask.status);
      return;
    }
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  return (
    <>
      <Navbar />
      <Container sx={{ mt: 4 }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography variant="h5" sx={{ color: "info.main" }}>
            To-do list  
          </Typography>

          <Button
            variant="contained"
            color="primary"
            onClick={() => setOpen(true)}
            sx={{ borderRadius: "20px" }}
          >
            + New Task
          </Button>
        </Box>

        <AddTaskDialog
          open={open}
          onClose={() => setOpen(false)}
          onSave={addTask}
        />
        <TaskList tasks={tasks} onDelete={deleteTask} onUpdate={updateTask} />
      </Container>
    </>
  );
};

export default Home;
