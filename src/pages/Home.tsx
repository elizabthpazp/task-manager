import { useState } from "react";
import { Button, Container } from "@mui/material";
import AddTaskDialog from "../components/AddTaskDialog";
import TaskList from "../components/TaskList";
import Navbar from "../components/Navbar";

interface Task {
  id: string;
  title: string;
  description: string;
  status: string;
}

const Home = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [open, setOpen] = useState(false);

  const addTask = (task: Task) => setTasks([...tasks, task]);
  const deleteTask = (id: string) => setTasks(tasks.filter((t) => t.id !== id));
  const updateTask = (id: string) =>
    setTasks(tasks.map((t) => (t.id === id ? { ...t, status: "completed" } : t)));

  return (
    <>
      <Navbar />
      <Container sx={{ mt: 4 }}>
        <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
          + New task
        </Button>
        <AddTaskDialog open={open} onClose={() => setOpen(false)} onAdd={addTask} />
        <TaskList tasks={tasks} onDelete={deleteTask} onUpdate={updateTask} />
      </Container>
    </>
  );
};

export default Home;
