import { Card, CardContent, Typography, Chip, IconButton } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

interface TaskProps {
  task: { id: string; title: string; description: string; status: string };
  onDelete: (id: string) => void;
  onUpdate: (id: string) => void;
}

const TaskCard: React.FC<TaskProps> = ({ task, onDelete, onUpdate }) => {
  return (
    <Card sx={{ m: 2, p: 2, borderLeft: `5px solid ${task.status === "completada" ? "green" : "orange"}` }}>
      <CardContent>
        <Typography variant="h6">{task.title}</Typography>
        <Typography color="textSecondary">{task.description}</Typography>
        <Chip
          label={task.status.toUpperCase()}
          color={task.status === "completada" ? "success" : task.status === "en progreso" ? "warning" : "default"}
          sx={{ mt: 1 }}
        />
        <IconButton color="primary" onClick={() => onUpdate(task.id)}>
          <Edit />
        </IconButton>
        <IconButton color="error" onClick={() => onDelete(task.id)}>
          <Delete />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
