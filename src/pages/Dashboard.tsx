import { useState } from "react";
import { Container, Typography } from "@mui/material";
import TaskChart from "../components/TaskChart";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  type Task = {
    id: string;
    title: string;
    description: string;
    status: "por hacer" | "en progreso" | "completada";
  };

  const [tasks, setTasks] = useState<Task[]>([
    { id: "1", title: "Hacer API", description: "Crear endpoints en Python", status: "por hacer" },
    { id: "2", title: "Frontend", description: "Diseñar con MUI", status: "en progreso" },
    { id: "3", title: "Desplegar", description: "Subir a AWS", status: "completada" },
  ]);

  return (
    <>
      <Navbar />
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" textAlign="center">📊 Dashboard de Tareas</Typography>
        <TaskChart tasks={tasks} />
      </Container>
    </>
  );
};

export default Dashboard;
