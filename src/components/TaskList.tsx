import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import TaskCard from "./TaskCard";

interface Task {
  id: string;
  title: string;
  description: string;
  status: string;
}

interface TaskListProps {
  tasks: Task[];
  onDelete: (id: string) => void;
  onUpdate: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete, onUpdate }) => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Pending tasks 📌
      </Typography>
      <Grid container spacing={2}>
        {tasks.map((task) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={task.id}
            component={"div" as React.ElementType}
          >
            <TaskCard task={task} onDelete={onDelete} onUpdate={onUpdate} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TaskList;
