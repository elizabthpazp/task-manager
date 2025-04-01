import { useState } from "react";
import { Container, Typography } from "@mui/material";
import TaskChart from "../components/TaskChart";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  type Task = {
    id: string;
    title: string;
    description: string;
    status: "to do" | "in progress" | "done";
  };

  const [tasks, setTasks] = useState<Task[]>([
    { id: "1", title: "Create API", description: "Add endpoints in Python", status: "to do" },
    { id: "2", title: "Frontend", description: "Design with MUI", status: "in progress" },
    { id: "3", title: "Deploy", description: "Upload to AWS", status: "done" },
  ]);

  return (
    <>
      <Navbar />
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" textAlign="center">📊 Task Dashboard</Typography>
        <TaskChart tasks={tasks} />
      </Container>
    </>
  );
};

export default Dashboard;
